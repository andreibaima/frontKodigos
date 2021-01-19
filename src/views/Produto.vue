<template>
    <div id="corpo">
        <h1>CRUD PRODUTO</h1>
        
        <div class="container">
        <!-- {{produto.nome}} -->
            <form @submit.prevent="salvar">
                <!-- <label>Id</label>
                <input type="text" placeholder="ID" v-model="produto.id"><br> -->
                <label class="form-label">Nome</label>
                <input type="text" placeholder="NOME" v-model="produto.nome" class="form-control"><br>
                <label class="form-label">Descricao</label>
                <input type="text" placeholder="DESCRICAO" v-model="produto.descricao" class="form-control"><br>
                <label class="form-label">Unide de Medida</label>
                <input type="text" placeholder="UNIDADE MEDIDA" v-model="produto.uniMedida" class="form-control"><br>
                <button class="btn btn-success">Salvar</button>
            </form>

            <table class="table">
              <tbody>
                  <tr>
                      <td>ID</td>
                      <td>NOME</td>
                      <td>DESCRIÇÃO</td>
                      <td>UNIDADE MEDIDA</td>
                  </tr>
                  <tr v-for="produto of produtos" :key="produto.id">
                      <td>{{ produto.id }}</td>
                      <td>{{produto.nome}}</td>
                      <td>{{produto.descricao}}</td>
                      <td>{{produto.uniMedida}}</td>
                      <td><button @click="editar(produto)" class="btn btn-warning btn-sm">Alterar</button>
                      <button @click="remover(produto.id)" class="btn btn-danger btn-sm">Deletar</button></td>
                  </tr>
              </tbody>
            </table>
          </div>
    </div>
</template>

<script>

    import Produto from '../services/produtos'

    export default {

      data() {
        return {
          produto: {
              id: '',
              nome: '',
              descricao: '',
              uniMedida: ''
          },
          
          produtos: [],
          errors: []
        }
      },

      mounted() {
        this.listar()
        // Produto.listar().then(resposta => {
        //   console.log(resposta.data)
        //   this.produtos = resposta.data
        // })
      },

      methods: {

        listar() {
          Produto.listar().then(resposta => {
              this.produtos = resposta.data
          })
        },

        salvar() {

            if (!this.produto.id) {
              // console.log(produto)
                  Produto.salvar(this.produto).then(resposta => {
                    // console.log(produto)
                      this.produto = {}
                      alert('salvo com sucesso! ')
                      this.listar()
                  }).catch(e => {
                    // console.log(e.response.data.errors)
                    this.errors = e.response.data.errors
                })
            }else {
                  Produto.atualizar(this.produto).then(resposta => {
                      this.produto = {}
                      alert('Alterado com sucesso! ')
                      this.listar()
                  }).catch(e => {
                    // console.log(e.response.data.errors)
                    this.errors = e.response.data.errors
                })
            }
            
        },

        editar(produto) {
            console.log(produto)
            this.produto = produto
        },

        remover(produto) {

          if (confirm('Deseja excluir o produto')) {
              console.log(produto)
              Produto.apagar(produto).then(resposta => {
                  this.listar();
                  this.errors = []
              }).catch(e => {
                  this.errors = e.response.data.errors
              })
          }
        }
      }

    }

</script>

<style>

</style>

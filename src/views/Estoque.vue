<template>
    <div id="corpo">
        <h1>CRUD ESTOQUE</h1>
        
        <div class="container">
            <form @submit.prevent="salvar" >
                <label>Codigo Produto</label>
                <input type="text" placeholder="ID" v-model="estoque.id_prod" class="form-control"><br>
                <label class="form-label">Quantidade</label>
                <input type="text" placeholder="QUANTIDADE" v-model="estoque.qtd" class="form-control"><br>
                
                <button class="btn btn-success">Salvar</button>
            </form>

            <table class="table">
              <tbody>
                  <tr>
                      <td>ID</td>
                      <td>PROTUTO</td>
                      <td>QUANTIDADE</td>
                      <td>AÇÕES</td>
                  </tr>
                  <tr v-for="estoque of estoques" :key="estoque.id">
                      <td>{{ estoque.id }}</td>
                      <td>{{estoque.id_prod}}</td>
                      <td>{{estoque.qtd}}</td>
                    <td><button @click="editar(estoque)" class="btn btn-warning btn-sm">Alterar</button>
                      <button @click="remover(estoque.id)" class="btn btn-danger btn-sm">Deletar</button></td>
                  </tr>
              </tbody>
            </table>
          </div>
    </div>
</template>

<script>
    // import Produto from './services/produtos'
    import Estoque from '../services/estoque'

    export default {

      data() {
        return {
          estoque: {
              id: '',
              id_prod: '',
              qtd: ''             
          },
          
          estoques: []/*,
          errors: []*/
        }
      },

      mounted() {
        this.listar()

        /*Estoque.listar().then(resposta => {
          console.log(resposta.data)
          this.estoques = resposta.data
        })*/
      },

      methods: {

        listar() {
          Estoque.listar().then(resposta => {
              this.estoques = resposta.data
          })
        },

        salvar() {

            if (!this.estoque.id) {
              // console.log(produto)
                  Estoque.salvar(this.estoque).then(resposta => {
                    // console.log(produto)
                      this.estoque = {}
                      alert('salvo com sucesso! ')
                      this.listar()
                  }).catch(e => {
                    alert("ERRO, PRODUTO NÃO EXISTE")
                    //  console.log(e.response.data.errors)
                    // this.errors = e.response.data.errors
                })
            }else {
                  Estoque.atualizar(this.estoque).then(resposta => {
                      this.estoque = {}
                      alert('Alterado com sucesso! ')
                      this.listar()
                  }).catch(e => {
                    console.log("ERROOOOOOOOOOOO")
                    // this.errors = e.response.data.errors
                })
            }
            
        },

        editar(estoque) {
            console.log(estoque)
            this.estoque = estoque
        },

        remover(estoque) {

          if (confirm('Deseja excluir o Estoque')) {
              console.log(estoque)
              Estoque.apagar(estoque).then(resposta => {
                  this.listar();
                //   this.errors = []
              }).catch(e => {
                  console.log("ERROOOO")
                //   this.errors = e.response.data.errors
              })
          }
        }
      }

    }

</script>

<style>

</style>

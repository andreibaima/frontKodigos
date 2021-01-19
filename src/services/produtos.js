import { http } from './config'

export default {
    listar:() => {
        return http.get('v1/Produto/')
    },

    salvar:(produto) => {
        console.log(produto.id)
        produto.id = 0
        return http.post('v1/Produto/', produto)
    },

    atualizar:(produto) => {
        console.log(produto.id)
        return http.put('v1/Produto/'+ produto.id, produto)
    },

    apagar:(produto) =>  {
        return http.delete('v1/Produto/'+produto)
    }
}
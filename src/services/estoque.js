import { http } from './config'

export default {
    listar:() => {
        return http.get('v1/Estoque/')
    },

    salvar:(estoque) => {
        console.log("Valor"+estoque.id_prod)
        // produto.id = 0
        return http.post('v1/Estoque/', estoque)
    },

    atualizar:(estoque) => {
        console.log("id_estoque"+estoque.id)
        return http.put('v1/Estoque/'+estoque.id, estoque)
    },

    apagar:(estoque) =>  {
        return http.delete('v1/Estoque/'+estoque)
    }
}
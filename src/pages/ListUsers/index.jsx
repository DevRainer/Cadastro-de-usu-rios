
import { useEffect } from "react"
import api from "../../services/api.js"

import { Button } from "../../components/Button/styles"
import TopBackground from "../../components/TopBackground/index.jsx"


function ListUsers() {

useEffect(() => {
 
    async function getUsers() {
        const usersFromApi = await api.get('/usuarios');
        console.log(usersFromApi)
    }
    getUsers();
   
    }, [])

    return (
        <div>
            <TopBackground />
            <h1>Listagem de Usuários</h1>
            <Button>Verificar Usuário</Button>

        </div>
    )
}

export default ListUsers
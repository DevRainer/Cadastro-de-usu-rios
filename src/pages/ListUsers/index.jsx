
import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api.js"
import { Button } from "../../components/Button/styles"
import TopBackground from "../../components/TopBackground/index.jsx"
import {Title} from './styles'
import {Container, ContainerUser, CardUsers, TrashIcon,} from './styles'
import Trash from "../../assets/trash.svg"



function ListUsers() {
const [users, setUsers] = useState([]);
   const navigate = useNavigate(); 

useEffect(() => {
 
    async function getUsers() {
        const {data} = await api.get('/usuarios');
        setUsers(data);
        console.log(data);
    }
    getUsers();
   
    }, [])

    return (
        <Container>
            <TopBackground />

            <Title>Usuários Cadastrados</Title>

            <ContainerUser>
            {users.map( (user) => (
                <CardUsers key={user.id}>
                <div>   
                    <p>Nome: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Idade: {user.age}</p>
                </div>
                <TrashIcon src={Trash} alt="Lixeira" />
                </CardUsers>
            ))}
            </ContainerUser>
            <Button type="button" onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )
}

export default ListUsers
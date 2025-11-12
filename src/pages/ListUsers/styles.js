
import styled from 'styled-components';


export const Title = styled.h2`
  margin-top: 20px;
  color: #fff;
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;

`
export const ContainerUser = styled.div`

display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
margin: 30px 0;

@media (max-width: 768px) {
    grid-template-columns: 1fr;
}

`
export const CardUsers = styled.div`

background-color:#252d48;
padding: 16px;
border-radius: 32px;
display: flex;
justify-content:space-between;
align-items:center;
gap: 20px;
max-width: 380px



`
export const Container = styled.div`

background-color: #203269ff;
min-height: 100vh;
padding: 20px;
justify-content: space-evenly;
display: flex;
align-items: center;
flex-direction:column;

p {
    color: #fff;
    font-size:14px;
    font-weight: 200;
}

h3 {
color: #fff;
font-size:24px;
margin-bottom: 3px;
text-transform: capitalize;
}
`
export const TrashIcon = styled.img`
cursor: pointer;

&:hover {
    opacity: 0.8;
}

&:active {
    opacity: 0.5;
}

`
export const AvatarUser = styled.img`

height: 80px;

`

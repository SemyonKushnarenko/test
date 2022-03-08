import styled from "styled-components"
import user from './user.png'

const UserDiv = styled.div`
display: flex;
`

const User = () => {
    return (
        <UserDiv>
            <img src={user} 
            width="20" 
            height="20" 
            alt="movie" 
            title="image" 
            />
        </UserDiv>
    )
}

export default User
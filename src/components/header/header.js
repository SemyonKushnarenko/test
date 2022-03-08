import styled from "styled-components"
import SearchBar from "../searchBar"
import SearchResult from "../searchResult"
import User from "../user"

const HeaderDiv = styled.div`
    width: 100%;
    padding: 10px 25px;
    background-color: #BADAED;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.h1``

const Header = ({onChangeValue}) => {    
    return (
        <>
            <HeaderDiv>
                <Title>Movie Catalog</Title>
                <SearchBar onChangeValue={onChangeValue} />
                <User />
            </HeaderDiv>
            <SearchResult/>
        </>
    )
}

export default Header
import styled from "styled-components"
import { useContext, useEffect, useRef } from "react"
import queryContext from "../../context/queryContext"

const Search = styled.input`
width: 350px;
height: 30px;
padding-left: 3px;
outline: none;
border: none;
-webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.38) inset;
-moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.38) inset;
box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.38) inset;
border-top: 1px solid #000;
`

const SearchBar = ({onChangeValue}) => {
    const myRef = useRef(null)
    useEffect(() => {
        myRef.current.focus()
    })

    const {query, onQueryChange} = useContext(queryContext)

    return (
        <Search 
        ref={myRef}
        type="text" 
        placeholder="Which movie" 
        name="movieSearch" 
        value={query}
        onInput={(e) => {
            onChangeValue(e)
            onQueryChange()
        }} />
    )
}

export default SearchBar
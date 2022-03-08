import { useContext } from "react"
import styled from "styled-components"
import queryContext from "../../context/queryContext"

const SearchResultMessage = styled.p`
    font-weight: 700;
    font-size: 24px;
`

const SearchResult = () => {
    const {query, result} = useContext(queryContext)

    const message = result.totalResults ? 
    `You searched for: ${query}, ${result.totalResults} results found`
     : result.imdbID === "tt3896198" ? `Start typing...`
     : `${result.Error} Try to clarify your query`
     
    return (
        <SearchResultMessage>
            {message}
        </SearchResultMessage>
    )
}

export default SearchResult
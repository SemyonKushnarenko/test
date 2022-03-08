import styled from "styled-components"
import NotFound from "./not.jpg"

const Poster = styled.div`
    width: 200px;
    margin: 30px 15px;
    text-align: center;
`
const Img = styled.img`
    object-fit: contain;
    width: 200px;
    height: 300px;
    border: 10px solid lightgrey;
`

const PosterCard = ({url, name, year, id, type}) => {
    return (
        <Poster>
            <Img src={ url === 'N/A' ? NotFound : url} alt="movie" title="image"/>
            <p>Name: {name}</p>
            <p>Year: {year}</p>
            <p>IMDbID: {id}</p>
            <p>Type: {type}</p>
        </Poster>
    )
}

export default PosterCard
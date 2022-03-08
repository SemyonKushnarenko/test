import styled from "styled-components"
import PosterCard from "../posterCard"

const PosterList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
`

const PosterCardList = ({data}) => {

    const posterList = data.map((item, i) => {
        const {Poster, Title, Year, imdbID, Type} = item

        return <PosterCard key={i} url={Poster} name={Title} year={Year} id={imdbID} type={Type} />
    })

    return (
        <PosterList>
            {posterList}
        </PosterList>
    )
}

export default PosterCardList
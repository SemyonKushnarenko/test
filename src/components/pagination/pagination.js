import { useContext } from "react"
import styled from "styled-components"
import queryContext from "../../context/queryContext"

const Footer = styled.div`
    max-width: 300px;
    margin: 0 auto;
    text-align: center;
    font-weight: 700;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: start;
`,
PaginationItem = styled.a`
    margin: 5px;
    cursor: pointer;
`

const Pagination = ({total}) => {
    const pagesCount = Math.ceil(total / 10)
    const {onPageChange, onPageBack, onPageForward, page} = useContext(queryContext)

    const pages = Array
    .from({ length: pagesCount }, (it, i) => i + 1)
    .map(item => {

        return (
            <PaginationItem 
                onClick={onPageChange} 
                key={item}
                className={item === page ? 'active pagination__link' : 'pagination__link'}
            >
                {item}
            </PaginationItem>
        )
    })

    return (
        <Footer>
            <PaginationItem onClick={onPageBack}>&lt;</PaginationItem>
            {pages}
            <PaginationItem onClick={onPageForward}>&gt;</PaginationItem>
        </Footer>
    )
}

export default Pagination
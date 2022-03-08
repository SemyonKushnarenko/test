import { createContext } from 'react'

const queryContext = createContext({
    query: '',
    result: {},
    page: 1,
    onPageChange: ()=>{},
    onPageBack: ()=>{},
    onPageForward: ()=>{}
})

export default queryContext
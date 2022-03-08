import './App.css'
import PosterCardList from './components/posterCardList'
import Header from './components/header'
import Pagination from './components/pagination'
import Spinner from './components/spinner'
import { useState, useEffect } from 'react'
import MovieService from "./services/movieService"
import queryContext from './context/queryContext'

const movieService = new MovieService()


const {Provider} = queryContext

function App() {

  const [query, setQuery] = useState('')
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  // const [error, setError] = useState(false)

  useEffect(() => {
    getMovies()
  }, [query])

  useEffect(() => {
    getMovies(page)
  }, [page])

  const onChangeValue = (e) => {
      const value = e.target.value
      setQuery(value)
  }

  const onQueryChange = () => {
    setPage(1)
  }

  const onPageChange = (e) => {
    e.preventDefault()
    
    setPage(e.target.innerHTML)
    removeColor()
    e.target.classList.add('active')
  }

  const removeColor = () => {
    document.querySelectorAll('.pagination__link').forEach(link => {
      link.classList.remove('active')
    })
  }

  const onPageBack = (e) => {
    e.preventDefault()
    if (page > 1) {
      removeColor()
      setPage(page - 1)
    }
    console.log(page)
  }

  const onPageForward = (e) => {
    e.preventDefault()
    if (page < Math.ceil(total / 10)) {
      removeColor()
      setPage(+page + 1)
      console.log(page)
    }
  }



  let getMovies = (page = 1) => {
    setLoading(true)
    movieService.getMovies(query, page)
    .then(res => {
      setResult(res)
      console.log(res);
      setLoading(false)
    })
    .catch(error => {
      setLoading(false)
      // setError(true)
      console.log(error)
    })
  }

  const posterCardList = result.Search ? <PosterCardList data={result.Search} /> : null,
  spinner = loading ? <Spinner /> : null,
  view = spinner ? spinner : posterCardList,
  total = result.totalResults,
  pagination = result.Search ? <Pagination total={total} /> : null

  return (
    <div className='container'>
      <Provider value={
        {
          query,
          result, 
          page, 
          onPageChange,
          onPageForward,
          onPageBack,
          onQueryChange
        }
      }>
          <Header total={total} onChangeValue={onChangeValue}/>
          {view}
          {pagination}
      </Provider>
    </div>
  );
}

export default App;

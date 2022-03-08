class MovieService {
    getResource = async (url) => {
        let res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }

    getMovies = async (q, page) => {
        return await this.getResource(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${q}&page=${page}`)
    }
}

export default MovieService
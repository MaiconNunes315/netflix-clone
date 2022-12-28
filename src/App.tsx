import Header from "./components/header/Header"
import ImageMain from "./components/imageMain/ImageMain"
import {useState, useEffect} from "react"
import { getLists } from "./tmdbList"

type Imovies = {
  genres_id: []
  id:number
  title: string
  overview: string
  backdrop_path: string
  poster_path:string
  
}

function App() {

const [movies, setMovies] = useState<Imovies[]>([])


useEffect(() => {

  getLists().then((res)=> setMovies(res.dataMovie.item))
  
}, [])
  
  const listTemporary = movies.find((movie) => {
    return { 
      id: movie.id,
      background: movie.backdrop_path,
      title: movie.title,
      synopsis: movie.overview,
      
    }
  })
  
  console.log(listTemporary)
  
  

  const image = `https://image.tmdb.org/t/p/original${listTemporary?.backdrop_path}`
  

  return (
    <div className="app">
      <Header />
      <ImageMain style={{ backgroundImage: `url(${image})` }} movieOrTv={"Filme"} title={listTemporary?.title} synopsis={listTemporary?.overview} />
    </div>
  )
}

export default App

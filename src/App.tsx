import Header from "./components/header/Header"
import ImageMain from "./components/imageMain/ImageMain"
import {useState, useEffect} from "react"
import { getLists } from "./tmdbList"

import "./App.scss";
import Carrousel from "./components/carrousel/Carrousel";

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
  
const numberAleatory = () => { return Math.floor(Math.random() * 20) }
  
  const listTemporary = movies[numberAleatory()]
  const image = `https://image.tmdb.org/t/p/original${listTemporary?.backdrop_path}`
  

  return (
    <div className="app">

      <div className="div-main">
      <Header />
      <ImageMain style={{ backgroundImage: `url(${image})`}} movieOrTv={"Filme"} title={listTemporary?.title} synopsis={listTemporary?.overview} />
      </div>

      <div className="div-carrousel">
        <Carrousel />
        <Carrousel />
        <Carrousel/>
      </div>

      
     

    </div>
  )
}

export default App

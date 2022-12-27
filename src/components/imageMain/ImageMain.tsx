import "./imageMain.scss"
import logoN from "../../assets/netflix.png"

export default function ImageMain() {

  fetch(`https://api.themoviedb.org/3/movie/10656/images?api_key=${import.meta.env.VITE_API_KEY}`)
  .then(res => res.json()).then(res=> console.log(res))

  const image = "https://image.tmdb.org/t/p/original/qvLaS8Vs00EOwIeKcTCA0zjliMW.jpg"
    
  return (
    <section style={{backgroundImage:`url(${image})`}}>

      {/* <img className="image-main" src={image} /> */}

      <div className="description">

        <div>
          <img src={logoN} />
          <span>Série</span>
        </div>

        <h1>Titulo do filme</h1>

        </div>

        

        <h2>Assista há</h2>

        <p>sinopse do filme</p>

      <div>
        
          <div>
          <button>Assistir</button>
          <button>mais informações</button>
          </div>
         
          <div>
            <span>Classificação indicativa</span>
          </div>

        </div>
        
        
      
    </section>
  )
}

import { CaretLeft, CaretRight } from "phosphor-react"
import { useState } from "react"
import { GrNext, GrPrevious } from "react-icons/gr"
import "./carrousel.scss"

type CarrouselPropsI = {
  category: string
  image: string[]
  id:string
  
}

export default function Carrousel({category,image,id}:CarrouselPropsI) {

  const [scroolX, setScroolX] = useState(innerWidth);

  return (
    <div className="carrousel" >
      <h2>{category}</h2>

      <div className="div-imgs" >
    
      <button id={id} className="button-carrousel-prev" onClick={() => {
        
        const position = parseInt(id)
        const scroolX = document.querySelectorAll('.container-img');      
        scroolX[position]?.scrollBy(-innerWidth, 0)
          
          
        }}><CaretLeft className="prev" weight="light" /></button>

        <button id={id} type="button" className="button-carrousel-next" onClick={() => {     
          
          const position = parseInt(id)
        const scroolX = document.querySelectorAll('.container-img');      
        scroolX[position]?.scrollBy(innerWidth, 0)
         
      }}>
        <CaretRight weight="light" className="next"/>
      </button>

        <div className="container-img">
        {image.map((img,index) => (
          <div key={index} >
            
            <img className="img-carrousel" src={ `https://image.tmdb.org/t/p/original${img}`} />
         </div>
        ))}  
        </div>  

      
      </div>

      

      
    </div>
  )
}

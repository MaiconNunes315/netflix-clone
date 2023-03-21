import { CaretLeft, CaretRight } from "phosphor-react"
import { useState } from "react"
import { GrNext, GrPrevious } from "react-icons/gr"
import {MdOutlineArrowForwardIos, MdArrowForwardIos} from "react-icons/md"
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
      <div className="category-container">

        <div className="category-left">
        <h2>{category}</h2>
        <span className="hidden">Ver tudo </span>
        <CaretRight weight="bold" className="arrow hidden" />
        </div>

        <div className="category-right">
          <div className="item active"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>

      </div>
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
          <div key={index} className="">
            
            <img className="img-carrousel" src={`https://image.tmdb.org/t/p/original${img}`} />
            
            <div>
              <div>
                <div>
                  <span>Play</span>
                  <span>Adicionar na lista</span>
                  <span>gostei</span>
                </div>
                <span>episódios e informações</span>
              </div>

              <div>
                <span>relevancia</span>
                <span>classificação indicativa</span>
                <span>quant. episodios</span>
              </div>
              
              <div>
                <span>cat1</span>
                <span>cat2</span>
                <span>cat3</span>
              </div>
            </div>
         </div>
        ))}  
        </div>  

      
      </div>

      

      
    </div>
  )
}

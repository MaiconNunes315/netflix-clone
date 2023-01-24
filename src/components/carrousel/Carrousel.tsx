import { useState } from "react"
import "./carrousel.scss"

export default function Carrousel() {

  const [ scroolX, setScroolX] = useState(0)

  return (
    <div className="carrousel" >
      <button className="button-carrousel-a" onClick={(e) => {
        
        setScroolX(scroolX + innerWidth)
       }}>A</button>

      <div className="div-imgs" style={{marginLeft:scroolX}}>
      <div >
        <img className="img-carrousel" src="https://images2.alphacoders.com/724/724132.jpg"/>
      </div>
      <div >
        <img className="img-carrousel" src="https://www.papeldeparede.etc.br/fotos/wp-content/uploads/sm3_wp4_1024.jpg"/>
      </div>
      <div >
        <img className="img-carrousel" src="https://avatars.mds.yandex.net/i?id=f4269aa43bccd573810f936d21bae9f610cd7f26-4829304-images-thumbs&n=13"/>
      </div>
      <div >
        <img className="img-carrousel" src="https://avatars.mds.yandex.net/i?id=f6b950cc4596370970d8ed8da9ac31c7-5476551-images-thumbs&n=13"/>
      </div>
      <div >
        <img className="img-carrousel" src="https://avatars.mds.yandex.net/i?id=bc6b34326e84fe1451a3262d61121674e8902b60-7763602-images-thumbs&n=13"/>
      </div>
      <div >
        <img className="img-carrousel" src="https://avatars.mds.yandex.net/i?id=aeea16017e9b47029b39dd101ef064964b5cea01-7744452-images-thumbs&n=13"/>
      </div>
      <div >
        <img className="img-carrousel" src="https://avatars.mds.yandex.net/i?id=2a00000185c629a6c1ceb924bde5955b5f45-786094-fast-images&n=13"/>
      </div>
      <div >
        <img className="img-carrousel" src="https://avatars.mds.yandex.net/i?id=55d480d7660656dd74afa174ca86a555a57ec58c-8182507-images-thumbs&n=13"/>
      </div>
      <div >
        <img className="img-carrousel" src="https://avatars.mds.yandex.net/i?id=bf5884885d1b3802d37b014d6ccab1bc-4304109-images-thumbs&n=13"/>
        </div>
        </div>
      <button className="button-carrousel-b" onClick={(e) => {
        
       setScroolX(scroolX - innerWidth)
      }}>b</button>

      
    </div>
  )
}

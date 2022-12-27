import "./header-nav.scss";

type IList = {
    list: string;
    
}

export default function Nav({list}:IList) {
 return (
            <ul className="list"> 
             <li>{list}</li>
            </ul>
 )
  
}

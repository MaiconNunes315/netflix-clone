
type IList = {
    list: string;
    
}

export default function Nav({list}:IList) {
 return (
            <ul className='flex ml-4 items-center font-medium'> 
             <li className="cursor-pointer">{list}</li>
            </ul>
 )
  
}

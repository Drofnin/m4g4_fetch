import {useState,useEffect }from 'react' /*þegar við þurfum að nota api, þá þarf að importa hooknum useState sem og useEffect*/
import Character from './character'

type CharacterType = {
  id:number, 
  name: string, 
  image: string
}
function App() {
 const [characters, setCharacters] = useState ([]);  /*creating our state*/
 useEffect (() => {
    const getData = async() => { /*async means we can use other syncronition functions inside it(like fetch)*/
      const response = await fetch("https://rickandmortyapi.com/api/character") /*here comes the api (GET)*/
      const json  = await response. json();
      setCharacters(json.results)
    } 
    getData()

  },[])                                   
 
                                           /*here we have array of object, then we use curlybrackets*/
  return (
    <>
      <div>
        {characters.map((character) =>{
          return(
            
            <Character key={character.id} obj={character}/>
           
          )                  
        })}
      
      </div>
    </>
  )
}
export default App

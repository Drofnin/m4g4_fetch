const Character = ({obj}) => {
    return(
    <div key = {Character.id}>
              <h1>{obj.name}</h1>
              <p> {obj.status}</p>
              <img src = {obj.image}/>
            </div>
    
    
)
}
export default Character

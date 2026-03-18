const Profil=(props)=>{
    console.log(props)
    return(
        <div>
            <h2>Profil Component</h2>
            <h3>Je m'appelle {props.name}</h3>
            <h3>J'ai {props.age} ans</h3>
           
           <ul>
                {
                    props.pays.map((el,i,t)=> <li key={i}>{el}</li>)
                }
           </ul>

           <h2>{props.bootcamp.title}</h2>

           
        </div>
    )
}

export default Profil
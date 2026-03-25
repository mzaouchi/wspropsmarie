import About from "./About"

// const Profil=(props)=>{
//     console.log(props)
//     var track = "Fullstack JS"
//     return(
//         <div>
//             <h2>Profil Component</h2>
//             <h3>Je m'appelle {props.name}</h3>
//             <h3>J'ai {props.age} ans</h3>
           
//            <ul>
//                 {
//                     props.pays.map((el,i,t)=> <li key={i}>{el}</li>)
//                 }
//            </ul>

//            <h2>{props.bootcamp.title}</h2>

//            <About track={track}/>

//            {props.voiture}


//             <ul>
//                 {
//                     props.voiture.map((el,i,t)=><li>{el}</li>)
//                 }
//             </ul>

//         </div>
//     )
// }


const Profil=({name, age, pays, bootcamp, voiture, student,SayHello, HelloHello, show, children})=>{

    var track = "Fullstack JS"
    return(
        <div>
            <h2>Profil Component</h2>
            <h3>Je m'appelle {name}</h3>
            <h3>J'ai {age} ans</h3>
           
           <ul>
                {
                    pays.map((el,i,t)=> <li key={i}>{el}</li>)
                }
           </ul>

           <h2>{bootcamp.title}</h2>

           <About track={track}/>

           {voiture}

            {children}

            <ul>
                {
                    voiture.map((el,i,t)=><li>{el}</li>)
                }
            </ul>

                <h1>{student}</h1>

            {
                show === true ?
                <button onClick={SayHello}>Hello</button>
                :
                <button onClick={()=>HelloHello("Youssef")}>Hello Name</button>
            }        
          
        </div>
    )
}

export default Profil
import React, {useState} from 'react'
const Tarjeta = () => {
    const [celebridades, setcelebridades] = useState(null)
    const [error, seterror] = useState(false)
        const getUsuarios = async() =>{
            try {
                const res = await fetch("https://randomuser.me/api/?results=1")
                const data = await res.json()
                setcelebridades(data.results[0])
                seterror(false)
            } catch (error) {
                console.log(error)
                seterror(true)
            }
            
        }
    if (error){
        return <div class="alert alert-warning" role="alert">
                    Error al cargar Users! <a href='https://randomuser.me'>Revise el link</a>
               </div>
    }
    return ( 
                    
        <div className = "card postion-relative">
        <div className='position-sticky top-0 start-0 col-sm-10 cold-md-20 col-lg-10'> 
        <img src={celebridades?.picture?.large} className="card-img-top"/>
        <div className="card-body text-center">
            <h5 className="card-title">{celebridades?.name?.last}</h5>
            <button className='btn btn-info fs-6'
            onClick={getUsuarios}> Persona al 🎲
            </button>
        </div>        
        </div>
        </div>
        
    
)
    
}

export default Tarjeta;
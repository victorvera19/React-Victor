import Tarjeta from "./Tarjeta"
import React, { useEffect, useState } from 'react'
import celebridades from '../helpers/Usuarios'

const Listacards = () => {
    

    return (
        <div className="container">
            <div className="row ">
            { celebridades.map(user => (
                <div className="col-sm-4" key={user.login.uuid}>
                    <Tarjeta user={user}/>
                </div> 
            ))}   
        </div>
        </div>
    )
}

export default Listacards
        

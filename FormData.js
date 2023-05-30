import React, { Component } from 'react'

function FormData(props) {

    let {handleBack, users} = props
    return (
      <div id='fd'>
        <div>
                {users.map((item,index)=>{
                    return(
                        <div key={index}>
                            <h3>Name = {item.name}</h3>
                            <h3>Age = {item.age}</h3>
                            <hr/>
                        </div>
                    )
                })
                }
                <button onClick={handleBack}>Go Back</button>
                </div>
      </div>
    )
}
export default FormData
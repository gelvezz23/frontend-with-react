import React from 'react'

const Fatal = (props) => {
    return(
        <div>
            <h3 className="center rojo">
                {props.mensaje}
            </h3>
        </div>
    )
}

export default Fatal;
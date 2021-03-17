import React from 'react'
import '../css/input.css'

const Input = ({expression}) => {
    return (
        <div className="input">
            <div>
                <h1>{expression}</h1>
            </div>
        </div>
    )
}

export default Input

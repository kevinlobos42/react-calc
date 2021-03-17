import React from 'react'
import Button from '../components/Button'
import '../css/operator.css'

const Operators = ({handleClick,handleEqual}) => {
    return (
        <div className="operators">
            <Button className="operator-btn btn" value={'/'} handleClick={handleClick} />
            <Button className="operator-btn btn" value={'x'} handleClick={handleClick}/>
            <Button className="operator-btn btn" value={'-'} handleClick={handleClick}/>
            <Button className="operator-btn btn" value={'+'} handleClick={handleClick}/>
            <Button className="operator-btn btn" value={'='} handleClick={handleEqual}/>
        </div>
    )
}

export default Operators

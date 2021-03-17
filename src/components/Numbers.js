import React from 'react'
import Button from './Button'

const Numbers = ({handleClick}) => {
    return (
        <div className="numbers">
            <Button className="number-btn btn" value={'AC'} handleClick={handleClick}/>
            <Button className="number-btn btn" value={'<=='} handleClick={handleClick}/>
            <Button className="number-btn btn" value={'%'} handleClick={handleClick}/>
            <Button className="number-btn btn" value={'7'} handleClick={handleClick}/>
            <Button className="number-btn btn" value={'8'} handleClick={handleClick}/>
            <Button className="number-btn btn" value={'9'} handleClick={handleClick}/>
            <Button className="number-btn btn" value={'4'} handleClick={handleClick}/>
            <Button className="number-btn btn" value={'5'} handleClick={handleClick}/>
            <Button className="number-btn btn" value={'6'} handleClick={handleClick}/>
            <Button className="number-btn btn" value={'1'} handleClick={handleClick}/>
            <Button className="number-btn btn" value={'2'} handleClick={handleClick}/>
            <Button className="number-btn btn" value={'3'} handleClick={handleClick}/>
            <Button className="number-btn btn" value={'.'} handleClick={handleClick}/>
            <Button className="number-btn btn" value={'0'} handleClick={handleClick}/>
            <Button className="number-btn btn" value={'()'} handleClick={handleClick}/>
        </div>
    )
}

export default Numbers

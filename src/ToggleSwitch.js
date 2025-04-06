import React, { useState } from 'react'
import './ToggleSwitch.css'
import App from './App'

function ToggleSwitch() {
    const [isOn, setIsOn] = useState(false)
    const handleClick = () => {
        setIsOn(!isOn)
        if(isOn){
            <App />
        }
    }
    return (
        <div>
            <div className='maindiv'>
                <h1>OPEN WEBSITE</h1>
                <br/>
                <div className='mainSwitch' onClick={handleClick} style={{ backgroundColor: isOn ? 'green' : 'red' }}>
                    <div className={`Toggleswitch ${isOn ? "on" : "off"}`}>
                        <span className='spanToggle'>{isOn ? 'ON' : 'OFF'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToggleSwitch

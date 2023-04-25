import React, {useState} from 'react'
import './App.css'
import s from './Components/Counter/Counter.module.css'
import {Counter} from './Components/Counter/Counter'
import {CounterSettings} from './Components/Counter/CounterSettings';

export const App = () => {
    let max = localStorage.getItem('max') || '5'
    let min = localStorage.getItem('min') || '0'


    const [maxValue, setMaxValue] = useState<number>(Number(max))
    const [minValue, setMinValue] = useState<number>(Number(min))
    const [displayValue, setDisplayValue] = useState<number>(minValue)
    // const [displayMessage, setDisplayMessage] = useState<boolean>(false)

    const incCount = () => setDisplayValue(state => state + 1)
    const resetCount = () => setDisplayValue(minValue)

    const finalClassName = (displayValue === maxValue) ? s.error : s.normal

    const disableIncButton = displayValue === maxValue

    const disableResetButton = displayValue === minValue

    let displayMessage

    if (minValue === maxValue ||
        minValue > maxValue ||
        minValue < 0
    ) {
        displayMessage = true
    } else {
        displayMessage = false
    }

    const setCounter = () => {
        setDisplayValue(minValue)
        localStorage.setItem('max', JSON.stringify(maxValue))
        localStorage.setItem('min', JSON.stringify(minValue))
    }

    return (
        <div className={'App'}>
            <CounterSettings
                maxValue={maxValue}
                minValue={minValue}
                setInputMaxValue={setMaxValue}
                setInputMinValue={setMinValue}
                setCounter={setCounter}
            />
            <Counter
                finalClassName={finalClassName}
                displayValue={displayValue}
                disableIncButton={disableIncButton}
                disableResetButton={disableResetButton}
                incCount={incCount}
                resetCount={resetCount}
                displayMessage={displayMessage}
            />
        </div>
    )
}

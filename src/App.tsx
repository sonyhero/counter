import React, {useEffect, useState} from 'react'
import './App.css'
import s from './Components/Counter/Counter.module.css'
import {Counter} from './Components/Counter/Counter'
import {CounterSettings} from './Components/Counter/CounterSettings';

export const App = () => {

    const [maxValue, setMaxValue] = useState<number>(5)
    const [minValue, setMinValue] = useState<number>(0)
    const [displayValue, setDisplayValue] = useState<number>(minValue)
    const [error, setError] = useState<string>('')

    useEffect(()=>{
        let max = localStorage.getItem('max')
        max && setMaxValue(JSON.parse(max))
        let min = localStorage.getItem('min')
        min && setMinValue(JSON.parse(min))

    }, [])

    useEffect(()=>{
        localStorage.setItem('max', JSON.stringify(maxValue))
        localStorage.setItem('min', JSON.stringify(minValue))
    }, [maxValue, minValue])


    const incCount = () => setDisplayValue(state => state + 1)
    const resetCount = () => setDisplayValue(minValue)

    const finalClassName = (displayValue === maxValue) ? s.error : s.normal

    const disableIncButton = displayValue === maxValue

    const disableResetButton = displayValue === minValue


    const setCounter = () => {
        setDisplayValue(minValue)
    }

    return (
        <div className={'App'}>
            <CounterSettings
                maxValue={maxValue}
                minValue={minValue}
                setInputMaxValue={setMaxValue}
                setInputMinValue={setMinValue}
                setCounter={setCounter}
                error={error}
                setError={setError}
            />
            <Counter
                finalClassName={finalClassName}
                displayValue={displayValue}
                disableIncButton={disableIncButton}
                disableResetButton={disableResetButton}
                incCount={incCount}
                resetCount={resetCount}
            />
        </div>
    )
}

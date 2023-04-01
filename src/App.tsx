import React, {useState} from 'react'
import './App.css'
import s from './Components/Counter/Counter.module.css'
import Counter from './Components/Counter/Counter'
import {CounterSettings} from './Components/Counter/CounterSettings';

function App() {

    const [maxValue, setMaxValue] = useState<number>(5)
    const [minValue, setMinValue] = useState<number>(0)

    const [displayValue, setDisplayValue] = useState<number>(minValue)

    const incCount = () => setDisplayValue(state => state + 1)
    const resetCount = () => setDisplayValue(minValue)

    const finalClassName = (displayValue === maxValue) ? s.error : s.normal

    const disableIncButton = displayValue === maxValue

    const disableResetButton = displayValue === minValue

    const setInputMaxValue = (newValue: number) => {
        setMaxValue(newValue)
    }
    const setInputMinValue = (newValue: number) => {
        setMinValue(newValue)
    }

    const setCounter = () => {
        setDisplayValue(minValue)
    }


    return (
        <div className={'App'}>
            <CounterSettings
                maxValue={maxValue}
                minValue={minValue}
                setInputMaxValue={setInputMaxValue}
                setInputMinValue={setInputMinValue}
                setCounter={setCounter}
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
    );
}

export default App

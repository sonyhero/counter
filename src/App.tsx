import React, {useState} from 'react'
import './App.css'
import s from './Components/Counter/Counter.module.css'
import Counter from './Components/Counter/Counter'

function App() {

    const maxValue = 5
    const minValue = 0

    const [number, setNumber] = useState<number>(minValue)

    const incCount = () => setNumber(state => state + 1)
    const resetCount = () => setNumber(0)

    const finalClassName = (number === maxValue) ? s.error : s.normal

    const disableIncButton = number === maxValue

    const disableResetButton = number === minValue


    return (
        <div className={'App'}>
            <Counter
                finalClassName={finalClassName}
                number={number}
                disableIncButton={disableIncButton}
                disableResetButton={disableResetButton}
                incCount={incCount}
                resetCount={resetCount}
            />
        </div>
    );
}

export default App

import React from 'react'
import './App.css'
import {Counter} from './Components/Counter/Counter'
import {CounterSettings} from './Components/Counter/CounterSettings';
import {useAppSelector} from './hooks/hooks';

export const App = () => {

    // const dispatch = useAppDispatch()
    const counter = useAppSelector(state => state.counter)

    // useEffect(() => {
    //     const min = localStorage.getItem('min') || '0'
    //     const max = localStorage.getItem('max') || '5'
    //     dispatch(startLocalStorageAC(Number(min), Number(max)))
    // }, [])

    let error = false
    let stopInc = false

    if (counter.minValue >= counter.maxValue ||
    counter.minValue < 0
    ) {
        error = true
    }
    if ( counter.displayValue >= counter.maxValue) {
        stopInc = true
    }

    return (
        <div className={'App'}>
            {counter.controlOpen
            ? <CounterSettings
                    minValue={counter.minValue}
                    maxValue={counter.maxValue}
                    error={error}
                    controlOpen={counter.controlOpen}
                />
            : <Counter
                    displayValue={counter.displayValue}
                    error={error}
                    stopInc={stopInc}
                    // controlOpen={counter.controlOpen}
                />
            }
        </div>
    )
}

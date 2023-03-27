import React, {useState} from 'react';
import './App.css';
import {Frame} from './Components/Frame/Frame';
import {Display} from './Components/Display/Display';
import {Value} from './Components/Value/Value';
import SuperButton from './Components/Button/SuperButton';
import s from './Components/Counter.module.css'

function App() {

    const maxValue = 5
    const minValue = 0

    const [number, setNumber] = useState<number>(minValue)

    const onClickHandlerInc = () => setNumber(state => state+1)
    const onClickHandlerReset = () => setNumber(0)

    const finalClassName = (number === maxValue) ? s.error : s.normal

    const incButton = number === maxValue

    const resetButton = number === minValue


    return (
        <div className={'App'}>
            <Frame>
                <Display/>
            </Frame>
            <Frame>
                <Display>
                    <Value className={finalClassName}
                           number={number}/>
                </Display>
                <div className={s.buttonWrapper}>
                    <SuperButton className={s.inc}
                                 disabled={incButton}
                                 name={'inc'}
                                 callBack={onClickHandlerInc}/>
                    <SuperButton className={s.reset}
                                 disabled={resetButton}
                                 name={'reset'}
                                 callBack={onClickHandlerReset}/>
                </div>

            </Frame>
        </div>
    );
}

export default App;


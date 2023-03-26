import React, {useState} from 'react';
import SuperButton from './SuperButton';
import s from './Counter.module.css'
import {Display} from './Display';

export const Counter = () => {

    const maxValue = 5
    const minValue = 0

    const [number, setNumber] = useState<number>(minValue)

    const onClickHandlerInc = () => setNumber(state => state+1)
    const onClickHandlerReset = () => setNumber(0)

    const finalClassName = (number === maxValue) ? s.error : s.normal

    const incButton = number === maxValue

    const resetButton = number === minValue

    return (
        <div className={s.wrap}>
            <div className={s.display}>
                <Display className={finalClassName} number={number}/>
            </div>
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
        </div>
    );
};


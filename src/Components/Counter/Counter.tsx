import React from 'react';
import s from './Counter.module.css'
import SuperButton from '../SuperButton/SuperButton';

export type CounterPropsType = {
    finalClassName: string
    displayValue: number
    disableIncButton: boolean
    disableResetButton: boolean
    incCount: () => void
    resetCount: () => void
}
export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.wrap}>
            <div className={s.display}>
                <div className={props.finalClassName}>{props.displayValue}</div>
            </div>
            <div className={s.buttonWrapper}>
                <SuperButton name={'inc'}
                             callBack={props.incCount}
                             disabled={props.disableIncButton}/>
                <SuperButton name={'reset'}
                             callBack={props.resetCount}
                             disabled={props.disableResetButton}/>
            </div>
        </div>
    )
}
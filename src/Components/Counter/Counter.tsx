import React from 'react';
import s from './Counter.module.css'
import SuperButton from '../Button/SuperButton';

export type CounterPropsType = {
    finalClassName: string
    number: number
    disableIncButton: boolean
    disableResetButton: boolean
    incCount: () => void
    resetCount: () => void
}
export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.wrap}>
            <div className={s.display}>
                <div className={props.finalClassName}>{props.number}</div>
            </div>
            <div className={s.buttonWrapper}>
                <SuperButton name={'inc'} callBack={props.incCount} disabled={props.disableIncButton} className={s.inc}/>
                <SuperButton name={'reset'} callBack={props.resetCount} disabled={props.disableResetButton} className={s.reset}/>
            </div>
        </div>
    );
};

export default Counter;
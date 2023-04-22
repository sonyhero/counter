import React from 'react';
import s from './Counter.module.css';
import {Input} from '../../Input/Input';
import SuperButton from '../SuperButton/SuperButton';

type CounterSettingsType = {
    maxValue: number
    minValue: number
    setInputMaxValue: (maxValue: number) => void
    setInputMinValue: (minValue: number) => void
    setCounter:()=>void
}
export const CounterSettings = (props: CounterSettingsType) => {
    return (
        <div className={s.wrap}>
            <div className={s.display}>
                <Input
                    inputName={'max value'}
                    value={props.maxValue}
                    setValue={props.setInputMaxValue}/>
                <Input
                    inputName={'min value'}
                    value={props.minValue}
                    setValue={props.setInputMinValue}/>

            </div>
            <div className={s.buttonWrapper}>
                <SuperButton
                    name={'set'}
                    callBack={props.setCounter}
                    disabled={false}/>
            </div>
        </div>
    )
}
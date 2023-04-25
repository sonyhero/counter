import React, {useState} from 'react';
import s from './Counter.module.css';
import {Input} from '../../Input/Input';
import SuperButton from '../SuperButton/SuperButton';

type CounterSettingsType = {
    maxValue: number
    minValue: number
    setInputMaxValue: (maxValue: number) => void
    setInputMinValue: (minValue: number) => void
    setCounter: () => void
}
export const CounterSettings = (props: CounterSettingsType) => {

    const [status, setStatus] = useState<boolean>(true)

    return (
        <div className={s.wrap}>
            <div className={s.display}>
                <Input
                    inputName={'max value'}
                    value={props.maxValue}
                    setValue={props.setInputMaxValue}
                    setStatus={setStatus}
                />
                <Input
                    inputName={'min value'}
                    value={props.minValue}
                    setValue={props.setInputMinValue}
                    setStatus={setStatus}
                />

            </div>
            <div className={s.buttonWrapper}>
                <SuperButton
                    name={'set'}
                    callBack={props.setCounter}
                    setStatus={setStatus}
                    disabled={status}/>
            </div>
        </div>
    )
}
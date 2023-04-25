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
    errorMessage: boolean
    setCounterMessage: (counterMessage: string) => void
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
                    errorMessage={props.errorMessage}
                    setCounterMessage={props.setCounterMessage}
                />
                <Input
                    inputName={'min value'}
                    value={props.minValue}
                    setValue={props.setInputMinValue}
                    setStatus={setStatus}
                    errorMessage={props.errorMessage}
                    setCounterMessage={props.setCounterMessage}
                />

            </div>
            <div className={s.buttonWrapper}>
                <SuperButton
                    name={'set'}
                    callBack={props.setCounter}
                    setStatus={setStatus}
                    setCounterMessage={props.setCounterMessage}
                    disabled={status}
                />
            </div>
        </div>
    )
}
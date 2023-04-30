import React, { memo} from 'react';
import s from './Counter.module.css';
import {Input} from '../../Input/Input';
import SuperButton from '../SuperButton/SuperButton';
import {changeMaxValueAC, changeMinValueAC, controlSetAC, setValuesAC} from '../../redux-store/counterReducer';
import {useDispatch} from 'react-redux';

type CounterSettingsType = {
    minValue: number
    maxValue: number
    error: boolean
    controlOpen: boolean
}
export const CounterSettings: React.FC<CounterSettingsType> = memo((props) => {
    const {
        minValue,
        maxValue,
        error,
        controlOpen
    } = props

    const dispatch = useDispatch()

    const setValues = () => {
        localStorage.setItem('max', JSON.stringify(maxValue))
        localStorage.setItem('min', JSON.stringify(minValue))
        dispatch(setValuesAC(minValue))
        dispatch(controlSetAC(!controlOpen))
    }

    const changeMaxValue = (newValue: number) => {
        dispatch(changeMaxValueAC(newValue))
    }
    const changeMinValue = (newValue: number) => {
        dispatch(changeMinValueAC(newValue))
    }

    return (
        <div className={s.wrap}>
            <div className={s.display}>
                <Input
                    inputName={'max value'}
                    value={maxValue}
                    onChange={changeMaxValue}
                    error={error}
                />
                <Input
                    inputName={'min value'}
                    value={minValue}
                    onChange={changeMinValue}
                    error={error}
                />

            </div>
            <div className={s.buttonWrapper}>
                <SuperButton
                    name={'set'}
                    callBack={setValues}
                    disabled={error}
                />
            </div>
        </div>
    )
})
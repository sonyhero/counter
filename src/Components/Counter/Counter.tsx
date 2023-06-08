import React, {memo} from 'react';
import s from './Counter.module.css'
import SuperButton from '../SuperButton/SuperButton';
import {controlSetAC, incrementAC, resetAC} from '../../redux-store/counterReducer';
import {useAppDispatch} from '../../hooks/hooks';

export type CounterPropsType = {
    displayValue: number
    error: boolean
    stopInc: boolean
    // controlOpen: boolean
}

export const Counter: React.FC<CounterPropsType> = memo((props) => {

    const {
        displayValue,
        error,
        stopInc,
        // controlOpen
    } = props

    const dispatch = useAppDispatch()
    // let display = props.errorMessage ? 'Incorrect value!' : props.displayValue

    const increment = () => dispatch(incrementAC())
    const reset = () => dispatch(resetAC())
    const controlSet = () => dispatch(controlSetAC(true))

    const finalClassName = stopInc ? s.error : s.normal

    return (
        <div className={s.wrap}>
            <div className={s.display}>
                <div className={finalClassName}>
                    {displayValue}
                </div>
            </div>
            <div className={s.buttonWrapper}>
                <SuperButton name={'inc'}
                             callBack={increment}
                             disabled={error || stopInc}/>
                <SuperButton name={'reset'}
                             callBack={reset}
                             disabled={error}/>
                <SuperButton name={'set'}
                             callBack={controlSet}/>
            </div>
        </div>
    )
})
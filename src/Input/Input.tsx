import React, {ChangeEvent} from 'react';
import s from './Input.module.css';

type InputProps = {
    inputName: string
    value: number
    setValue: (newValue: number) => void
    setStatus: (status: boolean) => void
    errorMessage: boolean
    setCounterMessage: (setCounterMessage: string) => void
}
export const Input = (props: InputProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        props.setValue(Number(value))
        props.setStatus(false)
    }

    return (
        <div>
            <div className={s.settingsSpan}>
                {props.inputName}:
            </div>
            <input
                className={s.settingsInput}
                type={'number'}
                value={props.value}
                onChange={onChangeHandler}
            />
        </div>
    );
};
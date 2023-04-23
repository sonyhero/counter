import React, {ChangeEvent} from 'react';
import s from './Input.module.css';

type InputProps = {
    inputName: string
    value: number
    setValue: (newValue: number) => void
    error: string
    setError: (error: string) => void
}
export const Input = (props: InputProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
       if (Number(value) < 0 ) {
                props.setError('Wrong value')
            } else {
           props.setValue(Number(value))
           props.setError('')
       }

    }

    return (
        <div>
            <div className={s.settingsSpan}>
                {props.error
                    ? props.error
                    : props.inputName}:
            </div>
            <input
                className={s.settingsInput}
                type={'number'}
                value={props.value}
                onChange={onChangeHandler}
                // disabled={
                //     !!props.error
                // }
            />
        </div>
    );
};
import React, {ChangeEvent} from 'react';
import s from './Input.module.css';

type InputProps = {
    inputName: string
    value: number
    setValue: (newValue: number) => void
}
export const Input = (props: InputProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(+e.currentTarget.value)
    }

    return (
        <div>
            <div className={s.settingsSpan}>{props.inputName}: </div>
            <input className={s.settingsInput} type={'number'} value={props.value} onChange={onChangeHandler}/>
        </div>
    );
};
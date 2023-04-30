import React, {ChangeEvent} from 'react';
import s from './Input.module.css';

type InputProps = {
    inputName: string
    value: number
    onChange: (newValue: number) => void
    error: boolean
}
export const Input: React.FC<InputProps> = (props) => {
    const {inputName,
        value,
        onChange,
        error,
    } = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        onChange(Number(newValue))
    }

    const finalClass = error ? s.settingsInputError : s.settingsInput

    return (
        <div>
            <div className={s.settingsSpan}>
                {inputName}:
            </div>
            <input
                className={finalClass}
                type={'number'}
                value={value}
                onChange={onChangeHandler}
            />
        </div>
    );
};
import React from 'react';
import s from './SuperButton.module.css';

type PropsType = {
    name: string
    callBack?: () => void
    disabled: boolean
    setStatus?: (status: boolean) => void
}

const SuperButton: React.FC<PropsType> = (props) => {
    const {
        name,
        callBack,
        disabled,
        setStatus
    } = props

    const onClickHandler = () => {
        setStatus?.(true)
        callBack?.()
    }

    return (
        <button className={s.button} disabled={disabled} onClick={onClickHandler}>{name}</button>
    );
};

export default SuperButton;
import React from 'react';
import s from './SuperButton.module.css';

type PropsType = {
    name: string
    callBack?: () => void
    disabled: boolean
}

const SuperButton: React.FC <PropsType> = (props) => {
    const {
        name,
        callBack,
        disabled,
    } = props

    // const onClickHandler = () => {
    //     callBack()
    // }

    return (
        <button className={s.button} disabled={disabled} onClick={callBack}>{name}</button>
    );
};

export default SuperButton;
import React from 'react';

type PropsType = {
    name: string
    callBack: () => void
    disabled: boolean
    className: string
}

const SuperButton: React.FC <PropsType> = (props) => {
    const {
        name,
        callBack,
        disabled,
        className
    } = props

    // const onClickHandler = () => {
    //     callBack()
    // }

    return (
        <button className={className} disabled={disabled} onClick={callBack}>{name}</button>
    );
};

export default SuperButton;
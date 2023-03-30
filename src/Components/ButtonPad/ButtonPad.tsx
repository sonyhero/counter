import React from 'react';
import s from '../Counter.module.css';

export type ButtonPadProps = {
    children?: React.ReactNode
}
export const ButtonPad = (props: ButtonPadProps) => {
    return (
        <div className={s.buttonWrapper}>
            {props.children}
        </div>
    );
};
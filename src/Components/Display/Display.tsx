import React from 'react';
import s from './Display.module.css';

type DisplayPropsType = {
    children?: React.ReactNode
}
export const Display = (props: DisplayPropsType) => {
    return (
        <div className={s.display}>
            {props.children}
        </div>
    )
}
import React from 'react';
import s from './Frame.module.css'

type FramePropsType = {
    children?: React.ReactNode
}
export const Frame = (props: FramePropsType) => {
    return (
        <div className={s.wrap}>
            {props.children}
        </div>
    )
}
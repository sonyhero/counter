import React from 'react';

type DisplayType = {
    className: string
    number: number
}

export const Display: React.FC<DisplayType> = (props) => {
    const {
        className,
        number
    } = props

    return (
            <div className={className}>
                {number}
            </div>
    )
}
import React, {useState} from 'react';
import SuperButton from './SuperButton';
import s from './Counter.module.css'

export const Counter = () => {

    const maxValue = 5
    const minValue = 0

    const [n, setN] = useState<number>(minValue)

    const onClickHandlerInc = () => setN(state => state+1)
    const onClickHandlerReset = () => setN(0)

    const nClassName = (n === maxValue) ? s.error : s.normal

    const incButton = n === maxValue

    const resetButton = n === minValue

    return (
        <div className={s.wrap}>
            <div className={s.display}>
                <div className={nClassName}>{n}</div>
            </div>
            <div className={s.buttonWrapper}>
                    <SuperButton className={s.inc}
                                 disabled={incButton}
                                 name={'inc'}
                                 callBack={onClickHandlerInc}/>
                    <SuperButton className={s.reset}
                                 disabled={resetButton}
                                 name={'reset'}
                                 callBack={onClickHandlerReset}/>
            </div>
        </div>
    );
};


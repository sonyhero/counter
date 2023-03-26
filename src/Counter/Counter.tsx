import React, {useState} from 'react';
import SuperButton from './SuperButton';
import s from './Counter.module.css'

export const Counter = () => {

    const [n, setN] = useState<number>(0)

    const onClickHandlerInc = () => setN(state => state+1)
    const onClickHandlerReset = () => setN(0)

    const nClassName = (n === 5) ? s.error : s.normal

    const incButton = n === 5

    const resetButton = n === 0

    return (
        <div className={s.wrap}>
            <div className={s.display}>
                <div className={nClassName}>{n}</div>
            </div>
            <div className={s.buttonWrapper}>
                    <SuperButton className={s.inc} disabled={incButton} name={'inc'} callBack={onClickHandlerInc}/>
                    <SuperButton className={s.reset} disabled={resetButton} name={'reset'} callBack={onClickHandlerReset}/>
            </div>
        </div>
    );
};


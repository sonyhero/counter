import {RootStateType} from '../redux-store/store';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state')
        return (serializedState) ? JSON.parse(serializedState) : undefined
    } catch (e) {
        return undefined
    }
}

export const saveState = (state: RootStateType) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e)
    }
}

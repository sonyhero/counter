const initialState = {
    maxValue: 0,
    minValue: 0,
    displayValue: 0,
    controlOpen: true
}

type InitialStateType = {
    maxValue: number
    minValue: number
    displayValue: number
    controlOpen: boolean
}
export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'START_LOCAL_STORAGE':
            return {
                ...state,
                maxValue: action.payload.maxValue,
                minValue: action.payload.minValue,
                displayValue: action.payload.minValue
            }
        case 'SET_VALUES':
            return {...state, displayValue: action.payload.minValue}
        case 'CHANGE_MAX_VALUE':
            return {...state, maxValue: action.payload.newValue}
        case 'CHANGE_MIN_VALUE':
            return {...state, minValue: action.payload.newValue}
        case 'INCREMENT':
            return {...state, displayValue: state.displayValue + 1}
        case 'RESET':
            return {...state, displayValue: state.minValue}
        case 'CONTROL_SET':
            return {...state, controlOpen: action.payload.controlOpen}
        default:
            return state
    }
}

type ActionsType =
    StartLocalStorageACType |
    SetValuesACType |
    ChangeMaxValueAC |
    ChangeMinValueAC |
    IncrementACType |
    ResetACType |
    ControlSetACType


type StartLocalStorageACType = ReturnType<typeof startLocalStorageAC>
export const startLocalStorageAC = (minValue: number, maxValue: number) => {
    return {
        type: 'START_LOCAL_STORAGE',
        payload: {
            minValue,
            maxValue
        }
    } as const
}

type SetValuesACType = ReturnType<typeof setValuesAC>
export const setValuesAC = (minValue: number) => {
    return {
        type: 'SET_VALUES',
        payload: {
            minValue
        }
    } as const
}

type ChangeMaxValueAC = ReturnType<typeof changeMaxValueAC>
export const changeMaxValueAC = (newValue: number) => {
    return {
        type: 'CHANGE_MAX_VALUE',
        payload: {
            newValue
        }
    } as const
}

type ChangeMinValueAC = ReturnType<typeof changeMinValueAC>
export const changeMinValueAC = (newValue: number) => {
    return {
        type: 'CHANGE_MIN_VALUE',
        payload: {
            newValue
        }
    } as const
}

type IncrementACType = ReturnType<typeof incrementAC>
export const incrementAC = () => {
    return {
        type: 'INCREMENT',
    } as const
}

type ResetACType = ReturnType<typeof resetAC>
export const resetAC = () => {
    return {
        type: 'RESET',
    } as const
}

type ControlSetACType = ReturnType<typeof controlSetAC>
export const controlSetAC = (controlOpen: boolean) => {
    return{
        type: 'CONTROL_SET',
        payload: {
            controlOpen
        }
    } as const
}
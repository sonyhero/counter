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

export type ActionsType =
    ReturnType<typeof startLocalStorageAC> |
    ReturnType<typeof setValuesAC> |
    ReturnType<typeof changeMaxValueAC> |
    ReturnType<typeof changeMinValueAC> |
    ReturnType<typeof incrementAC> |
    ReturnType<typeof resetAC> |
    ReturnType<typeof controlSetAC>

export const startLocalStorageAC = (minValue: number, maxValue: number) => {
    return {
        type: 'START_LOCAL_STORAGE',
        payload: {
            minValue,
            maxValue
        }
    } as const
}

export const setValuesAC = (minValue: number) => {
    return {
        type: 'SET_VALUES',
        payload: {
            minValue
        }
    } as const
}

export const changeMaxValueAC = (newValue: number) => {
    return {
        type: 'CHANGE_MAX_VALUE',
        payload: {
            newValue
        }
    } as const
}

export const changeMinValueAC = (newValue: number) => {
    return {
        type: 'CHANGE_MIN_VALUE',
        payload: {
            newValue
        }
    } as const
}

export const incrementAC = () => {
    return {
        type: 'INCREMENT',
    } as const
}

export const resetAC = () => {
    return {
        type: 'RESET',
    } as const
}

export const controlSetAC = (controlOpen: boolean) => {
    return {
        type: 'CONTROL_SET',
        payload: {
            controlOpen
        }
    } as const
}

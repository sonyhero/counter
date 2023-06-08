import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import {ActionsType, counterReducer} from './counterReducer';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {loadState, saveState} from '../utils/localStorage';

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
            counter: store.getState().counter
        })
})


export type RootStateType = ReturnType<typeof store.getState>
export type RootReducerType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<RootStateType, unknown, ActionsType> // для санок
export type AppThunk = ThunkAction<void, RootStateType, unknown, ActionsType>
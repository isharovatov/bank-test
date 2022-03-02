import {TODO_TYPE} from './contains';
import {createReducer} from '@reduxjs/toolkit'
import {actionInterfece, initialStateInterfece} from '../../../types/ContainerTypes'

const initialState: any = {
    list: [],
    status: 'loading',
    error: {},
    token: {refresh: '', access: ''},
    accountParametrs: {keys: [], values: []},
    cards: [],
    operations: [],
};
    
const todosReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(TODO_TYPE.AUTH.START, (state, action: actionInterfece) => {
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.AUTH.SUCCESS, (state, action: any) => {
        window.location.pathname = '/'
        return {...state, status: 'success'}
    })
    .addCase(TODO_TYPE.AUTH.ERROR, (state, action: actionInterfece) => {    
        return {...state, status: 'error', error: action.payload}
    })

    .addCase(TODO_TYPE.GET_TOKEN.START, (state, action: actionInterfece) => {
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.GET_TOKEN.SUCCESS, (state, action: any) => {
        localStorage.setItem('name', action.meta.arg.username);
        localStorage.setItem('access_token', action.payload.access);
        window.location.pathname = '/home'
        return {...state, status: 'success'}
    })
    .addCase(TODO_TYPE.GET_TOKEN.ERROR, (state, action: actionInterfece) => {    
        return {...state, status: 'error', error: action.payload}
    })

    .addCase(TODO_TYPE.GET_ID.START, (state, action: actionInterfece) => {
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.GET_ID.SUCCESS, (state, action: any) => {  
        localStorage.setItem('id', action.payload.id);  
        return {...state,token: action.payload, status: 'success'}
    })
    .addCase(TODO_TYPE.GET_ID.ERROR, (state, action: actionInterfece) => {    
        return {...state, status: 'error', error: action.payload}
    })

    .addCase(TODO_TYPE.GET_UUID.START, (state, action: actionInterfece) => {
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.GET_UUID.SUCCESS, (state, action: actionInterfece) => {
        localStorage.setItem('uuid', action.payload.id);
        return {...state, token: action.payload, status: 'success'}
    })
    .addCase(TODO_TYPE.GET_UUID.ERROR, (state, action: actionInterfece) => {    
        return {...state, status: 'error', error: action.payload}
    })

    .addCase(TODO_TYPE.GET_ME.START, (state, action: actionInterfece) => {
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.GET_ME.SUCCESS, (state, action: actionInterfece) => {
        const keys = []
        const values = []
        for (let key in action.payload) {
            keys.push(key)
            values.push(action.payload[`${key}`])
        }
        return {...state, accountParametrs: {keys, values}, status: 'success'}
    })
    .addCase(TODO_TYPE.GET_ME.ERROR, (state, action: actionInterfece) => {    
        return {...state, status: 'error', error: action.payload}
    })

    .addCase(TODO_TYPE.GET_CARDS.START, (state, action: actionInterfece) => {
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.GET_CARDS.SUCCESS, (state, action: actionInterfece) => {
        return {...state, cards: action.payload, status: 'success'}
    })
    .addCase(TODO_TYPE.GET_CARDS.ERROR, (state, action: actionInterfece) => {    
        return {...state, status: 'error', error: action.payload}
    })
    
    .addCase(TODO_TYPE.CREATE_CARD.START, (state, action: actionInterfece) => {
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.CREATE_CARD.SUCCESS, (state, action: actionInterfece) => {
        return {...state, status: 'success'}
    })
    .addCase(TODO_TYPE.CREATE_CARD.ERROR, (state, action: actionInterfece) => {    
        return {...state, status: 'error', error: action.payload}
    })

    .addCase(TODO_TYPE.GET_OPERATIONS.START, (state, action: actionInterfece) => {
        return {...state, status: 'loading'}
    })
    .addCase(TODO_TYPE.GET_OPERATIONS.SUCCESS, (state, action: actionInterfece) => {
        return {...state, operations: action.payload, status: 'success'}
    })
    .addCase(TODO_TYPE.GET_OPERATIONS.ERROR, (state, action: actionInterfece) => {    
        return {...state, status: 'error', error: action.payload}
    })

    
})

export default todosReducer;
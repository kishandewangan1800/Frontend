import React, { useReducer, createContext } from 'react';
import constextReducer from './constextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [] ;

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const[transactions, dispatch] = useReducer(constextReducer, initialState)

    const deleteTransaction = (id) => { dispatch({type:'DELETE_TRANSACTIONS', payload:id}); }

    const addTransaction =(transactions)=>{ dispatch({type:'ADD_TRANSACTIONS', payload:transactions}); }

    const balance = transactions.reduce((acc, val)=> val.type === 'Expense' ? acc - val.amount : acc + val.amount, 0)

    return (
        <ExpenseTrackerContext.Provider value={{ deleteTransaction, addTransaction, transactions, balance }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}


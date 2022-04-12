import React, { useReucer, createContext } from 'react';

const intialState = [];

export const ExpenseTrackerContext = createContext(intialState);

export const Provider = ({ children }) => {
    return (
        <ExpenseTrackerContext.Provider value={{ appName:"Expense Tracker" }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}


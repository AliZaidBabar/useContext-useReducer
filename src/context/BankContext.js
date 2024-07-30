import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = { balance: 0 };

// Create context
export const BankContext = createContext(initialState);

// Reducer function
const bankReducer = (state, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return { ...state, balance: state.balance + action.amount };
    case 'WITHDRAW':
      return { ...state, balance: state.balance - action.amount };
    default:
      return state;
  }
};

// Provider component
export const BankProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bankReducer, initialState);

  return (
    <BankContext.Provider value={{ state, dispatch }}>
      {children}
    </BankContext.Provider>
  );
};

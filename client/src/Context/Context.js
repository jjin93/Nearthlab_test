import React, { useEffect, useReducer, useState } from "react";

export const Context = React.createContext();

const initialState = {
    currentLabel : [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LABEL':
            return {
                ...state,
                currentLabel: action.payload,
            };
        default:
            throw new Error();
    }
};

const ContextProvider = ({ children }) => {
    //useReducer를 사용해서 state와 dispatch를 생성한다.
    const [state, dispatch] = useReducer(reducer, initialState);

    const [Labels, setLabels] = useState(new Set());

    useEffect(() => {
        
    })


}
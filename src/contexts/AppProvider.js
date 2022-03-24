import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext({

});

AppContext.displayName = "AppContext"


export function AppProvider({ children }) {

    const value = {

    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => useContext(AppContext)
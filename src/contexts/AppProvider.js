import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext({
    isShowMenuMobile: false,
    setShowMenuMobile: () => { },
});

AppContext.displayName = "AppContext"


export function AppProvider({ children }) {
    const [isShowMenuMobile, setShowMenuMobile] = useState(false);
    const value = {
        isShowMenuMobile,
        setShowMenuMobile
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => useContext(AppContext)
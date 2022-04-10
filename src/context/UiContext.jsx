import React, { useContext, useState} from 'react'

const UiContextData = React.createContext()

export const UiContext = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
  return (
    <UiContextData.Provider value={{toggleSidebar, isSidebarOpen}}>
        {children}
    </UiContextData.Provider>
  )
}

export const useUiContext = () => {
    return useContext(UiContextData)
}
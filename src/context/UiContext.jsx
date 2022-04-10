import React, { useContext, useState } from "react";

const UiContextData = React.createContext();

export const UiContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  const toggleShowWishlist = () => {
    setShowWishlist(!showWishlist);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <UiContextData.Provider
      value={{ toggleSidebar, isSidebarOpen, toggleShowWishlist, showWishlist }}
    >
      {children}
    </UiContextData.Provider>
  );
};

export const useUiContext = () => {
  return useContext(UiContextData);
};

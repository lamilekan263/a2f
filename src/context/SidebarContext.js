import React, { useState } from 'react'

// create context
export const SidebarContext = React.createContext()

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen)
  }

  function closeSidebar() {
    setIsSidebarOpen(false)
  }

  // const value = useMemo(
  //   () => ({
  //     isSidebarOpen,
  //     toggleSidebar,
  //     closeSidebar,
  //   }),
  //   [isSidebarOpen,toggleSidebar]
  // )

  const value = {
    isSidebarOpen,
      toggleSidebar,
      closeSidebar,
  }

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}

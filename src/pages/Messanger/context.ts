import React from 'react'

interface MessangerContextProps {
  typeChat: string,
  setTypeChat: (str: string) => void
}

const defaultProps = {
  typeChat: '',
  setTypeChat: (str:string) => str
}

export const MessangerContext = React.createContext<MessangerContextProps>(defaultProps)
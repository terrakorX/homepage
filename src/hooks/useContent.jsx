import { parse } from 'yaml'
import { createContext, useContext } from 'react'
import file from '/public/content.yml?raw'
const data = parse(file)

const ContentContext = createContext(data)

console.log(ContentContext)
export function ContentProvider({ children }) {
  return (
    <ContentContext.Provider value={data}>
      {children}
    </ContentContext.Provider>
  )
}

export default function useContent() {
  return useContext(ContentContext)
}

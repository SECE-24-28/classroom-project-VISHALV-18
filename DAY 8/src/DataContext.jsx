import {createContext,useState} from 'react'
export const DataContext = createContext()
export const DataProvider = ({children}) => {
    const [num,setNum] = useState(0)
    const inc=()=>{
        setNum(num+1)
    }    
    const dec=()=>{
        setNum(num-1)
    }   
  
  return (
    <DataContext.Provider value={{num,setNum,inc,dec}}>
     {children}
    </DataContext.Provider>
  )
}

export default DataProvider
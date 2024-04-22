import { useState, createContext } from 'react'
import ImageHolder from './components/ImageHolder'
import './index.css'
import './App.css'
import EmailForm from './components/EmailForm'
import Success from './components/Success'

export const EmailContext = createContext();

function App() {
  
  const [isEmailValid, setIsEmailValid] = useState();
  const [globalEmail, setGlobalEmail] = useState('');

  console.log(globalEmail);
  const mainPage = isEmailValid? (<Success/>) : (
    <>
      <ImageHolder/>
      <EmailForm/>
    </>
  );
  return (
    <EmailContext.Provider value={{isEmailValid, setIsEmailValid, globalEmail, setGlobalEmail}}>
      {mainPage}
    </EmailContext.Provider>
  )
}

export default App;

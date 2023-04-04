import React, {createContext, useState} from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={ {backgroundColor: theme} }>
      <p>Counter</p>
      <Counter initCnt = {0} />
      <p>Counter Hooks</p>
      <CounterHooks initCnt = {0} /> 
      <br/> 
      <button onClick = {() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red'
      })}>Change Theme</button>
    </ThemeContext.Provider>
  );
}

export default App;

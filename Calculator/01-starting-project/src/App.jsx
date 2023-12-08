import { useState } from "react";
import Header from "./assets/components/Header.jsx";
import Results from "./assets/components/Results.jsx";
import UserInput from "./assets/components/UserInput.jsx";

function App() {
  const [UserInput, setUserInput] =useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,

});
const inputIsValid = UserInput.duration >=1;

function handleChange (inputIdentifier, newValue) {
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]: +newValue
      };
  });
}

  return (
    <>
   <Header/>
   <UserInput UserInput={UserInput} onChange={handleChange}/>
   {!inputIsValid &&(
    <p className="center">Please enter a duration greater than zero.</p>
   ) }
   {inputIsValid && <Results input={UserInput}/>}

</>
  );
}

export default App

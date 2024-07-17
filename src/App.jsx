import React, { useState } from 'react'
import Calculator from './components/Calculator'
import ShowCard from './components/ShowCard'

function App() {
  // Estados para Calculator
  const [mortgageAmount, setMortgageAmount] = useState('')
  const [mortgageTermValue, setMortgageTermValue] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [mortgageType, setMortgageType] = useState('')

  // Estado para ShowCard
  const [isActive, setIsActive] = useState(false)

  return (
    <main className='flex justify-center items-center md:h-screen bg-gray-100'>
      <h1 className='text-3xl text-red-500'>Hello</h1>
      <div className='flex flex-col md:flex-row shadow-xl bg-white rounded-xl md:w-4/6'>
        <Calculator
          mortgageAmount={mortgageAmount}
          setMortgageAmount={setMortgageAmount}
          mortgageTermValue={mortgageTermValue}
          setMortgageTermValue={setMortgageTermValue}
          interestRate={interestRate}
          setInterestRate={setInterestRate}
          mortgageType={mortgageType}
          setMortgageType={setMortgageType}
          setIsActive={setIsActive}
        />
        <ShowCard
          isActive={isActive}
          mortgageAmount={mortgageAmount}
          mortgageTermValue={mortgageTermValue}
          interestRate={interestRate}
          mortgageType={mortgageType}
        />
      </div>
    </main>
  )
}

export default App

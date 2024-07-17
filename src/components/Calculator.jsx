import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Calculator = ({
  mortgageAmount,
  setMortgageAmount,
  mortgageTermValue,
  setMortgageTermValue,
  interestRate,
  setInterestRate,
  mortgageType,
  setMortgageType,
  setIsActive
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const onSubmit = (data) => {
    setMortgageAmount(data.mortgageAmount)
    setMortgageTermValue(data.mortgageTermValue)
    setInterestRate(data.interestRate)
    setMortgageType(data.mortgageType)
    setIsActive(true)
    setFormSubmitted(true)
  }

  const handleClear = () => {
    reset({
      mortgageAmount: '',
      mortgageTermValue: '',
      interestRate: '',
      mortgageType: ''
    })
    setMortgageAmount('')
    setMortgageTermValue('')
    setInterestRate('')
    setMortgageType('')
    setIsActive(false)
    setFormSubmitted(false)
  }

  return (
    <section className='p-8 md:w-11/12'>
      <div className='md:flex md:justify-between  mb-8'>
        <h1 className='text-bg_main font-bold text-lg'>Mortgage Calculator</h1>
        <button
          type='button'
          className='border-b-2 text-gray-500 text-xs'
          onClick={handleClear}
        >
          Clear All
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label className='block mb-4 text-sm text-gray-500' htmlFor='amount'>
            Mortgage Amount
          </label>
          <div className='relative'>
            <input
              type='number'
              name='mortgageAmount'
              id='amount'
              defaultValue={mortgageAmount}
              {...register('mortgageAmount', { required: true })}
              className={`border rounded-md p-2 stylepad ${
                errors.mortgageAmount ? 'border-red-500' : 'border-gray-400'
              }`}
              disabled={formSubmitted}
            />
            <span
              className={`absolute left-[1px] rounded-md h-8 flex items-center top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-sm px-3 ${
                errors.mortgageAmount ? 'bg-red-500 text-white' : 'bg-blue-100'
              }`}
            >
              £
            </span>
            {errors.mortgageAmount && (
              <span className='text-red-500 text-xs absolute left-0 bottom-[-20px] '>
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className='md:flex md:gap-4 justify-between'>
          <div className='relative '>
            <label
              className='block mb-2 mt-6 text-sm text-gray-500'
              htmlFor='term'
            >
              Mortgage Term
            </label>
            <div className='relative'>
              <input
                type='number'
                name='mortgageTermValue'
                id='term'
                defaultValue={mortgageTermValue}
                {...register('mortgageTermValue', { required: true })}
                className={`border rounded-md p-2 ${
                  errors.mortgageTermValue
                    ? 'border-red-500'
                    : 'border-gray-500'
                }`}
                disabled={formSubmitted}
              />
              <span
                className={`absolute right-[1px] flex items-center top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-sm h-8 rounded-md px-2 ${
                  errors.mortgageTermValue
                    ? 'bg-red-500 text-white'
                    : 'bg-blue-100'
                }`}
              >
                years
              </span>
              {errors.mortgageTermValue && (
                <span className='text-red-500 text-xs absolute left-0 bottom-[-20px]'>
                  This field is required
                </span>
              )}
            </div>
          </div>

          <div className='relative'>
            <label
              className='block mb-2 mt-6 text-sm  text-gray-500'
              htmlFor='interestRate'
            >
              Interest Rate
            </label>
            <div className='relative'>
              <input
                type='number'
                name='interestRate'
                id='interestRate'
                defaultValue={interestRate}
                {...register('interestRate', { required: true })}
                className={`border rounded-md p-2 ${
                  errors.interestRate ? 'border-red-500' : 'border-gray-400'
                }`}
                disabled={formSubmitted}
              />
              <span
                className={`absolute right-[1px] top-1/2 -translate-y-1/2 text-gray-500 h-8 rounded-md font-bold text-sm p-2 ${
                  errors.interestRate ? 'bg-red-500 text-white' : 'bg-blue-100'
                }`}
              >
                %
              </span>
              {errors.interestRate && (
                <span className='text-red-500 text-xs absolute left-0 bottom-[-20px]'>
                  This field is required
                </span>
              )}
            </div>
          </div>
        </div>

        <div className='mt-8 mb-6'>
          <p className='mb-2 text-gray-500 text-sm'>Mortgage Type</p>
          <div
            className={`w-full border p-2 rounded-md mb-2 flex items-center align-middle gap-2 ${
              errors.mortgageType ? 'border-red-500' : 'border-gray-400'
            }`}
          >
            <input
              type='radio'
              name='mortgageType'
              id='fixedRate'
              value='fixedRate'
              {...register('mortgageType', { required: true })}
              checked={mortgageType === 'fixedRate'}
              onChange={(e) => setMortgageType(e.target.value)}
              disabled={formSubmitted}
            />
            <label
              htmlFor='fixedRate'
              className='text-xs font-bold text-bg_main'
            >
              Repayment
            </label>
          </div>
          {errors.mortgageType && (
            <span className='text-red-500 text-xs'>This field is required</span>
          )}

          <div
            className={`w-full border p-2 rounded-md flex items-center align-middle gap-2 ${
              errors.mortgageType ? 'border-red-500' : 'border-gray-400'
            }`}
          >
            <input
              type='radio'
              name='mortgageType'
              id='adjustableRate'
              value='adjustableRate'
              {...register('mortgageType', { required: true })}
              checked={mortgageType === 'adjustableRate'}
              onChange={(e) => setMortgageType(e.target.value)}
              disabled={formSubmitted}
            />
            <label
              htmlFor='adjustableRate'
              className='text-xs font-bold text-bg_main'
            >
              Interest Only
            </label>
          </div>
        </div>
        <button
          type='submit'
          className='flex items-center w-full md:w-auto bg-accent rounded-3xl py-3 px-6 text-xs font-bold text-bg_main gap-1'
          disabled={formSubmitted}
        >
          <img src='/icon-calculator.svg' alt='calculator' className='w-4' />
          Calculate Repayments
        </button>
      </form>
    </section>
  )
}

export default Calculator

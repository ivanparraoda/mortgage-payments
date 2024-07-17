import React from 'react'

const ShowCard = ({
  mortgageAmount, // Monto del préstamo hipotecario
  mortgageTermValue, // Término del préstamo en años
  interestRate, // Tasa de interés anual
  mortgageType, // Tipo de hipoteca (Repayment o Interest Only)
  isActive // Booleano indicando si se deben mostrar los resultados
}) => {
  // Función para calcular los pagos mensuales
  const calculateMonthlyRepayment = (amount, term, rate, type) => {
    const monthlyRate = rate / 100 / 12 // Tasa de interés mensual
    if (type === 'Interest Only') {
      // Pagos solo de interés
      return (amount * monthlyRate).toFixed(2)
    } else {
      // Pagos de amortización estándar
      const numberOfPayments = term * 12 // Número total de pagos mensuales
      return (
        (amount * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
      ).toFixed(2) // Redondea a dos decimales
    }
  }

  // Función para calcular el total a pagar durante el término
  const calculateTotalRepayment = (monthlyRepayment, term, type, amount) => {
    if (type === 'Interest Only') {
      // Total para "Interest Only" es solo los intereses pagados durante el término
      return (monthlyRepayment * term * 12).toFixed(2)
    } else {
      // Total para "Repayment" es el pago mensual multiplicado por el número total de pagos
      return (monthlyRepayment * term * 12).toFixed(2) // Redondea a dos decimales
    }
  }

  // Función para formatear las cantidades en formato de moneda
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP'
    }).format(value)
  }

  // Calcular el pago mensual usando los valores proporcionados
  const monthlyRepayment = calculateMonthlyRepayment(
    mortgageAmount,
    mortgageTermValue,
    interestRate,
    mortgageType
  )

  // Calcular el total a pagar durante el término usando el pago mensual
  const totalRepayment = calculateTotalRepayment(
    monthlyRepayment,
    mortgageTermValue,
    mortgageType,
    mortgageAmount
  )

  return (
    <section className='bg-bg_main md:w-4/5 p-8 md:rounded-tr-xl md:rounded-br-xl md:rounded-tl-none md:rounded-bl-[10%]'>
      {isActive ? (
        <>
          <h2 className='text-white text-xl font-semibold mb-4'>
            Your results
          </h2>
          <p className='text-gray-400 mb-8 text-sm'>
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "Calculate
            Repayments" again.
          </p>

          <div className='bg-bg_second border-t-4 rounded-md border-t-accent p-6'>
            <div className='mb-6'>
              <p className='text-gray-400 text-sm'>Your monthly repayments</p>
              <span className='text-accent text-5xl font-semibold'>
                {formatCurrency(monthlyRepayment)}
              </span>
            </div>
            <div className='border-t pt-6'>
              <p className='text-gray-400 text-xs'>
                Total you'll repay over the term
              </p>
              <span className='text-white text-xl font-semibold'>
                {formatCurrency(totalRepayment)}
              </span>
            </div>
          </div>
        </>
      ) : (
        <div className='min-h-80 flex justify-center items-center text-center'>
          <div>
            <img
              src='/images/illustration-empty.svg'
              alt='empty img'
              className='mx-auto w-40 mb-4'
            />
            <h3 className='text-white text-lg font-bold mb-2'>
              Results shown here
            </h3>
            <p className='text-gray-400 text-xs'>
              Complete the form and click "Calculate Repayments" to see what
              your monthly repayments would be
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default ShowCard

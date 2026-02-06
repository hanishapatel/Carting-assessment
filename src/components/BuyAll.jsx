import React from 'react'

const BuyAll = ({ isOpen, onClose, onConfirm, totalPrice, itemCount, loading }) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 overflow-y-auto'>
      {/* Backdrop */}
      <div 
        className='fixed inset-0 bg-black bg-opacity-50 transition-opacity'
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className='flex min-h-full items-center justify-center p-4'>
        <div className='relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all'>
          {/* Close Button */}
          <button
            onClick={onClose}
            className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors'
            disabled={loading}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>

          {/* Icon */}
          <div className='w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
            <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' />
            </svg>
          </div>

          {/* Title */}
          <h2 className='text-2xl font-bold text-center text-gray-900 mb-2'>
            Confirm Purchase
          </h2>

          {/* Description */}
          <p className='text-center text-gray-600 mb-6'>
            Are you sure you want to purchase all items in your cart?
          </p>

          {/* Order Summary */}
          <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6 border-2 border-blue-200'>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-gray-700 font-medium'>Total Items:</span>
              <span className='text-xl font-bold text-gray-900'>{itemCount}</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-gray-700 font-medium'>Total Amount:</span>
              <span className='text-2xl font-bold text-blue-600'>
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='flex gap-3'>
            <button
              onClick={onClose}
              disabled={loading}
              className='flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              No, Cancel
            </button>
            <button
              onClick={onConfirm}
              disabled={loading}
              className='flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg'
            >
              {loading ? (
                <div className='flex items-center justify-center'>
                  <svg className='animate-spin h-5 w-5 text-white' fill='none' viewBox='0 0 24 24'>
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                  </svg>
                </div>
              ) : (
                'Yes, Buy All'
              )}
            </button>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default BuyAll
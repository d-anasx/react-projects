import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity } from '../redux/cartSlice'

export default function NavBar() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const totalItems = cartItems.length
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <nav className="bg-amber-800 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-mono">Delisioso</h1>
        <div className="relative">
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="flex items-center space-x-1 bg-amber-700 px-4 py-2 rounded hover:bg-amber-600 transition duration-300"
          >
            <span>Cart</span>
            <span className="bg-amber-500 text-amber-900 px-2 py-1 rounded-full text-xs">
              {totalItems}
            </span>
          </button>
          {isCartOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl text-gray-800">
              {cartItems.length === 0 ? (
                <p className="p-4">Your cart is empty.</p>
              ) : (
                <div>
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-4 border-b">
                      <div>
                        <p className="font-mono">{item.name}</p>
                        <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          className="bg-amber-500 text-white w-6 h-6 rounded-full"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          className="bg-amber-500 text-white w-6 h-6 rounded-full"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="p-4 font-mono bg-amber-500 rounded-b">
                    Total: ${totalPrice.toFixed(2)}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
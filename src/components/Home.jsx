import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

const meals = [
    { id: 1, name: 'Margherita Pizza', price: 12.99, image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { id: 2, name: 'Chicken Alfredo', price: 15.99, image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { id: 3, name: 'Caesar Salad', price: 8.99, image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { id: 4, name: 'Beef Burger', price: 10.99, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { id: 5, name: 'Tiramisu', price: 6.99, image: 'https://www.sohealthy.fr/wp-content/uploads/2021/01/mon-tiramisu.jpg' },
    { id: 6, name: 'Spaghetti Bolognese', price: 13.99, image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    { id: 7, name: 'Greek Salad', price: 9.49, image: 'https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.889xw:1.00xh;0.0625xw,0&resize=1200:*' },
    { id: 8, name: 'Pepperoni Pizza', price: 14.49, image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    { id: 9, name: 'Grilled Salmon', price: 18.99, image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    { id: 10, name: 'Fettuccine Carbonara', price: 14.99, image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    { id: 11, name: 'Cheeseburger', price: 11.49, image: 'https://images.pexels.com/photos/1639560/pexels-photo-1639560.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    { id: 12, name: 'Vegetarian Tacos', price: 9.99, image: 'https://images.pexels.com/photos/1435900/pexels-photo-1435900.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    { id: 13, name: 'Lobster Bisque', price: 17.99, image: 'https://www.staysnatched.com/wp-content/uploads/2019/08/creamy-lobster-bisque-recipe-16-1-735x569.jpg.webp' },
    { id: 14, name: 'Pad Thai', price: 11.99, image: 'https://pucheromix.b-cdn.net/wp-content/uploads/2023/09/pad-thai-receta.jpg' },
    { id: 15, name: 'Chocolate Lava Cake', price: 7.49, image: 'https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg?auto=compress&cs=tinysrgb&w=1200' }
  ];
  
  

export default function Home() {
  const dispatch = useDispatch()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-mono mb-8 text-center text-amber-800">Delizioso Restaurant</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {meals.map((meal) => (
          <div key={meal.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={meal.image} alt={meal.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-mono text-amber-900 ">{meal.name}</h2>
              <p className="text-gray-600 mt-2 font-mono">${meal.price.toFixed(2)}</p>
              <button
                onClick={() => dispatch(addToCart(meal))}
                className="mt-4 bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition duration-300 font-mono"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
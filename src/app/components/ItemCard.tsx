"use client";
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import ProductCard from "./Productcard";
import { Product } from "@/types/types";


const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  // const router = useRouter();

  // Fetch products and retrieve saved cart on mount
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  // Proceed to checkout
  const goToCheckout = () => {
    setIsCheckout(true);
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-6">
      {/* Background Section */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage: "url('/images/background.png')", 
                }}
      ></div>

      {/* Content Section */}
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Most Requested Items</h1>
          <p className="text-xl text-white">A touch of the past, crafted for the present.</p>
        </div>

        {/* Product Section */}
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} onAddToCart={addToCart} />
          ))}
        </div>

        {/* Cart Section */}
        <div className="max-w-6xl mx-auto mt-8">
          <button
            onClick={toggleCart}
            className="bg-amber-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-amber-800 transition duration-300 ease-in-out transform"
          >
            {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>

          {showCart && (
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold text-black mb-4">Your Cart Items Include:</h2>
              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center mb-6 transform transition-all duration-300 ease-in-out"
                      >
                        <img
                          src={product.image}
                          alt={product.image}
                          className="w-20 h-40 sm:w-24 inline-block transition-transform duration-300 ease-in-out transform"
                        />
                        <span className="ml-4 text-lg font-medium text-slate-700">
                          {product.name} - ${product.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mt-6 text-black">
                    <span className="text-semibold text-xl">
                      Total: $
                      {cart.reduce((total, product) => total + product.price, 0)}
                    </span>

                    <div>
                      <button
                        onClick={goToCheckout}
                        className="bg-amber-500 py-3 px-8 rounded-lg shadow-md hover:bg-amber-950 text-lg transition duration-300 ease-in-out text-white transform hover:scale-110"
                      >
                        Proceed To Checkout
                      </button>

                      <button
                        onClick={clearCart}
                        className="ml-4 bg-slate-600 py-3 px-8 rounded-lg shadow-md hover:bg-slate-800 text-lg transition duration-300 ease-in-out text-white transform hover:scale-110"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-slate-600">Your cart is empty</p>
              )}
            </div>
          )}
        </div>

        {/* Checkout Section */}
        {isCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
              <h2 className="text-4xl font-bold text-amber-600 mb-4">Checkout</h2>
              <p className="text-lg text-red-600">Please confirm your order before proceeding</p>
              <div className="mt-4">
                <ul>
                  {cart.map((product, index) => (
                    <li key={index} className="flex justify-between mb-4">
                      <span>{product.name}</span>
                      <span>${product.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between mt-4">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">
                  ${cart.reduce((total, product) => total + product.price, 0)}
                </span>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setIsCheckout(false)}
                  className="bg-slate-600 py-2 px-6 rounded-lg shadow-md hover:bg-slate-800 text-lg transition duration-300 ease-in-out text-white transform hover:scale-110"
                >
                  Close
                </button>

                <button
                  onClick={() => alert("Order confirmed")}
                  className="bg-slate-600 py-2 px-6 rounded-lg shadow-md hover:bg-slate-800 text-lg transition duration-300 ease-in-out text-white transform hover:scale-110"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;

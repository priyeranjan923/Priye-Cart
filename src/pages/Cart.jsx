import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="h-full">
  {
    cart.length > 0  ? 
    (<div className=" max-w-6xl mt-8 mx-auto  justify-evenly sm:items-centers sm:justify-center space-x-16 space-y-10  flex flex-col lg:flex-row md:flex-row  ">


      <div className=" " > 
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
        <div className="underline h-1 w-5 bg-black"></div>
      </div>

      <div className="relative" >

        <div className="  ">
          <div className="font-bold text-lg text-green-600 ">Your Cart</div>
          <div className="font-extrabold text-5xl text-green-900">Summary</div>
          <p>
            <span className="absolute ">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="absolute top-[18rem] ">
          <p className="font-bold ">Total Amount:  ${totalAmount}</p>
          <button className="bg-green-800 w-[15rem] text-white ">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex  flex-col space-y-5 items-center justify-center bg-slate-900 h-[100vh] text-white mt- ">
      <h1 className="font-bold text-5xl">Cart Empty</h1>
      <Link to={"/Buy"}>
        <button className="text-gray-700 border-4 border-gray-700 rounded-full font-bold 
          text-[12px] p-1 px-5 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;

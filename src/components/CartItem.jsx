
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
 

      <div className=" flex space-x-8  h-[15rem] lg:h-[20rem] ">

        <div className="w-20 lg:w-40 md:w-40  ">
          <img src={item.image} />
        </div>

        <div className=" space-y-3 w-[13rem]">
          <h1 className="font-semibold text-lg">{item.title}</h1>

          <h1 className="text-xs">{item.description .split(" ").slice(0,10).join(" ") + "..."}</h1>
          <div className="flex  justify-between">
            <p className="font-bold text-green-600">${item.price}</p>
            <div className=" "
            onClick={removeFromCart}>
              <FcDeleteDatabase />
            </div>
          </div>

        </div>


      </div>


  );
};

export default CartItem;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import assets from "../assets/admin_assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return null;
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);
  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {orders.map((orders, index) => (
          <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700' key={index}>
            <img className='w-12' src={assets.parcel_icon} />
            <div>
              <div>
                {orders.items.map((item, index) => {
                  if (index === orders.items.length - 1) {
                    //last item
                    return (
                      <p className='py-0.5' key={index}>
                        {item.name} X {item.quantity}
                        <span>{item.size}</span>
                      </p>
                    );
                  } else {
                    return (
                      <p className='py-0.5' key={index}>
                        {item.name} X {item.quantity}
                        <span>{item.size}</span> ,
                      </p>
                    );
                  }
                })}
              </div>
              <p className='mt-3 mb-2 font-medium'>{orders.address.firstName + " " + orders.address.lastName}</p>
              <div>
                <p>{orders.address.street + ","} </p>
                <p>
                  {orders.address.city +
                    ", " +
                    orders.address.state +
                    ", " +
                    orders.address.country +
                    ", " +
                    orders.address.zipcode}{" "}
                </p>
              </div>
              <p>{orders.address.phone}</p>
            </div>

            
            <div>
              <p className="text-sm sm:text-[15px]">Items: {orders.items.length}</p>
              <p className="mt-3">Method: {orders.paymentMethod}</p>
              <p className=""> Payment: {orders.payment? 'Done' : "Pending"}</p>
              <p className="">Date: {new Date(orders.date).toLocaleDateString()}</p>
            </div>
            
            <p className="text-sm sm:text-[15px]">{currency} {orders.amount}</p>
            <select value={orders.status} className="p-2 font-semibold">
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

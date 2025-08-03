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
          <div key={index}>
            <img src={assets.parcel_icon} />
            <div>
              <div>
                {orders.items.map((item, index) => {
                  if (index === orders.items.length - 1) {
                    //last item
                    return (
                      <p key={index}>
                        {item.name} X {item.quantity}
                        <span>{item.size}</span>
                      </p>
                    );
                  } else {
                    return (
                      <p key={index}>
                        {item.name} X {item.quantity}
                        <span>{item.size}</span> ,
                      </p>
                    );
                  }
                })}
              </div>
              <p>{orders.address.firstName + " " + orders.address.lastName}</p>
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

            //show method , qnty 
            <div>
              <p>Items: {orders.items.length}</p>
              <p>Method: {orders.paymentMethod}</p>
              <p>Payment: {orders.payment? 'Done' : "Pending"}</p>
              <p>Date: {new Date(orders.date).toLocaleDateString}</p>
            </div>
            //order amount
            <p>{currency} {orders.amount}</p>
            <select>
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

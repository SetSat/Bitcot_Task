import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/slice/contactSlice";
import "./AddItem.css";

const AddItem = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({ name, email, mobile, address }));
    setName("");
    setEmail("");
    setMobile("");
    setAddress("");
  };

  return (
    <div className="add-item-page">
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            minLength={7}
            maxLength={10}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            minLength={7}
            maxLength={10}
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            minLength={10}
            maxLength={12}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            minLength={10}
            maxLength={25}
          />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;

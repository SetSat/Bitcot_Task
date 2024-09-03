import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateItem } from "../Redux/slice/contactSlice";
import "./EditPage.css";  

const EditPage = () => {
  const { id } = useParams();
  const items = useSelector((state) => state.data.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const item = items.find((item) => item.id === parseInt(id));

  const [name, setName] = useState(item ? item.name : "");
  const [email, setEmail] = useState(item ? item.email : "");
  const [mobile, setMobile] = useState(item ? item.mobile : "");
  const [address, setAddress] = useState(item ? item.address : "");

  const handleSave = () => {
    dispatch(updateItem({ id: parseInt(id), name, email, mobile, address }));
    navigate(`/view/${id}`);
  };

  if (!item) return <p>Item not found</p>;

  return (
    <div className="edit-page">
      <h1>Edit Contact</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Mobile"
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditPage;

import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, deleteItem } from "./Redux/slice/contactSlice";
import ViewPage from "./components/ViewPage";
import EditPage from "./components/EditPage";
import AddItem from "./components/AddItem";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data.items || []);
  const status = useSelector((state) => state.data.status);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredItems);

  return (
    <div className="app">
      <h1>Contact</h1>
      <div className="header">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <Link to="/add" className="button">
          Add Item
        </Link>
      </div>
      <ul className="item-list">
        {filteredItems.map((item) => (
          <li key={item.id} className="item">
            <span className="item-id">{item.id}</span>
            <div className="item-info">
              <span className="item-name">{item.name}</span>
              <span className="item-contact">{item.mobile}</span>
            </div>
            <div className="item-actions">
              <Link to={`/view/${item.id}`} className="icon-button">
                <FaEye />
              </Link>
              <Link to={`/edit/${item.id}`} className="icon-button">
                <FaEdit />
              </Link>
              <button
                onClick={() => handleDelete(item.id)}
                className="icon-button"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/view/:id" element={<ViewPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/add" element={<AddItem />} />
      </Routes>
    </div>
  );
};

export default App;

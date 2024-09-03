import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './ViewPage.css';  

const ViewPage = () => {
  const { id } = useParams();
  const items = useSelector(state => state.data.items);
  const item = items.find(item => item.id === parseInt(id));

  if (!item) return <p>Item not found</p>;

  return (
    <div className="view-page">
      <h1>View Contact</h1>
      <p><strong>ID:</strong> {item.id}</p>
      <p><strong>Name:</strong> {item.name}</p>
      <p><strong>Email:</strong> {item.email}</p>
      <p><strong>Mobile:</strong> {item.mobile}</p>
      <p><strong>Address:</strong> {item.address}</p>
      <Link to={`/edit/${item.id}`} className="button">Edit</Link>
    </div>
  );
};

export default ViewPage;

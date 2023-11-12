import React from 'react';

const User = ({ user }) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">@{user.username}</h6>
          <p className="card-text">Email: {user.email}</p>
          <p className="card-text">Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
          <p className="card-text">Latitude: {user.address.geo.lat}, Longitude: {user.address.geo.lng}</p>
        </div>
      </div>
    </div>
  );
}

export default User;
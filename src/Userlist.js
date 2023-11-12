import React, { useEffect, useState } from "react";
import User from './User';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importer le style Bootstrap
import './App.css'; 

const UserList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    function fetchData() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(res => {
          setData(res); // Stocker la réponse complète
        })
        .catch(err => setError(err));
    }

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Liste des Utilisateurs</h1>
      <div className="row">
        {data.map(user => (
          <div key={user.id} className="col-md-4 mb-3">
            <User user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;

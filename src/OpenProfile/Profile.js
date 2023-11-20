import React from 'react';
import { useUser } from '../UserContext';

const Profile = () => {
  const { userId } = useUser();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Profile</h4>
            </div>
            <div className="card-body">
              <div className="text-center mb-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="img-fluid rounded-circle"
                />
              </div>
              <h5 className="card-title text-center">{userId.name}</h5>
              <p className="card-text text-center">{userId.email}</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Username:</strong> {userId.username}
                </li>
                <li className="list-group-item">
                  <strong>Phone:</strong> {userId.phone}
                </li>
                <li className="list-group-item">
                  <strong>Address:</strong> {userId.address}
                </li>
                <li className="list-group-item">
                  <strong>Role:</strong> {userId.role}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

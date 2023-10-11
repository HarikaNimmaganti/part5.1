import React from 'react';
import PropTypes from 'prop-types';

function UserProfile({ name, email, bio }) {
  return (
    <div className="user-profile">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string.isRequired,
  bio: PropTypes.string
};

UserProfile.defaultProps = {
  name: 'Harika',
  bio: 'This user prefers to stay anonymous.'
};

export default UserProfile;

import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} <span className={classes.age}>({user.age} years old)</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;

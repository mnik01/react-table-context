import { FC, useReducer } from 'react';
import { baseTableReducer } from '../../lib/Components/reducer';
import { UsersTable } from '../Users/Components/UsersTable';
import { User } from '../Users/types';
import { UserTableContext, userTableCtxInitial } from './UserTableContext';

export const UsersPage: FC = () => {
  const [state, dispatch] = useReducer(baseTableReducer<User>, userTableCtxInitial.state);

  const methods = {
    dispatch,
  };

  return (
    <div>
      <h1>Users page</h1>
      <UserTableContext.Provider
        value={{
          methods,
          state,
        }}
      >
        <UsersTable />
      </UserTableContext.Provider>
    </div>
  );
};

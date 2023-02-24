import { UserTableContext, userTableCtxInitial } from './UserTableContext';
import { baseTableReducer } from '../../lib/Components/BaseTable';
import { UsersTable } from '../Users/Components/UsersTable';
import { FC, useReducer } from 'react';
import { User } from '../Users/types';

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

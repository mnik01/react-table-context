import { FC, useReducer } from 'react';
import { UsersTable } from '../Users/Components/UsersTable';
import { reducer } from './reducer';
import { UserTableContext, userTableCtxInitial } from './UserTableContext';

export const UsersPage: FC = () => {
  const [state, dispatch] = useReducer(reducer, userTableCtxInitial.state);

  const methods = {};

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

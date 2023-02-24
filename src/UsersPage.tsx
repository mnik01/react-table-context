import { useReducer } from 'react';
import { reducer } from './reducer';
import { UsersTable } from './UsersTable';
import { UserTableContext, userTableCtxInitial } from './UserTableContext';

function UsersPage() {
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
}

export default UsersPage;

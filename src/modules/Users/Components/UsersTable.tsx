import { FC, useContext } from 'react';
import { getUsers } from '../../Users/api';
import { UserTableContext } from '../../Users/UserTableContext';
import { BaseTable } from './BaseTable';

export const UsersTable: FC = () => {
  const context = useContext(UserTableContext);

  return <BaseTable fetcher={getUsers} api={context} />;
};

import { FC, useContext } from 'react';
import { BaseTable } from '../../../lib/Components/BaseTable';
import { getUsers } from '../../Users/api';
import { User } from '../../Users/types';
import { UserTableContext } from '../../Users/UserTableContext';

export const UsersTable: FC = () => {
  const context = useContext(UserTableContext);

  return <BaseTable<User> fetcher={getUsers} api={context} />;
};

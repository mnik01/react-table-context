import { FC, useContext } from 'react';
import { BaseTable } from './BaseTable';
import { UserTableContext } from './UserTableContext';

export const UsersTable: FC = () => {
  const context = useContext(UserTableContext);

  return <BaseTable api={context} />;
};

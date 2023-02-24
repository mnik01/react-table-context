import { BaseTable } from '@/lib/Components/BaseTable';
import { UserTableContext } from '../UserTableContext';
import { FC, ForwardedRef, forwardRef, useContext } from 'react';
import type { User } from '../types';
import { getUsers } from '../api';
import { TableImperativeHandlers } from '@/lib/Components/BaseTable';

const UsersTableInner = (
  _: any,
  ref?: ForwardedRef<TableImperativeHandlers>
) => {
  const context = useContext(UserTableContext);

  return <BaseTable<User> ref={ref} fetcher={getUsers} api={context} />;
};

export const UsersTable = forwardRef<TableImperativeHandlers>(UsersTableInner);

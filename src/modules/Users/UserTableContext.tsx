import { createContext } from 'react';
import { TableAPI } from '../Users/Components/BaseTable';
import { User } from './types';

export type UserTableAPI = TableAPI<User>;
export type UserCtx = {
  state: UserTableAPI;
  methods: Record<string, Function>;
};

const initialState: UserTableAPI = {
  tableData: { count: 0, query: [] },
  sorting: { id: 'email', desc: false },
  totalPagesCount: 1,
  pageIndex: 1,
  isLoading: true,
  filter: '',
  pageSize: 15,
};

export const userTableCtxInitial: UserCtx = {
  state: initialState,
  methods: {},
};
export const UserTableContext = createContext(userTableCtxInitial);

import { Dispatch, useEffect } from 'react';
import { Action, TableStateActions } from '../Components/reducer';

export type TableAPI<T> = {
  tableData: TableDataResponse<T>;
  sorting: Sorting;
  totalPagesCount: number;
  pageIndex: number;
  isLoading: boolean;
  pageSize: number;
  filter: string;
};
export type BaseCtx<T> = {
  state: TableAPI<T>;
  methods: Record<string, Function> & {
    dispatch: Dispatch<Action<T>>;
  };
};

type BaseTableProps<T> = {
  fetcher: () => Promise<TableDataResponse<T>>;
  api: BaseCtx<T>;
};

export const BaseTable = <T extends object>({
  api,
  fetcher,
}: BaseTableProps<T>) => {
  const { state, methods } = api;
  const { sorting, pageIndex, pageSize } = state;
  const { dispatch } = methods;

  const fetchTableData = async () => {
    dispatch({ type: TableStateActions.SET_IS_LOADING, payload: true });

    await fetcher();
  };

  useEffect(() => {
    fetchTableData();
  }, [sorting, pageIndex, pageSize]);

  return (
    <div>
      table:
      {pageSize}
    </div>
  );
};

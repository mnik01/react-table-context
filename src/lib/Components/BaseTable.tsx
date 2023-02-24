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
  const { sorting, pageIndex, isLoading, tableData, pageSize } = state;
  const { dispatch } = methods;

  const fetchTableData = async () => {
    dispatch({ type: TableStateActions.SET_IS_LOADING, payload: true });
    const result = await fetcher();
    const pagesCount = Math.ceil(result.count / pageSize);

    dispatch({ type: TableStateActions.SET_TABLE_DATA, payload: result });
    dispatch({
      type: TableStateActions.SET_TOTAL_PAGES_COUNT,
      payload: pagesCount === 0 ? 1 : pagesCount,
    });
    dispatch({ type: TableStateActions.SET_IS_LOADING, payload: false });
  };

  useEffect(() => {
    fetchTableData();
  }, [sorting, pageIndex, pageSize]);

  return (
    <div>
      {isLoading && <h1>LOADING...</h1>}
      {!isLoading && JSON.stringify(tableData.query)}
    </div>
  );
};

import { TableStateActions } from './reducer';
import { BaseTableProps } from './types';
import { useEffect } from 'react';

export const BaseTable = <T extends { id: string }>({
  api,
  fetcher,
}: BaseTableProps<T>) => {
  const { state, methods } = api;
  const { sorting, pageIndex, isLoading, tableData, pageSize } = state;
  const { dispatch } = methods;

  const fetchTableData = async () => {
    dispatch({ type: TableStateActions.SET_IS_LOADING, payload: true });
    const result = await fetcher();
    dispatch({
      type: TableStateActions.UPDATE_AFTER_FETCH,
      payload: result,
    });
  };

  useEffect(() => {
    fetchTableData();
  }, [sorting, pageIndex, pageSize]);

  return (
    <div>
      {isLoading && <h1>LOADING...</h1>}
      {!isLoading && (
        <span className="text-xs">User id: {tableData.query[0].id}</span>
      )}
    </div>
  );
};

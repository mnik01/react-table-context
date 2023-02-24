import { TableStateActions } from './reducer';
import { BaseTableProps, TableImperativeHandlers } from './types';
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
} from 'react';

const BaseTableInner = <T extends { id: string }>(
  { api, fetcher }: BaseTableProps<T>,
  ref?: ForwardedRef<TableImperativeHandlers>
) => {
  const { state, methods } = api;
  const { sorting, pageIndex, isLoading, tableData, pageSize, selectedRow } =
    state;
  const { dispatch } = methods;

  useImperativeHandle(ref, () => ({ refresh: fetchTableData }));

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

  const onRowClick = (row: T) => {
    dispatch({ type: TableStateActions.SET_SELECTED_ROW, payload: row });
  };

  return (
    <div>
      {isLoading && <h1>LOADING...</h1>}
      {!isLoading && (
        <div className="w-full bg-blue-100 divide-y-2 divide-black">
          {tableData.query.map((row) => (
            <div
              onClick={() => {
                onRowClick(row);
              }}
              className="text-xs cursor-pointer p-2 hover:bg-blue-200"
            >
              row id: {row.id}
            </div>
          ))}
        </div>
      )}
      {selectedRow ? (
        <p>selected: {selectedRow.id}</p>
      ) : (
        <p>click to select row</p>
      )}
    </div>
  );
};
export const BaseTable = forwardRef(BaseTableInner) as <T>(
  props: BaseTableProps<T> & { ref?: ForwardedRef<TableImperativeHandlers> }
) => ReturnType<typeof BaseTableInner>;

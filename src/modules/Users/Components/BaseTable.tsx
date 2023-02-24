import { UserCtx } from '../../Users/UserTableContext';

export type TableAPI<T> = {
  tableData: TableDataResponse<T>;
  sorting: Sorting;
  totalPagesCount: number;
  pageIndex: number;
  isLoading: boolean;
  pageSize: number;
  filter: string;
};

type BaseTableProps<T> = {
  fetcher: () => Promise<TableDataResponse<T>>;
  api: UserCtx;
};

export const BaseTable = <T extends object>({ api }: BaseTableProps<T>) => {
  const { state, methods } = api;

  return (
    <div>
      table:
      {JSON.stringify(state.pageSize)}
    </div>
  );
};

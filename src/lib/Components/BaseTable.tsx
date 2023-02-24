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
  methods: Record<string, Function>;
};

type BaseTableProps<T> = {
  fetcher: () => Promise<TableDataResponse<T>>;
  api: BaseCtx<T>;
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

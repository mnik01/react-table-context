import { TableAPI } from '../Components/BaseTable';

export enum TableStateActions {
  SET_TABLE_DATA = 'SET_TABLE_DATA',
  SET_SORTING = 'SET_SORTING',
  SET_TOTAL_PAGES_COUNT = 'SET_TOTAL_PAGES_COUNT',
  SET_PAGE_INDEX = 'SET_PAGE_INDEX',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_PAGE_SIZE = 'SET_PAGE_SIZE',
}

export type Action<T> =
  | {
      type: typeof TableStateActions.SET_TABLE_DATA;
      payload: TableDataResponse<T>;
    }
  | { type: typeof TableStateActions.SET_SORTING; payload: Sorting }
  | { type: typeof TableStateActions.SET_TOTAL_PAGES_COUNT; payload: number }
  | { type: typeof TableStateActions.SET_PAGE_INDEX; payload: number }
  | { type: typeof TableStateActions.SET_IS_LOADING; payload: boolean }
  | { type: typeof TableStateActions.SET_PAGE_SIZE; payload: number };

export const baseTableReducer = <T>(
  state: TableAPI<T>,
  action: Action<T>
): TableAPI<T> => {
  switch (action.type) {
    case TableStateActions.SET_TABLE_DATA:
      return { ...state, tableData: action.payload };
    case TableStateActions.SET_SORTING:
      return { ...state, sorting: action.payload };
    case TableStateActions.SET_TOTAL_PAGES_COUNT:
      return { ...state, totalPagesCount: action.payload };
    case TableStateActions.SET_PAGE_INDEX:
      return { ...state, pageIndex: action.payload };
    case TableStateActions.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case TableStateActions.SET_PAGE_SIZE:
      return { ...state, pageSize: action.payload };
    default:
      return state;
  }
};

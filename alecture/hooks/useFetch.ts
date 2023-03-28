import axiosInstance from '../apis';
import { useEffect, useReducer } from 'react';
import { AxiosRequestConfig } from 'axios';

interface IReducerState<T> {
  isLoading: boolean;
  responseData: T;
  error: string;
}

const defaultFetchReducer: IReducerState<unknown> = {
  isLoading: true,
  responseData: null,
  error: '',
};

enum ActionType {
  LOADING = 'Loading',
  FETCHED = 'Fetched',
  ERROR = 'Error',
}

type Action<T> = { type: 'Loading' } | { type: 'Fetched'; payload: T } | { type: 'Error'; payload: string };

const fetchReducer = <T>(state: IReducerState<T>, action: Action<T>): IReducerState<T> => {
  switch (action.type) {
    case ActionType.LOADING: {
      return { ...state, isLoading: true };
    }
    case ActionType.FETCHED: {
      return {
        ...state,
        isLoading: false,
        responseData: action.payload,
      };
    }
    case ActionType.ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};

const useFetch = <T>(
  url: string,
  params?: any,
): {
  isLoading: boolean;
  responseData: T;
  fetch: () => Promise<T>;
} => {
  const [state, dispatch] = useReducer(fetchReducer, defaultFetchReducer) as [IReducerState<T>, React.Dispatch<any>];

  const fetch = async () => {
    try {
      dispatch({ type: ActionType.LOADING });

      const response = await axiosInstance.get<T>(url, { params });

      dispatch({ type: ActionType.FETCHED, payload: response });

      return response;
    } catch (error) {
      console.dir(error);
      dispatch({ type: ActionType.ERROR, payload: error as Error });

      throw error;
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { isLoading: state.isLoading, responseData: state.responseData, fetch };
};

export default useFetch;

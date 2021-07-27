import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { IReduxStore, TActions } from '@services/redux';

export const useReduxSelector: TypedUseSelectorHook<IReduxStore> = useSelector;

/**
 * Dispatch one action
 * @param action Any action creator
 */
export const useAction = <T extends (...args: any[]) => any>(action: T) => {
  const dispatch = useDispatch();
  return (...args: Parameters<T>) => {
    dispatch(action(...args));
  };
};
export const useActionCallback = <T extends (...args: any[]) => any>(
  action: T
) => {
  const dispatch = useDispatch();
  return (...args: Parameters<T>) =>
    () => {
      dispatch(action(...args));
    };
};

export const useReduxDispatch = () => {
  const dispatch = useDispatch();

  const callAction =
    <T extends (...args: any[]) => any>(action: T) =>
    (...args: Parameters<T>) => {
      dispatch(action(...args));
    };

  const callActionCallback =
    <T extends (...args: any[]) => any>(action: T) =>
    (...args: Parameters<T>) =>
    () => {
      dispatch(action(...args));
    };

  return {
    callAction,
    callActionCallback,
  };
};

export const useThunkDispatch = () => {
  const dispatch = useDispatch();

  return dispatch as ThunkDispatch<IReduxStore, {}, TActions>;
};

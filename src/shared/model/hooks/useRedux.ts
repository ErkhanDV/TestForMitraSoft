import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { bindActionCreators } from '@reduxjs/toolkit';

import { postsActions } from '../reducers';

import { TAppDispatch, TRootState } from '@/app/model/store';

const useAppDispatch = () => useDispatch<TAppDispatch>();
const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

const actions = {
  ...postsActions,
};

const useAppActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(actions, dispatch);
};

export { useAppSelector, useAppActions };

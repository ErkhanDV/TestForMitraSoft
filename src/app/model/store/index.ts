import { combineReducers, configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';

import { postListReducer, PostSaga } from '@/shared';

const rootReducer = combineReducers({
  postListReducer,
});

const saga = createSagaMiddleware();

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [saga],
  });

  saga.run(PostSaga);
  return store;
};

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];

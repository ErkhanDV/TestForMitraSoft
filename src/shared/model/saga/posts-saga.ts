import axios from 'axios';

import { call, put, takeEvery } from 'redux-saga/effects';

import { IPost } from '../reducers';
import { updatePosts } from '../reducers';

import { URLS } from '@/shared';

type response = {
  data: IPost[];
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* workSetPosts() {
  const response: response = yield call(() => axios.get(URLS.posts));
  const postList = response.data;

  yield delay(500);
  yield put(updatePosts(postList));
}

export function* PostSaga() {
  yield takeEvery('posts/loadPosts', workSetPosts);
}

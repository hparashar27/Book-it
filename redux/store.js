import { configureStore } from '@reduxjs/toolkit';
import { HYDRATE ,createWrapper} from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/reducers';

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return reducers(state, action);
  }
};

export const store = configureStore({
  reducer,
  middleware: [thunkMiddleware],
});

export const wrapper = createWrapper(() => store);


import { Provider } from 'react-redux';
import {wrapper} from '../redux/store';
import { ToastContainer} from 'react-toastify';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, ...rest }) {
  const { store, ...props } = wrapper.useWrappedStore(rest);
  
  return (
    <SessionProvider session={...props.pageProps}>
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  </SessionProvider>
  );
}

export default MyApp;

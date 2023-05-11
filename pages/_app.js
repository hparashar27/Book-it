import { Providers } from '@/redux/provider'
import { store } from "@/redux/store";


function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
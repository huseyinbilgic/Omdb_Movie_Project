//import '../styles/globals.css'
import {Provider} from "react-redux"
import configureStore from "../redux/reducers/configureStore"
const store=configureStore()
export default function MyApp({ Component, pageProps }) {
   return  <Provider store={store}> <Component {...pageProps} /></Provider>
}
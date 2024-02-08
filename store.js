import { configureStore } from "@reduxjs/toolkit";
import PayesList from './reducer'
export default configureStore({
    reducer: {
        Pays:PayesList,
    }
})
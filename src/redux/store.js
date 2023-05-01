import {configureStore} from "@reduxjs/toolkit"
import { IfscReducers, PostalReducers } from "./reducers/postalReducer";

const store = configureStore({
    reducer:{
        postal:PostalReducers,
        ifsc:IfscReducers
    }
})

export default store;
import {createReducer} from "@reduxjs/toolkit"

export const PostalReducers = createReducer(
    {},
    {
        postalRequest: state =>{
            state.loading = true;
        },
        postalSuccess:(state,action) =>{
            state.loading = false;
            state.data = action.payload;
        },
        postalFail:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        }

    }
)
export const IfscReducers = createReducer(
    {},
    {
        ifscRequest: state =>{
            state.loading1 = true;
        },
        ifscSuccess:(state,action) =>{
            state.loading1 = false;
            state.data1 = action.payload;
        },
        ifscFail:(state,action) =>{
            state.loading1 = false;
            state.error = action.payload;
        }

    }
)
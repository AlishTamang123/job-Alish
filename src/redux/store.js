import { configureStore } from '@reduxjs/toolkit'

import companyuserReducer from './reducer/companyuser'
import jobseekeruserReducer from './reducer/jobseekeruser'

export const store = configureStore({
    reducer: {
        
        Companyuser: companyuserReducer,
        jobseekeruser:  jobseekeruserReducer,
    },
})
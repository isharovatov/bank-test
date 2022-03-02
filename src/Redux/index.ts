import nameStore from './nameStore'
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
  reducer: nameStore,
});

export type RootState = ReturnType<typeof store.getState>
export default store

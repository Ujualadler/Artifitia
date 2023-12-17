import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { UserReducer } from "./Slices/userAuth";

const userPersistConfig = {
  key: "user",
  storage: storage,
};

const persistedUserReducer = persistReducer(userPersistConfig, UserReducer);

export const Store = configureStore({
  reducer: {
    User: persistedUserReducer,
  },
});

export const persistor = persistStore(Store);

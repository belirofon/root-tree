import {
    Action,
    ThunkAction,
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';


const rootReducer = combineReducers({
    hotNews: hotNewsSlice.reducer,
    cardNews: cardNewsSlice.reducer,
    fileList: fileListSlice.reducer,
    getFileList: getFileListSlice.reducer,
    getUserData: getUserDataSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import imagesReducer from './imagesReducer';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';
import favoriteImageReducer from './favoriteImageReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
    nextPage: pageReducer,
    imageStats: statsReducer,
    isFavoritesSeen: favoriteImageReducer,
});

export default rootReducer;

import { IMAGES } from '../constants';

const favoriteImageReducer = (state = false, action) => {
    if (action.type === IMAGES.TOGGLE_FAVORITES_TAB) {
        return !state;
    }

    return state;
};

export default favoriteImageReducer;

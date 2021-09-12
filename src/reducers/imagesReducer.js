import { IMAGES } from '../constants';

const imagesReducer = (state = [], action) => {
    if (action.type === IMAGES.LOAD_SUCCESS) {
        return [...state, ...action.images];
    }

    if (action.type === IMAGES.TOGGLE_FAVORITE) {
        const images = [...state];
        const updatedImage = images.find(image => image.id === action.id);
        updatedImage.favorite = !updatedImage.favorite;

        return state.map(image =>
            image.id === action.id ? updatedImage : image,
        );
    }

    if (action.type === IMAGES.DELETE_IMAGE) {
        return state.filter(image => image.id !== action.id);
    }

    return state;
};

export default imagesReducer;

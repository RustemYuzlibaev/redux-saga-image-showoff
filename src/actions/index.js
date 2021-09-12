import { IMAGES, STATS } from '../constants';

const loadImages = () => ({
    type: IMAGES.LOAD,
});

const setImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images,
});

const setError = error => ({
    type: IMAGES.LOAD_FAIL,
    error,
});

const loadImageStats = id => ({
    type: STATS.LOAD,
    id,
});

const setImageStats = (id, downloads) => ({
    type: STATS.LOAD_SUCCESS,
    id,
    downloads,
});

const setImageStatsError = id => ({
    type: STATS.LOAD_FAIL,
    id,
});

const toggleFavoriteImage = id => ({
    type: IMAGES.TOGGLE_FAVORITE,
    id,
});

const toggleFavoritesTab = () => ({
    type: IMAGES.TOGGLE_FAVORITES_TAB,
});

const deleteImage = id => ({
    type: IMAGES.DELETE_IMAGE,
    id,
});

export {
    loadImages,
    setImages,
    setError,
    loadImageStats,
    setImageStats,
    setImageStatsError,
    toggleFavoriteImage,
    toggleFavoritesTab,
    deleteImage,
};

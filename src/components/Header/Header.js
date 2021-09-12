import React from 'react';
import { connect } from 'react-redux';
import { toggleFavoritesTab } from '../../actions';
import Button from '../Button';

import './styles.css';

const Header = ({ toggleFavoritesTab }) => (
    <header>
        <h1>What the Splash!</h1>
        <Button mod="button--top" onClick={toggleFavoritesTab}>
            Favorites
        </Button>
    </header>
);

const mapDispatchToProps = dispatch => ({
    toggleFavoritesTab: () => dispatch(toggleFavoritesTab()),
});

export default connect(
    null,
    mapDispatchToProps,
)(Header);

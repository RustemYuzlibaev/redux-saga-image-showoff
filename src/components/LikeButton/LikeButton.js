import React, { Component } from 'react';
import classNames from 'classnames';
import './styles.css';
import { toggleFavoriteImage } from '../../actions';
import { connect } from 'react-redux';

class Like extends Component {
    state = {
        isLikeHit: false,
    };

    handleLikeClick = e => {
        this.setState({ isLikeHit: !this.state.isLikeHit });
        this.props.toggleFavoriteImage(this.props.imageId);
    };

    render() {
        return (
            <span
                title="Add to favorites"
                onClick={this.handleLikeClick}
                className={classNames('like', {
                    'like--hit': this.state.isLikeHit,
                })}
                role="img"
                aria-label="like"
            >
                👍
            </span>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    toggleFavoriteImage: id => dispatch(toggleFavoriteImage(id)),
});

export default connect(
    null,
    mapDispatchToProps,
)(Like);

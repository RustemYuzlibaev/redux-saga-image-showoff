import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteImage } from '../../actions';
import './styles.css';

class RemoveButton extends Component {
    handleLikeClick = e => {
        this.props.deleteImage(this.props.imageId);
    };

    render() {
        return (
            <span
                onClick={this.handleLikeClick}
                title="Discard image"
                className="remove"
                role="img"
                aria-label="delete"
            >
                🙅‍♂️
            </span>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    deleteImage: id => dispatch(deleteImage(id)),
});

export default connect(
    null,
    mapDispatchToProps,
)(RemoveButton);

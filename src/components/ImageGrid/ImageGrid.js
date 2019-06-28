import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import Button from '../Button';
import Stats from '../Stats';
import { loadImages } from '../../actions';

class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const { isLoading, images, loadImages, error, imageStats } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <Stats stats={imageStats[image.id]} />
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                </section>
                <Button
                    onClick={() => !isLoading && loadImages()}
                    loading={isLoading}
                >
                    Load more
                </Button>
            </div>
        );
    }
}

const mapStateToProps = ({ isLoading, images, error, imageStats }) => ({
    isLoading,
    images,
    error,
    imageStats,
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);

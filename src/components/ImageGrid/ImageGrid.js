import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import Button from '../Button';
import Stats from '../Stats';
import { loadImages } from '../../actions';
import LikeButton from '../LikeButton/LikeButton';
import RemoveButton from '../RemoveButton/RemoveButton';

class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const {
            isLoading,
            images,
            loadImages,
            imageStats,
            isFavoritesSeen,
        } = this.props;

        let imagesToShow = images;
        let showStub = false;

        if (isFavoritesSeen) {
            imagesToShow = images.filter(image => image.favorite !== false);
            showStub = imagesToShow.length === 0;
        }

        return (
            <div className="content">
                <section className="grid">
                    {showStub
                        ? `You haven't added any images...`
                        : imagesToShow.map(image => (
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
                                  <LikeButton imageId={image.id} />
                                  <RemoveButton imageId={image.id} />
                              </div>
                          ))}
                </section>
                {!isFavoritesSeen ? (
                    <Button
                        onClick={() => !isLoading && loadImages()}
                        loading={isLoading}
                    >
                        Load more
                    </Button>
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = ({
    isLoading,
    images,
    error,
    imageStats,
    isFavoritesSeen,
}) => ({
    isLoading,
    images,
    error,
    imageStats,
    isFavoritesSeen,
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);

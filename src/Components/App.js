import React, { Component } from "react";

import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import SearchBar from "./SearchBar/SearchBar";
import Button from "./Button/Button";
import Layout from "./Layout/Layout";
import Loader from "./Loader/Loader";
import FechImageApi from "../Utils/ImageApi";
import Modal from "./Modal/Modal";

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    serchQuery: "",
    page: 1,
    largeImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.serchQuery;
    const nextQuery = this.state.serchQuery;
    const { largeImageURL } = this.state;

    if (prevQuery !== nextQuery) {
      this.fechArticles();
    }

    if (largeImageURL) {
      window.addEventListener("keydown", this.onPressEscape);
    }
    if (!largeImageURL) {
      window.removeEventListener("keydown", this.onPressEscape);
    }
  }

  fechArticles = () => {
    const { serchQuery, page } = this.state;
    this.setState({ loading: true });

    FechImageApi(serchQuery, page)
      .then((response) => {
        this.setState((prevState) => {
          return {
            images: [...prevState.images, ...response],
            page: prevState.page + 1,
          };
        });
        if (this.state.page > 2) {
          this.handleScrol();
        }
      })

      // .then((images) => this.setState(prevState=>({ images, page: prevState.page + 1 })))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState({
      serchQuery: query,
      page: 1,
      images: [],
    });
  };

  handleScrol = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  handleModalUrl = (url) => {
    this.setState({ largeImageURL: url.target.dataset.url });
  };

  handleClick = (e) => {
    if (e.target.nodeName !== "IMG") {
      this.setState({
        largeImageURL: null,
      });
    }
  };

  onPressEscape = (event) => {
    if (event.code === "Escape") {
      this.setState({ largeImageURL: null });
    }
  };

  render() {
    const { loading, images, error, largeImageURL } = this.state;

    return (
      <Layout>
        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}

        {images.length > 0 && (
          <ImageGallery>
            {images.map((image) => (
              <ImageGalleryItem
                key={image.id}
                img={image.webformatURL}
                alt={image.tag}
                large={image.largeImageURL}
                onHandleModalUrl={this.handleModalUrl}
              />
            ))}
          </ImageGallery>
        )}
        {loading && <Loader />}
        {images.length > 0 && !loading && (
          <Button fechArticles={this.fechArticles} />
        )}
        {largeImageURL && (
          <Modal image={largeImageURL} onHandleClick={this.handleClick} />
        )}
      </Layout>
    );
  }
}

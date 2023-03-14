import React, { Component } from "react";
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import NotFound from './NotFound/NotFound';
import imageAPI from '.././helpers/api';
import './App.css'

const INITIAL_STATE = {
  images: [],
  searchImage: '',
  totalhits: 0,
  currentPage: 1,
  currentImage: '',
  error: null,
  status: 'idle',
  showModal: false,
};

class App extends Component { 
  state = {...INITIAL_STATE}; 
  
  componentDidMount() { 
    this.setState({ status: 'loading' });    
    
    imageAPI.fetchImages()
      .then(images => this.setState({ images: images.hits, totalhits: images.totalHits, status: 'resolved' }))
      .catch(error => this.setState({ error: 'We have some problems', status: 'reject'}));    
  };
  
  componentDidUpdate(nextProps, nextState) {
    const { searchImage, currentPage } = this.state;
    
    if (nextState.searchImage !== searchImage) {
      this.setState({...INITIAL_STATE, searchImage, status: 'loading' });
      
      imageAPI.fetchImages(searchImage)
        .then(images => this.setState({ images: images.hits, totalhits: images.totalHits, status: 'resolved' }))
        .catch(error => this.setState({ error: 'We have some problems', status: 'reject' }));  
    };
    
    if (nextState.currentPage !== currentPage && currentPage !== 1) {
      this.setState({ status: 'loading' });
      
      imageAPI.fetchImages(searchImage, currentPage)
        .then(images => this.setState(prevState => ({ images: [...prevState.images, ...images.hits], status: 'resolved' })))
        .catch(error => this.setState({ error: 'We have some problems', status: 'reject' }));  
    };
  };
  
  formSubmitHandler  = searchImage => {
    this.setState({searchImage})
  };
  
  onBtnClickToNextPage = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };
  
  onImageClick = (imageURL) => {
    this.setState({currentImage: imageURL, showModal: true});
  }
  
  onToggleModalShow = () => {
    this.setState({ showModal: false });
  };
  
  render() { 
    const { images, searchImage, status, showModal, currentImage, totalhits, error } = this.state; 
    
    return (
      <div className="App">
        <Searchbar onSubmit={this.formSubmitHandler} />       
               
        <ImageGallery images={images} onClick={ this.onImageClick} />
        
        {status === 'loading' && <Loader />}
        
        {error !== null && <NotFound message={error} />}
        
        {status === 'resolved' && images.length ===0 && <NotFound message={`There aren’t any images with the name: ${searchImage}`} /> }
        
        {images.length !== 0 && images.length < totalhits && status === 'resolved' && <Button onClick={this.onBtnClickToNextPage} />}
        
        {showModal && <Modal onToggleModalShow={this.onToggleModalShow}>{currentImage }</Modal>}
        
      </div>
    );
  }
}

export default App;
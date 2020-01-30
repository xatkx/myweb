


import React, { Component } from 'react';
//crear componente navbar/midle/end
import Navbar from './componets/top/navbar'



class App extends Component {

  state = {
    videos: []
  }

  searchApi = (search) => {
    const api = `https://pixabay.com/api/videos/?key=14901812-5f44c61e4696aa53c5c4721f5&q=${search}`
    fetch(api)
      .then(video => video.json())
      .then(produc => {
        this.setState({
          videos: produc.hits
        },
          console.log(this.state.videos)
        )
      })
  }


  render(){
    return(
    <div className='row row-cols-1'>

      <div className='col' >
        
        <Navbar searchApi={this.searchApi} />
        
      </div>
      <div className='col'>
        <div className=''>
          <h1>luego vere para que sera la pagina</h1>
          <h1>luego vere para que sera la pagina</h1>
          <h1>luego vere para que sera la pagina</h1>
          <h1>luego vere para que sera la pagina</h1>
          <h1>luego vere para que sera la pagina</h1>
          <h1>luego vere para que sera la pagina</h1>
        </div>
      </div>

    </div>
    )
  }
}

export default App;
import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async() => {
    const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");    
  }
  ascomponentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'loading...' : 'we are ready'}</div>;
  }
}

export default App;

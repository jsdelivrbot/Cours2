import React, { Component } from "react";
import SearchBar from "../components/search-bar";
import VideoList from "./video-list";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    axios.get();
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  }
}

export default App;

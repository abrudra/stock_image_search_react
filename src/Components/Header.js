import { Component } from "react";
import Gallery from "./Gallery";
import axios from "axios";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      data: [],
      acessKey: "1VKQVAEI_FuS9BhcWtwqzkRERtiWMCPlPLKGm2eQ8GA",
      pagenr: 1,
      error: "",
      query: "",
    };
  }

  inpuHadler = (event) => {
    const { name, value } = event.target;
    this.setState({
      input: value,
    });
  };

  componentDidMount() {
    console.log("did");
    axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=${this.state.acessKey}&page=${this.state.pagenr}&query=random&per_page=30`
      )
      .then((response) => {
        this.setState({
          data: response.data.results,
        });
      })
      .catch((error) => {
        this.setState({
          error: "Data fetching error",
        });
      });
  }

  searchHandle = () => {
    console.log(54);
    axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=${this.state.acessKey}&page=${this.state.pagenr}&query=${this.state.input}&per_page=30`
      )
      .then((response) => {
        this.setState({
          data: response.data.results,
        });
      })
      .catch(
        this.setState({
          error: "Data fetching error",
        })
      );
  };

  handleKeyDown =(e)=>{
      if (e.key === 'Enter') {
      this.searchHandle(e)
    }
  }
  

  render() {
    return (
      <>
        <div className="div-header">
          <input
            className="search"
            type="text"
            name="input"
            placeholder="Search"
            value={this.state.input}
            onChange={this.inpuHadler}
            onKeyDown={this.handleKeyDown}
          />
          <img
            src={require("../data/search.png")}
            alt="search button"
            className="imaginput"
            onClick={this.searchHandle}
          />
        </div>
        <Gallery data={this.state.data} />
      </>
    );
  }
}

export default Header;

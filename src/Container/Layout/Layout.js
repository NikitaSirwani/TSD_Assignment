import React, { Component } from 'react';
import Auxillary from '../../Hoc/Auxillary';
import Inputbox from '../../Component/Inputbox/Inputbox'
import URLList from '../../Component/URLList/URLList';
import MainScreen from '../../Component/MainScreen/MainScreen'
import queryString from 'query-string';
import './Layout.css';
import axios from 'axios'
class Layout extends Component {
  state = {
    URL: [],
    value: '',
    submitted: false,
    selectedItem: null,
    showDescription: false,
    items: [],
    showMainScreen: false,
    data: [],
    getMainScreen: false

  }

  inputHandler = (event) => {
    this.setState({ value: event.target.value });
  }

  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.value !== null) {
      this.setState({ submitted: true });
    }

    if (this.state.value !== null) {
      if (this.state.URL !== null) {
        var newArray = this.state.URL.slice();
      }
      newArray.unshift(this.state.value);
      localStorage.setItem("saved_state", JSON.stringify(newArray))
      this.setState({ URL: newArray })
    }
    document.getElementById("urlText").value = "";
  }

  componentDidMount() {
    if (localStorage.getItem("saved_state") !== null) {
      const state1 = JSON.parse(localStorage.getItem("saved_state"))
      this.setState({
        URL: state1,
        submitted: true
      })
    }
  }

  getRSSData = (i, data) => {
    this.setState({ selectedItem: i })
    if (localStorage.getItem(data) == null) {
      axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${data}/feed/`)
        .then(res => {
          if (this.state.selectedItem === i) {
            this.setState({ data: data, showMainScreen: true })
          }
          this.setState({
            items: res.data.items,
            isLoading: false
          });
          localStorage.setItem(data, JSON.stringify(this.state.items))
        }
        )
        .catch(error => this.setState({ error, isLoading: false }));
    } else {
      this.setState({
        data: data,
        items: JSON.parse(localStorage.getItem(data)),
        isLoading: false,
        showMainScreen: true
      });
    }
    this.props.history.push({ search: `?selected=${i}` })
  }

  toggleHandler = () => {
    this.setState({ showDescription: true });
  }

  componentDidUpdate() {
    const queryParam = queryString.parse(this.props.location.search).selected
    if (this.state.selectedItem !== parseInt(queryParam) && queryParam && this.state.selectedItem) {
      this.setState({ selectedItem: parseInt(queryParam) }, () => {
      })
      this.getRSSData(parseInt(queryParam), this.state.URL[parseInt(queryParam)])
    }
  }

  deleteHandler = (event, i, data) => {
    event.preventDefault();

    this.setState({
      URL: this.state.URL.filter((_, index) => {
        return index !== i
      })
    })
    if (this.state.selectedItem === i) {
      localStorage.removeItem(data)
      this.setState({ showMainScreen: false })

    }
    let newArray = JSON.parse(localStorage.getItem("saved_state"))
    newArray = newArray.filter((_, index) => {
      return index !== i
    })
    localStorage.setItem("saved_state", JSON.stringify(newArray))
  }

  render() {
    return (
      <Auxillary>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light my-header">
            <h1>RSS Feed</h1>
          </nav>
          <div className="row my-content">
            <div className="col-md-4">

              <div className="row">
                <div className="col-md-12">
                  <Inputbox
                    changed={this.inputHandler}
                    clicked={this.submitHandler} />
                </div>

              </div>
              <div className="row">
                <div className="col-md-12">
                  <URLList
                    getRSSData={this.getRSSData}
                    submitted={this.state.submitted}
                    selectedItem={this.state.selectedItem}
                    URL={this.state.URL}
                    items={this.state.items}
                    getMainScreen={this.getMainScreen}
                    deleteHandler={this.deleteHandler} />
                </div>
              </div>
            </div>

            <div className="col-md-8">
              {this.state.showMainScreen ? <MainScreen
                items={this.state.items}
                index={this.state.index}
                data={this.state.data} /> : null}
            </div>
          </div>
        </div>
      </Auxillary>
    )
  }
}

export default Layout;

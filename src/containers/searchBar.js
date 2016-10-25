import React, { Component } from 'react'
import { fetchWeather } from '../actions/index.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  
  onInputChange(event) {
     this.setState({
      term: event.target.value
    }) 
  }  
  
  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
  }

  render() { 
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Enter a city name to get forecase information" 
          className="form-control" 
          value={this.state.term} 
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )

  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
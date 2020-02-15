import React, { Component } from 'react'
import request from 'superagent';
import PokeItem from './PokeItem.js';
import SearchBar from './SearchBar.js';
import { Link } from 'react-router-dom'
import './App.css';

export default class List extends Component {

    state = { 
        searchQuery: this.props.match.params.pokemon,
        pokedex: [],
     }

     async componentDidMount() {
         if (this.props.match.params.pokemon) {
             const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.props.match.params.pokemon}`)
     
             this.setState({ pokedex: data.body.results })
         }
     }

    handleSearch = async (e) => {
        e.preventDefault();

        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.state.searchQuery}`)

        this.setState({ 
            pokedex: data.body.results, })
        

     this.props.history.push(this.state.searchQuery)

    }

    handleChange = (e) => this.setState({ searchQuery: e.target.value })
    render() {
    
        return (
            <div className="App">
          <nav className="App-nav">
            <SearchBar 
                searchQuery={this.state.searchQuery}
                handleSearch={this.handleSearch} 
                handleChange={this.handleChange}
            />
          </nav>
          <ul>
              {
                    this.state.pokedex.map(pokedex => 
                    <Link to={`pokedex/${pokedex.pokemon}`}> 
                        <PokeItem pokedex={pokedex} />
                    </Link>)
              }
          </ul>
        </div>
        )
    }
}

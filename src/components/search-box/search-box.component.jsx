import React, { Component } from 'react'

import './search-box.styles.css'

export class SearchBox extends Component {
    render() {
        return (
            <div>
                <input 
                    className={`search-box ${this.props.classNamne}`}
                    type='search' 
                    placeholder={this.props.placeholder}
                    onChange={this.props.handleChange}   
                />
            </div>
        )
    }
}

export default SearchBox

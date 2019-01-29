import React, {Component} from 'react'
import Search from './Search'
import Main from './Main'

class App extends Component {

    constructor (props) {
        super(props)
        this.state = {
            searchName: ''
        }
    }

    setSearchName = (searchName) => {
        this.setState({searchName})
    }

    render () {
        return (
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <Search setSearchName={this.setSearchName}/>
                </section>
                <Main searchName={this.state.searchName}/>
            </div>
        )
    }
}
export default App;
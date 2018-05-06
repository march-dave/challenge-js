import React, {Component} from 'react';
import axios from 'axios';
class App extends Component {

    state = {
        person: []
    }

    componentDidMount(){
        axios.get('http://localhost:8080/api').then( 
        
        (response) => {
            this.setState({person: response.data});
            console.log(response.data);
        });
    }

    render() {

        {/* Employee List {this.state.person.map( (c, i) => <li key={i}>id: {c.numid} {c.name} </li> ) }  */}
        return (
            <div className="container">
            <h3>Admin List</h3>
                <div className="table-responsive">
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Employee Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.state.person.map( (c, i) => <tr key={i}><td>{c.numid}</td><td>{c.name}</td><td><input type='checkbox' /></td></tr> ) }

                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}

export default App;
import React, {Component} from 'react';
import axios from 'axios';
class App extends Component {

    state = {
        person: []
    }

    componentDidMount(){
        const result = axios.get('http://localhost:8080/api');
        this.setState({person: result.data});
    }

    render() {
        return (
            <div>React JS Start Note</div>
        );
    }
}

export default App;
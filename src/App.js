import React, { Component } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import axios from 'axios';
class App extends Component {
  id = 2;
  state = {
    information: [ {id: '', name: '', phone: ''}],
    keyword: ''
  };

  handleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  handleCreate = data => {
    axios
      .post('http://localhost:8080/api', { name: data.name })
      .then(response => {
        console.log(response.data);
      });
    
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
  };

  handleRemove = id => {
    axios
      .delete(`http://localhost:8080/api/${id}`)
      .then( response => console.log(response) );
    
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  };

  handleUpdate = (id, data) => {
    axios
      .put(`http://localhost:8080/api/${id}`, { name: data.name })
      .then( response => console.log(response));

    const { information } = this.state;
    this.setState({
      information: information.map(
        info =>
          id === info.id
            ? { ...info, ...data } // to create new object
            : info // current object render
      )
    });
  };

  componentDidMount() {
    axios
      .get('http://localhost:8080/api')
      .then(response => {
      this.setState({ information: response.data });
    });
  }

  handlerSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:8080/api', { name: this.state.name })
      .then(response => {
        console.log(response.data);
      });
  }

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <EmployeeForm onCreate={this.handleCreate} />
        <p>
          <input
            placeholder="검색 할 이름을 입력하세요.."
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <hr />
        <EmployeeList
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import axios from 'axios';

class App extends Component {
  id = 2;
  state = {
    // information: [
    //   {
    //     id: 0,
    //     name: 'Dave',
    //     phone: '416-0000-0000'
    //   },
    //   {
    //     id: 1,
    //     name: 'Mike',
    //     phone: '415-0000-0001'
    //   }
    // ],
    information: [ {id: '', name: '', phone: ''}],
    keyword: ''
  };

  handleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };
  handleCreate = data => {

    // event.preventDefault();
    console.log('handleCreate : ' + data.name + ' ' + data.phone);

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

    axios.delete(`http://localhost:8080/api/${id}`).then();
    
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info =>
          id === info.id
            ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
            : info // 기존의 값을 그대로 렌더링
      )
    });
  };

  componentDidMount() {
    axios.get('http://localhost:8080/api').then(response => {
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
          {/* <input
            placeholder="검색 할 이름을 입력하세요.."
            onChange={this.handleChange}
            value={keyword}
          /> */}
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

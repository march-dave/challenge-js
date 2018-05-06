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



                   <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" id="#modal">new Car</button>

                    
                    <div className="modal fade" id="myModal"  role="dialog" aria-labelledby="myModalLabel">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            
                                <form className='submitform'>
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <h4 className="modal-title" id="myModalLabel">Info</h4>
                                </div>

                                <div className="modal-body" style={{padding: '40px 100px'}}>

                                <div id='id'></div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputName2">ID</label>
                                    <input type="text" className="form-control" id="ID" placeholder="ID" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputName2">Name</label>
                                    <input type="text" className="form-control" id="Name" placeholder="Name" />
                                </div>

                            </div>

                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" id="btnSave">Save</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal" id="btnUpdate">Update</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                            </form>



                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default App;
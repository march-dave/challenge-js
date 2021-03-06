import React, { Component } from 'react';
import EmployeeInfo from './EmployeeInfo';

class EmployeeList extends Component {
    static defaultProps = {
        list: [],
        onRemove: () => console.warn('onRemove define required'),
        onUpdate: () => console.warn('onUpdate define required'),
      }
    
      shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
      }
      
      render() {
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
          info => (
            <EmployeeInfo
              key={info.id}
              info={info}
              onRemove={onRemove}
              onUpdate={onUpdate}
            />)
        );
    
        return (
          <div>
            {list}    
          </div>
        );
      }
    }
    

export default EmployeeList;
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import AppFrame from "../components/AppFrame";
import CustomersActions from "../components/CustomersActions";

class HomeContainer extends Component {

  handleOnClick = () => {
    const {history} = this.props;
    history.push('/customers');
  };

  render() {
    return (
      <div>
        <AppFrame header='Home' body={
          <div>
            Esta es la pantalla inicial.
            <CustomersActions>
              <button onClick={this.handleOnClick}>Client List</button>
            </CustomersActions>
          </div>
        }/>
      </div>
    );
  }
}

export default withRouter(HomeContainer);
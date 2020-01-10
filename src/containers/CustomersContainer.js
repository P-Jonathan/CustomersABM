import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CustomersList from "../components/CustomersList";
import CustomersActions from "../components/CustomersActions";
import { fetchCustomers } from "../actions/fetchCustomers";
import { getCustomers } from "../selectors/customers";

class CustomersContainer extends Component {
  componentDidMount() {
    if (this.props.customers.length === 0)
      this.props.fetchCustomers();
  }

  handleAddNew = () => {
    const { history } = this.props;
    history.push('/customers/new');
  };

  handleGoHome = () => {
    const { history } = this.props;
    history.push('/');
  };

  renderBody = customers => (
    <div>
      <CustomersList customers={customers} urlPath='customers/' />
      <CustomersActions>
        <button onClick={this.handleAddNew}>Add new client</button>
        <button onClick={this.handleGoHome}>Go Home</button>
      </CustomersActions>
    </div>
  );

  render() {
    return (
      <div>
        <AppFrame
          header='Customers List'
          body={this.renderBody(this.props.customers)} />
      </div>
    );
  }
}

CustomersContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired
};

CustomersContainer.defaultProps = {
  customers: []
};

const mapStateToProps = state => ({
  customers: getCustomers(state)
});

export default withRouter(
  connect(mapStateToProps, { fetchCustomers })(CustomersContainer)
);
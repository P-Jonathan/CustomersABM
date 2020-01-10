import { Route, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCustomerByDNI } from './../selectors/customers';
import CustomerData from './../components/CustomerData';
import CustomerEdit from './../components/CustomerEdit';
import AppFrame from './../components/AppFrame';
import { fetchCustomers } from './../actions/fetchCustomers';
import { updateCustomer } from './../actions/updateCustomer';
import { SubmissionError } from 'redux-form';

class CustomerContainer extends Component {

    componentDidMount = () => {
        if (!this.props.customer)
            this.props.fetchCustomers();
    }

    handleSubmit = values => {
        const { id } = values;
        return this.props.updateCustomer(id, values)
            .catch(err => {
                throw new SubmissionError(err);
            });
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({ match }) => {
                const CustomerControl = match ? CustomerEdit : CustomerData;
                return (
                    <CustomerControl
                        {...this.props.customer}
                        onSubmit={this.handleSubmit}
                        onSubmitSuccess={this.handleOnSubmitSuccess}
                        onBack={this.handleBack}
                    />
                )
            }
        } />
    )

    render() {
        return (
            <div>
                <AppFrame
                    header='Client'
                    body={this.renderBody()}
                >
                </AppFrame>
            </div>
        );
    }
};

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDNI(state, props.dni)
});

const mapDistpatchToProps = {
    fetchCustomers,
    updateCustomer
};

const connectComponent = connect(mapStateToProps, mapDistpatchToProps)(CustomerContainer);

export default withRouter(connectComponent); 
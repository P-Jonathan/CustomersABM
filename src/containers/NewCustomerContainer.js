import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CustomerEdit from './../components/CustomerEdit';
import { insertCustomer } from './../actions/insertCustomer';
import { SubmissionError } from 'redux-form';

class NewCustomerContainer extends Component {

    handleSubmit = values => {
        return this.props.insertCustomer(values)
            .then(data => console.log("Se inserto con exito: ", data))
            .catch(err => { throw new SubmissionError(err) });
    }

    handleOnSubmitSuccess = values => {
        this.props.history.goBack();
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => (
        <CustomerEdit
            onSubmit={this.handleSubmit}
            onSubmitSuccess={this.handleOnSubmitSuccess}
            onBack={this.handleOnBack}
        />)

    render() {
        return (
            <div>
                <AppFrame
                    header={"Create client"}
                    body={this.renderBody()}
                ></AppFrame>
            </div>
        );
    }
}

export default withRouter(connect(null, { insertCustomer })(NewCustomerContainer));
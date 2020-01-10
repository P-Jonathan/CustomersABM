import React from 'react';
import PropTypes from 'prop-types';
import { Prompt } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import CustomerActions from './CustomersActions';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import {
  isNumber,
  //onlyGrow,
  parseNumber,
  validateKeys,
  capitalizeSubStr,
} from './../services';

const renderErrMsg = meta => {
  if (meta.touched && meta.error) {
    return (
      <div className="customer-edit-error">
        <p className="customer-edit-error-msg">{meta.error}</p>
      </div>
    )
  } else {
    return null;
  }
};

const myField = ({ input, meta, type, label, name }) => (
  <div className="customer-edit-field">
    <label htmlFor={name}>{label}</label>
    <input {...input} type={type ? type : "text"} />
    {
      renderErrMsg(meta)
    }
  </div>
);

const CustomerEdit = ({
  name, dni, age, handleSubmit, submitting, onBack, pristine, submitSucceeded
}) => {
  return (
    <div className="customer-edit">
      <h2 className="customer-edit-title">Edit Client</h2>
      <form onSubmit={handleSubmit}>
        <div className="customer-edit-fields">
          <Field
            name="name"
            component={myField}
            type="text"
            label="Nombre: "
            normalize={capitalizeSubStr}
          ></Field>
          <Field
            name="dni"
            component={myField}
            type="text"
            validate={isNumber}
            label="DNI: "
          ></Field>
          <Field
            name="age"
            component={myField}
            type="number"
            validate={isNumber}
            label="Age: "
            parse={parseNumber}
          //normalize={onlyGrow}
          ></Field>
        </div>
        <CustomerActions>
          <button type="submit" disabled={pristine || submitting}>Accept</button>
          <button type="button" onClick={onBack} disabled={submitting}>Cancel</button>
        </CustomerActions>
        <Prompt
          when={!pristine && !submitSucceeded}
          message="Se perderan los datos si continua."
        ></Prompt>
      </form>
    </div >
  );
};

CustomerEdit.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired
};

const CustomerEditForm = reduxForm({
  form: 'CustomerEdit',
  validate: values => validateKeys(values, ["name", "dni", "age"])
})(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);
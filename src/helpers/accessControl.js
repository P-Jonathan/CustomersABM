import React, { useState, useEffect, Component } from 'react'
import { connect } from 'react-redux';

export const accessControl = permissionsRequired => WrappedComponent => {
    const SecuredControl = class extends Component {
        render() {
            const { permissions } = this.props.user;

            const isAllow = permissionsRequired.every(p => permissions.indexOf(p) >= 0);

            if (!isAllow) {
                return (<div><i>No tiene permisos para acceder a este recurso.</i></div>);
            }

            return <WrappedComponent {...this.props} />;
        }
    };

    return connect(state => ({ user: state.user }), null)(SecuredControl);
};
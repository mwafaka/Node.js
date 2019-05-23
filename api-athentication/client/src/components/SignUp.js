import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

import * as actions from "../actions";
import CustomeInput from "./CustomeInput";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(formData) {
    console.log("onSubmit() got called");
    console.log("formData", formData);
    await this.props.signUp(formData);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset>
              <Field
                name="email"
                type="text"
                id="email"
                label="Enter your email"
                placeholder="me@gmail.com"
                component={CustomeInput}
              />
            </fieldset>
            <fieldset>
              <Field
                name="password"
                type="password"
                id="password"
                label="Enter your password"
                component={CustomeInput}
                placeholder="password"
              />
            </fieldset>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
        <div className="col">
          <div className="text-center">
            <div className="alert alert-danger">
              Or sign up with third-party service
            </div>
            <button className="btn btn-default">Facebook</button>
            <button className="btn btn-default">Google</button>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  connect(
    null,
    actions
  ),
  reduxForm({ form: "signup" })
)(SignUp);

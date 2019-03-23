import React, { Component } from "react";

export default class UserData extends Component {
  render() {
    let isFormFilled = this.props.userData.firstName && this.props.userData.lastName && this.props.userData.email && this.props.userData.streetAddress

    return (
      this.props.step===2?(
<div className="container">
        <form>
          <div class="form-group col-md-6">
            <label for="firstName">First Name</label>
            <input
              type="text"
              class="form-control"
              name="firstName"
              value={this.props.userData.firstName}
              onChange={this.props.handleInputChange}
              placeholder="John"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              class="form-control"
              name="lastName"
              value={this.props.userData.lastName}
              onChange={this.props.handleInputChange}
              placeholder="Dow"
            />
          </div>

          <div class="form-group col-md-6">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              name="email"
              value={this.props.userData.email}
              onChange={this.props.handleInputChange}
              placeholder="JohnDow@gmail.com"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="address">Address</label>
            <input
              type="text"
              class="form-control"
              name="streetAddress"
              value={this.props.userData.streetAddress}
              onChange={this.props.handleInputChange}
              placeholder="Holsteiner Ufer 10"
            />
          </div>
        </form>
        <button className="btn btn-success" onClick={isFormFilled&&this.props.nextStep}>Next</button>
        <button className="btn btn-success" onClick={this.props.prevStep}>Prev</button>

      </div>
      ):
      null
      
    );
  }
}

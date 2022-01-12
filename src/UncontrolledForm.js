import React from "react";
import "./UncontrolledForm.css";

class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.fnameInput = React.createRef();
    this.lnameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm = (e) => {
    console.log(this.fnameInput.value);
    alert(`
      firstname: ${this.fnameInput.value}
      lastname: ${this.lnameInput.value}
      email: ${this.emailInput.value}
      phone: ${this.phoneInput.value}
    `);
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div className="form-row">
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            ref={(input) => (this.fnameInput = input)}
          />
        </div>
        <div className="form-row">
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            ref={(input) => (this.lnameInput = input)}
          />
        </div>
        <div className="form-row">
          <label>Email</label>
          <input
            type="email"
            name="email"
            ref={(input) => (this.emailInput = input)}
          />
        </div>
        <div className="form-row">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            ref={(input) => (this.phoneInput = input)}
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    );
  }
}

export default UncontrolledForm;

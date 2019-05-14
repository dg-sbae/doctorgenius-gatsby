import React from "react"
import thinArrowRight from "../img/right-arrow.svg"

class FormResponse extends React.Component {
  render() {
    return (
      <div>
        <p>Form data received from server:</p>
        <ul>
          <li>
            {this.props.name !== "" ? this.props.name : "No Data Received"}
          </li>
          <li>
            {this.props.phone !== "" ? this.props.phone : "No Data Received"}
          </li>
          <li>
            {this.props.email !== "" ? this.props.email : "No Data Received"}
          </li>
          <li>
            {this.props.company !== ""
              ? this.props.company
              : "No Data Received"}
          </li>
        </ul>
      </div>
    )
  }
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      company: "",
      phone: "",
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(ev) {
    ev.preventDefault()

    const data = new FormData()
    data.append("name", this.name.value)
    data.append("phone", this.phone.value)
    data.append("email", this.email.value)
    data.append("company", this.company.value)

    //alert(this.name.value);

    fetch("http://localhost:4000/upload", {
      method: "POST",
      body: data,
    }).then(response => {
      response.json().then(body => {
        this.setState({
          name: body.name,
          phone: body.phone,
          company: body.company,
          email: body.email,
        })
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>FileUpload</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <input
              ref={ref => {
                this.name = ref
              }}
              type="text"
              placeholder="Enter Your Name"
            />
            <input
              ref={ref => {
                this.phone = ref
              }}
              type="tel"
              placeholder="Your Phone #"
            />
            <input
              ref={ref => {
                this.company = ref
              }}
              type="text"
              placeholder="Your Company"
            />
            <input
              ref={ref => {
                this.email = ref
              }}
              type="email"
              placeholder="Your Email"
            />
          </div>
          <br />
          <div>
            <button>Submit</button>
          </div>
          <hr />
          <FormResponse
            name={this.state.name}
            email={this.state.email}
            company={this.state.company}
            phone={this.state.phone}
          />
        </form>
      </div>
    )
  }
}

export default ContactForm

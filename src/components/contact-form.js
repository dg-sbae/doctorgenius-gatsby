import React from "react"
import thinArrowRight from "../img/right-arrow.svg"

class FormResponse extends React.Component {
  render() {
    return (
      <div className="form-response">
        <h3>Debug:</h3>
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

    /*data.append("name", this.name.value)
    data.append("phone", this.phone.value)
    data.append("email", this.email.value)
    data.append("company", this.company.value)*/
    let hardName = "jsonData in body, explicit url encode header"
    let hardPhone = "1234567890"
    let hardEmail = "jparmenter@doctorgenius.com"
    let hardCompany = "Hardcoded Company"
    /*
    console.log("Data: ", data)
    */
    console.log("Data: ", data)
    alert(
      "Debug -- Data sent to server:\n" +
        data +
        "\n\n" +
        "Readable format:" +
        "\nname: " +
        this.name.value +
        "\ncompany: " +
        this.company.value +
        "\nemail: " +
        this.email.value +
        "\nphone: " +
        this.phone.value
    )
    let stringData
    console.log(Object.fromEntries(data))
    console.log("Stringified: ", JSON.stringify(Object.fromEntries(data)))
    let jsonData = {
      name: hardName,
      phone: hardPhone, //this.phone.value,
      email: hardEmail, //this.email.value,
      company: hardCompany, //this.company.value,
    }
    console.log("json data: ", jsonData)
    fetch("http://nodetest.dgd3v.com/upload", {
      method: "POST",
      body: {
        name: "Jared Test",
        phone: "1234567890",
        company: "Company test",
        email: "test@test.com",
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        /*
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Type": "multipart/form-data",
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Type": "multipart/form-data",
        */
      },
    }).then(response => {
      console.log(response)
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
      <div className="form-wrapper">
        {/*<form onSubmit={this.handleFormSubmit}  enctype="multipart/form-data">*/}
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <input
              ref={ref => {
                this.name = ref
              }}
              type="text"
              placeholder="First & Last name"
            />
            <input
              ref={ref => {
                this.company = ref
              }}
              type="text"
              placeholder="Practice Name ( ex. Dental Spa)"
            />
            <input
              ref={ref => {
                this.email = ref
              }}
              type="email"
              placeholder="Email Address"
            />
            <input
              ref={ref => {
                this.phone = ref
              }}
              type="phone"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <button type="submit" class="button btn flat">
              Request Demo <img src={thinArrowRight} alt="Arrow Right" />
            </button>
          </div>
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

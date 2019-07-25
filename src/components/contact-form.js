import React from "react"
import { navigate } from "gatsby"
import checkSuccess from "../img/checkSuccess.png"
import xFail from "../img/xFail.png"
import $ from "jquery"

/* class FormResponse extends React.Component {
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
} */

class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      phone: "",
      email: "",
      message: "",
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  focusWithoutScrolling() {
    let x = window.scrollX,
      y = window.scrollY
    $("#input-name").focus()
    window.scrollTo(x, y)
  }

  handleFormSubmit(ev) {
    // trigger ajax loading spiner
    function ajaxLoaderDisplay() {
      $(".submit-contact").hide()
      $(".lds-ellipsis").show()
    }

    function submissionSuccess() {
      setTimeout(() => $(".lds-ellipsis").hide(), 3000)
      setTimeout(() => $(".positive-response").show(), 3000)
      setTimeout(() => clearFormFields(), 3000)
      setTimeout(() => navigate("/confirmation"), 4500)
    }

    /* function submissionFail() {
      setTimeout(() => $('.lds-ellipsis').hide(), 3000)
      setTimeout(() => $('.negative-response').show(), 3000)
    } */

    function clearFormFields() {
      $('input[type="text"]').val("")
      $('input[type="email"]').val("")
      $('input[type="tel"]').val("")
      $('input[type="textarea"]').val("")
    }

    ajaxLoaderDisplay()
    submissionSuccess()

    // Prevent the button from redirecting
    ev.preventDefault()

    // Set up a new Form object
    const data = new FormData()

    //Add the user-entered data
    data.append("FullName", this.name.value)
    data.append("PhoneNumber", this.phone.value)
    data.append("EmailAddress", this.email.value)
    data.append("Message", this.message.value)

    // Add required, internal fields for our Admin connection
    /* data.append("Status", "New")
    data.append("AccessToken", "a803bcbe-f32d-41b9-81a8-62a4cd6cd446")
    data.append("postToSalesForce", true)
    data.append("Description", "Form: Contact Form")
    data.append("LeadSource", "(New) Main Website Organic") */

    /* Debug:
    alert(
      "Debug -- Data sent to server:\n" +
        data +
        "\n\n" +
        "Readable format:" +
        "\nname: " +
        this.name.value +
        "\nphone: " +
        this.phone.value +
        "\nemail: " +
        this.email.value +
        "\nmessage: " +
        this.message.value
    )
    */

    //NodeTest server
    //fetch("http://nodetest.dgd3v.com/upload", {

    //Salesforce integration:
    //https://portal.doctorgenius.com/api/dglead
    //tracking key: a803bcbe-f32d-41b9-81a8-62a4cd6cd446

    //Email to the support team
    //inboundleads@doctorgenius.com, alexis@doctorgenius.com
    //[FullName] <noreply@doctorgenius.com>
    //Doctor Genius "Request Demo"
    //Name:    [FullName]
    //Phone:   [PhoneNumber]
    //Email:   [EmailAddress]
    //Message: [Message]

    //stringData holds the stringified, encoded form data
    let stringData = ""

    // Debug
    // console.log(Object.fromEntries(data))

    // Turn the form body into a string by iterating over the form
    // entries and encoding them as URI components
    Object.keys(Object.fromEntries(data)).forEach(
      e =>
        //console.log(`key=${e}  value=${Object.fromEntries(data)[e]}`)
        (stringData += `${e}=${encodeURIComponent(
          Object.fromEntries(data)[e]
        )}&`)
    )

    // Remove the trailing '&' since there's no additional parameter
    stringData = stringData.replace(/&$/, "")

    // Debug:
    // console.log("Stringified form data:", stringData)

    // Generate a request to our Admin portal (connects to SalesForce)
    /* fetch("https://portal.doctorgenius.com/api/dglead", {
      method: "POST",
      body: stringData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then(response => {
      console.log("dglead response:", response)
      response.json().then(body => {
        console.log("dgleads body:", body)
      })
    }) */

    // Generate a request to the email server
    fetch("https://nodetest.dgplex.com/upload", {
      method: "POST",
      body: stringData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then(response => {
      console.log("NodeTest response:", response)
      response.json().then(body => {
        this.setState({
          name: body.name,
          phone: body.phone,
          email: body.email,
          message: body.message,
        })
      })
    })

    // Additional testing endpoint:
    /*fetch("https://en95o1efs05as.x.pipedream.net", {
      method: "POST",
      body: stringData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then(response => {
      console.log("RequestBin response:", response)
      response.json().then(body => {
        console.log("requestbin body:", body)
      })
    }) */

    //Trigger form clearing upon completion of all API calls
    //clearFormFields();
  }

  render() {
    return (
      <div className="form-wrapper">
        <form
          onLoad={this.focusWithoutScrolling}
          onSubmit={this.handleFormSubmit}
          className="row"
        >
          <div className="form-group col-sm-11 col-md-9">
            <label htmlFor="input-name">First and Last name</label>
            <input
              ref={ref => {
                this.name = ref
              }}
              type="text"
              className="form-control"
              id="input-name"
              required
            />
          </div>
          <div className="form-group col-sm-11 col-md-9">
            <label htmlFor="input-phone">Phone Number</label>
            <input
              ref={ref => {
                this.phone = ref
              }}
              type="tel"
              className="form-control"
              id="input-phone"
              required
            />
          </div>
          <div className="form-group col-sm-11 col-md-9">
            <label htmlFor="input-email">Email</label>
            <input
              ref={ref => {
                this.email = ref
              }}
              type="email"
              className="form-control"
              id="input-email"
              required
            />
          </div>
          <div className="form-group col-sm-11 col-md-9">
            <label htmlFor="input-name">Message:</label>
            <input
              ref={ref => {
                this.message = ref
              }}
              type="textarea"
              className="form-control"
              id="input-message"
              required
            />
          </div>
          <div className="form-group col-sm-8 col-md-4">
            <button type="submit" className="button btn flat submit-contact">
              Contact Us
            </button>
            <div>
              <div style={{ display: "none" }} className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div
                className="positive-response"
                style={{ display: "none", margin: "10px" }}
              >
                <img src={checkSuccess} alt="Message Sent!" />
                <p className="muted-text">Message Sent!</p>
              </div>
              <div
                className="negative-response"
                style={{ display: "none", margin: "10px" }}
              >
                <img src={xFail} alt="Message Failed" />
                <p className="muted-text">Message Failed</p>
              </div>
            </div>
          </div>

          {/*
          <FormResponse
            name={this.state.name}
            email={this.state.email}
            company={this.state.company}
            phone={this.state.phone}
          />*/}
        </form>
      </div>
    )
  }
}

export default ContactForm

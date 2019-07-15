import React from "react"
import checkSuccess from "../img/checkSuccess.png"
import xFail from "../img/xFail.png"
import $ from "jquery"

class NewsLetterSignUpForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(ev) {
    // trigger ajax loading spiner
    function ajaxLoaderDisplay() {
      $(".request-demo").hide()
      $(".lds-ellipsis").show()
    }

    function submissionSuccess() {
      setTimeout(() => $(".lds-ellipsis").hide(), 3000)
      setTimeout(() => $(".positive-response").show(), 3000)
      setTimeout(() => clearFormFields(), 3000)
    }

    /* function submissionFail() {
      setTimeout(() => $('.lds-ellipsis').hide(), 3000)
      setTimeout(() => $('.negative-response').show(), 3000)
    } */

    function clearFormFields() {
      $('input[type="email"]').val("")
    }

    function hideEllipsis() {
      setTimeout(() => $(".positive-response").hide(), 10000)
    }

    ajaxLoaderDisplay()
    submissionSuccess()

    // Prevent the button from redirecting
    ev.preventDefault()

    // Set up a new Form object
    const newsletterdata = new FormData()

    //Add the user-entered data
    newsletterdata.append("EmailAddress", this.email.value)

    // show email in Object
    console.log(Object.fromEntries(newsletterdata))

    /* 
    Add required, internal fields for our Admin connection
    data.append("Status", "New")
    data.append("AccessToken", "a803bcbe-f32d-41b9-81a8-62a4cd6cd446")
    data.append("postToSalesForce", true)
    data.append("Description", "Form: Request Demo")
    data.append("LeadSource", "(New) Main Website Organic")
    */

    /* Debug:
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
    //Company: [CompanyName]

    /* Generate a request to our Admin portal (connects to SalesForce)
    fetch("https://portal.doctorgenius.com/api/dglead", {
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
    /*fetch("https://nodetest.dgplex.com/upload", {
      method: "POST",
      body: stringData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then(response => {
      console.log("NodeTest response:", response)
      response.json().then(body => {
        this.setState({
          email: body.email,
        })
      })
    }) */

    /* Additional testing endpoint:
    fetch("https://enh4puletkcmw.x.pipedream.net", {
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
    })
    */

    //Trigger form clearing upon completion of all API calls
    //clearFormFields();

    //After 10 Seconds remove the submission success/fail message
    hideEllipsis()
  }

  render() {
    return (
      <div className="newsletter row">
        <div className="col-sm-12">
          <div className="newsletter-signup">
            <h4 className="newsletter-heading">Newsletter</h4>
            <p>
              Subscribe to our email newsletter for useful tips and valuable
              resources.
            </p>
            <form className="newsletter-form" onSubmit={this.handleFormSubmit}>
              <input
                ref={ref => {
                  this.email = ref
                }}
                type="email"
                name="email"
                required
              />
              <button
                type="submit"
                className="button rounder"
                id="newsletter-signup"
              >
                Submit
              </button>
            </form>
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
              <img src={checkSuccess} alt="Subscribed!" />
              <p>Subscribed!</p>
            </div>
            <div
              className="negative-response"
              style={{ display: "none", margin: "10px" }}
            >
              <img src={xFail} alt="Submission Failed" />
              <p>Submission Failed</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsLetterSignUpForm

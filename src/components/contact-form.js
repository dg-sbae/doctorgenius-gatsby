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

    data.append("FullName", this.name.value)
    data.append("PhoneNumber", this.phone.value)
    data.append("EmailAddress", this.email.value)
    data.append("CompanyName", this.company.value)
    data.append("AccessToken", "a803bcbe-f32d-41b9-81a8-62a4cd6cd446")
    data.append("postToSalesForce", true)
    //let hardName = "jsonData in body, explicit url encode header"
    //let hardPhone = "1234567890"
    //let hardEmail = "jparmenter@doctorgenius.com"
    //let hardCompany = "Hardcoded Company"
    /*
    console.log("Data: ", data)
    */
    //console.log("Data: ", data)
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
    /*
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
    */

    //NodeTest server
    //fetch("http://nodetest.dgd3v.com/upload", {

    //RequestBin diagnostics:
    //fetch("http://requestbin.fullcontact.com/1jqpz7t1", {

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

    //[_remote_ip]
    //[_url]

    /*
    http://requestbin.fullcontact.com
    POST /1jqpz7t1  application/x-www-form-urlencoded
    354 bytes 6s ago
    From 216.70.114.53, 54.182.230.61
    FORM/POST PARAMETERS
    FullName: TESTING only
    referurl: https://doctorgenius.com/demo/
    postToSalesForce: true
    AccessToken: a803bcbe-f32d-41b9-81a8-62a4cd6cd446
    EmailAddress: jparmenter@doctorgenius.com

    user-email:
    LeadSource: Main Website Organic
    Status: New
    CompanyName: WP Form test #2
    Description: Form: "Request Demo B" | Form ID: 1093
    PhoneNumber: 1234567890

    HEADERS
    Cloudfront-Viewer-Country: US
    Total-Route-Time: 0
    Cloudfront-Is-Mobile-Viewer: false
    Host: requestbin.fullcontact.com
    Cloudfront-Forwarded-Proto: http
    Content-Type: application/x-www-form-urlencoded
    X-Request-Id: 4e9f56e4-e8a5-45c7-b8be-8ff0cc6a73d5
    Cloudfront-Is-Smarttv-Viewer: false
    Accept-Encoding: deflate, gzip
    Cloudfront-Is-Tablet-Viewer: false
    User-Agent: WordPress/4.9.10; https://doctorgenius.com
    Content-Length: 354
    Via: 1.1 565c5243db2ec940986d684b1d27280f.cloudfront.net (CloudFront), 1.1 vegur
    Connection: close
    Connect-Time: 1
    X-Amz-Cf-Id: Qp9CNYNyLmB2LNxwhSIZ1y9696QxyU5SwlpqZDI-JUljXmD4gyCS4A==
    Cloudfront-Is-Desktop-Viewer: true
    Referer: http://requestbin.fullcontact.com/1jqpz7t1

    RAW BODY
    FullName=TESTING+only&CompanyName=WP+Form+test+%232&EmailAddress=jparmenter%40doctorgenius.com&PhoneNumber=1234567890&user-email=&AccessToken=a803bcbe-f32d-41b9-81a8-62a4cd6cd446&Description=Form%3A+%22Request+Demo+B%22+%7C+Form+ID%3A+1093&Status=New&LeadSource=Main+Website+Organic&postToSalesForce=true&referurl=https%3A%2F%2Fdoctorgenius.com%2Fdemo%2F
    */

    let stringData = ""
    console.log(Object.fromEntries(data))
    Object.keys(Object.fromEntries(data)).forEach(
      e =>
        //console.log(`key=${e}  value=${Object.fromEntries(data)[e]}`)
        (stringData += `${e}=${encodeURIComponent(
          Object.fromEntries(data)[e]
        )}&`)
    )
    stringData = stringData.replace(/&$/, "")
    console.log("Stringified form data:", stringData)

    //fetch("http://requestbin.fullcontact.com/1jqpz7t1", {
    fetch("http://nodetest.dgd3v.com/upload", {
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
          company: body.company,
          email: body.email,
        })
      })
    })

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

    /*

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
    })
    */
    /*
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
        /
      },
    })*/
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

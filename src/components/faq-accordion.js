import React, { Component } from "react"
import styles from "./faq-accordion.module.scss"
import downChevron from "../img/down-chevron.svg"

export const FAQQuestion = props => <dt>{props.children}</dt>
export const FAQAnswer = props => <dd>{props.children}</dd>

export class FAQ extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }
  handeClick() {
    //this.setState({ open: true })
  }
  render() {
    return (
      <div className="faqWrapper">
        <div className={styles.question}>{this.props.question}</div>
        <a onclick={this.handleClick} className="accordion-target">
          <img src={downChevron} alt="Open" className="open" />
        </a>
        <div
          className={
            this.state.open ? styles.answer.open : styles.answer.closed
          }
        >
          {this.props.answer}
        </div>
      </div>
    )
  }
}

export default class FAQAccordion extends Component {
  constructor(props) {
    super(props)
    /*this.state.active = false*/
  }

  render() {
    return <div class="accordionWrapper">{this.props.children}</div>
  }
}

import React from "react"

import DefaultPageLayout from "../../components/DefaultPageLayout"
import Main from "../../components/main-content"
import Container from "../../components/Container"

import featuredImage from "../../img/study-single-featured-placeholder-2x1.png"
import eventsPlaceholder from "../../img/study-archive-events-placeholder-3x2.png"
import twitterIcon from "../../img/twitter.svg"
import facebookIcon from "../../img/facebook.svg"
import instagramIcon from "../../img/instagram.svg"
import youtubeIcon from "../../img/youtube.svg"
import leftChevron from "../../img/left-chevron.svg"
import rightChevron from "../../img/right-chevron.svg"
import { FaArrowRight } from "react-icons/fa"

import "../../styles/study-single-post.scss"
import "../../styles/global-styles.scss"

export default props => (
  <DefaultPageLayout>
    <div className="study-single-post">
      <Main>
        <Container>
          <div className="row padded short-bottom">
            <div class="col-sm-1" />
            <div class="col-sm-8">
              <div class="pagination">
                <a href="$#PreviousPostsPage">
                  <img src={leftChevron} alt="Navigate to Previous" />
                  &nbsp;Back
                </a>
                <a href="$#NextPostsPage">
                  Next &nbsp;
                  <img src={rightChevron} alt="Navigate to Next" />
                </a>
              </div>
            </div>
            <div class="col-sm-1" />
          </div>
          <div class="blog-header">
            <div className="row">
              <div class="col-sm-1" />
              <div class="col-sm-8">
                <div class="upper-row">
                  <h1 class="title">
                    Getting Your Patients Through The Door: A Recall System That
                    Actually Works!
                  </h1>
                  <div class="label primary">
                    <p>Practice Management</p>
                  </div>
                </div>
                <div class="lower-row">
                  <div class="byline">
                    <p class="date">March 12, 2019</p>
                    <p class="author">Nick Adams</p>
                  </div>
                  <div class="share-icons">
                    <p>Share:</p>
                    <a href="$#">
                      <img src={facebookIcon} alt="Facebook" />
                    </a>
                    <a href="$#">
                      <img src={twitterIcon} alt="Twitter" />
                    </a>
                    <a href="$#">
                      <img src={instagramIcon} alt="Instagram" />
                    </a>
                    <a href="$#">
                      <img src={youtubeIcon} alt="YouTube" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-1" />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-1" />
            <div class="col-sm-10">
              <div class="spacer solid" />
            </div>
            <div class="col-sm-1" />
          </div>
          <div class="row">
            <div class="col-sm-1" />
            <div class="col-sm-8">
              <div class="blog-content">
                <div class="intro">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi vel magna ligula. Donec erat sem, sagittis quis
                    fermentum vitae, euismod eu eros. Proin volutpat efficitur
                    lorem, vel fermentum ipsum vulputate at. Maecenas convallis
                    fringilla commodo. Phasellus sed semper lorem, sit amet
                    facilisis est. Sed nec finibus enim. Pellentesque egestas
                    urna eget lorem dictum, non venenatis orci facilisis. Nulla
                    viverra massa non sapien tempus, quis vulputate velit
                    lacinia. Morbi et velit ut ex
                  </p>
                </div>

                <div class="featured-image">
                  <img src={featuredImage} alt="Title" />
                </div>
                <div class="remainder">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi vel magna ligula. Donec erat sem, sagittis quis
                    fermentum vitae, euismod eu eros. Proin volutpat efficitur
                    lorem, vel fermentum ipsum vulputate at. Maecenas convallis
                    fringilla commodo. Phasellus sed semper lorem, sit amet
                    facilisis est. Sed nec finibus enim. Pellentesque egestas
                    urna eget lorem dictum, non venenatis orci facilisis. Nulla
                    viverra massa non sapien tempus, quis vulputate velit
                    lacinia. Morbi et velit ut ex
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi vel magna ligula. Donec erat sem, sagittis quis
                    fermentum vitae, euismod eu eros. Proin volutpat efficitur
                    lorem, vel fermentum ipsum vulputate at. Maecenas convallis
                    fringilla commodo. Phasellus sed semper lorem, sit amet
                    facilisis est. Sed nec finibus enim. Pellentesque egestas
                    urna eget lorem dictum, non venenatis orci facilisis. Nulla
                    viverra massa non sapien tempus, quis vulputate velit
                    lacinia. Morbi et velit ut ex
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi vel magna ligula. Donec erat sem, sagittis quis
                    fermentum vitae, euismod eu eros. Proin volutpat efficitur
                    lorem, vel fermentum ipsum vulputate at. Maecenas convallis
                    fringilla commodo. Phasellus sed semper lorem, sit amet
                    facilisis est. Sed nec finibus enim. Pellentesque egestas
                    urna eget lorem dictum, non venenatis orci facilisis. Nulla
                    viverra massa non sapien tempus, quis vulputate velit
                    lacinia. Morbi et velit ut ex
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi vel magna ligula. Donec erat sem, sagittis quis
                    fermentum vitae, euismod eu eros. Proin volutpat efficitur
                    lorem, vel fermentum ipsum vulputate at. Maecenas convallis
                    fringilla commodo. Phasellus sed semper lorem, sit amet
                    facilisis est. Sed nec finibus enim. Pellentesque egestas
                    urna eget lorem dictum, non venenatis orci facilisis. Nulla
                    viverra massa non sapien tempus, quis vulputate velit
                    lacinia. Morbi et velit ut ex
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-1" />
          </div>

          <div className="full-bleed-wrapper pad-md">
            <div className="full-bleed grey-background" />
            <div className="full-bleed-content-wrapper">
              <div class="events-section">
                <div class="row padded short-top">
                  <div class="col-sm-12">
                    <div class="title-holder">
                      <h4 class="blog-heading">Webinars & Events</h4>
                      <div class="more-events">
                        <a href="$#MoreEvents">
                          View More
                          <img src={rightChevron} alt="View More Events" />
                        </a>
                      </div>
                    </div>
                    <div class="spacer solid small" />
                  </div>
                  <div class="col-sm-3">
                    <div class="event-wrapper">
                      <img src={eventsPlaceholder} alt="Recent Event" />
                    </div>
                    <a href="$EventPermalink">
                      <p>
                        Nickerson Consulting: 3 Spring Cleaning Tips to Clean Up
                        Your Accounts Receivable
                      </p>
                    </a>
                  </div>
                  <div class="col-sm-3">
                    <div class="event-wrapper">
                      <img src={eventsPlaceholder} alt="Recent Event" />
                    </div>
                    <a href="$EventPermalink">
                      <p>
                        Nickerson Consulting: 3 Spring Cleaning Tips to Clean Up
                        Your Accounts Receivable
                      </p>
                    </a>
                  </div>

                  <div class="col-sm-3">
                    <div class="event-wrapper">
                      <img src={eventsPlaceholder} alt="Recent Event" />
                    </div>
                    <a href="$EventPermalink">
                      <p>
                        Nickerson Consulting: 3 Spring Cleaning Tips to Clean Up
                        Your Accounts Receivable
                      </p>
                    </a>
                  </div>
                  <div class="col-sm-3">
                    <div class="event-wrapper">
                      <img src={eventsPlaceholder} alt="Recent Event" />
                    </div>
                    <a href="$EventPermalink">
                      <p>
                        Nickerson Consulting: 3 Spring Cleaning Tips to Clean Up
                        Your Accounts Receivable
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row padded tall-top request-demo-footer">
            <div className="col-sm-1" />
            <div class="col-sm-5">
              <div class="content-block">
                <div class="inner-title">
                  <h2>
                    Start your <span class="font-weight-semibold">success</span>
                    with Doctor Genius today!
                  </h2>
                  <div class="accented-paragraph">
                    <p class="s-thin">
                      The Genius platform makes every part of your company
                      process more efficient. Our support team is very excited
                      to help you and get your company on the right path of
                      success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="center">
                <a href="/" className="button flat white-text">
                  Request Demo <FaArrowRight />
                </a>
              </div>
            </div>
            <div className="col-sm-1" />
          </div>
        </Container>
      </Main>
    </div>
  </DefaultPageLayout>
)

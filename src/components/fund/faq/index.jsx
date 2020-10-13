import React, { Component } from 'react'
import './index.less';

class FundFaq extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="fund-faq">
        <div className="fund-faq-all">
          <div className="title">
            Got questions about UMI Token and UMI-fund related questions? We have got answers. Check it out!
          </div>
          <div className="question-list">
            <a href="/" className="question wow fadeInDown" data-wow-delay="0ms">When will UMI Fund sale start?</a>
            <a href="/" className="question wow fadeInDown" data-wow-delay="100ms">what is the minimun token purchase amount?</a>
            <a href="/" className="question wow fadeInDown" data-wow-delay="200ms">How can I purchase UMI?</a>
            <a href="/" className="question wow fadeInDown" data-wow-delay="300ms">Can I purchase UMI using a credit card?</a>
            <a href="/" className="question wow fadeInDown" data-wow-delay="400ms">What is the UMI?</a>
            <a href="/" className="question wow fadeInDown" data-wow-delay="500ms">What wallet do I need  to store UMI coins?</a>
            <a href="/" className="question wow fadeInDown" data-wow-delay="600ms">When and how i will receive purchased UMI?</a>
            <a href="/" className="question wow fadeInDown" data-wow-delay="700ms">Why are only 500000 coins available?</a>
            <a href="/" className="question wow fadeInDown" data-wow-delay="800ms">what is the minimun token purchase amount?</a>
            <a href="/" className="question wow fadeInDown" data-wow-delay="900ms">What are the benefits of UMI Token?</a>
          </div>
        </div>
      </div>
    )
  }
};

export default FundFaq;

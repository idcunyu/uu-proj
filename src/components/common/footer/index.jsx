import React, { Component } from 'react'
import './index.less';

class CommonFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="common-footer-wrap">
        <div className="common-footer">
          <a href="/" className="logo-wrap">
            <img src="/assets/images/common/logo.png" alt="Unimine" className="logo-pic"/>
          </a>
          <div className="contact-list">
            <a href="/" className="contact-item"><img src="/assets/images/common/ic_facebook.png" alt="ic_facebook"/></a>
            <a href="/" className="contact-item"><img src="/assets/images/common/ic_tw.png" alt="ic_tw"/></a>
            <a href="/" className="contact-item"><img src="/assets/images/common/ic_telegram.png" alt="ic_telegram"/></a>
            <a href="/" className="contact-item"><img src="/assets/images/common/ic_github.png" alt="ic_github"/></a>
          </div>
          <div className="pc-nav">
            <a href="/" className="nav-item">About</a>
            <a href="/" className="nav-item">FUND</a>
            <a href="/" className="nav-item">UMI Token</a>
            <a href="/" className="nav-item">FAQ</a>
            <a href="/" className="nav-item">Community</a>
            <a href="/" className="nav-item">Terms of service</a>
          </div>

          <div className="copyright">
            <div className="cr">&copy; 2019 Unimine | All Rights Reserved.</div>
            <div className="cr">contact@unimine.org</div>
          </div>
        </div>
      </div>
    )
  }
};

export default CommonFooter;

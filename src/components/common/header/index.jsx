import React, { Component } from 'react'
import './index.less';

class CommonHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWapNav: false,
    }
  }
  componentDidMount() {
    
  }

  clickWapNavBtn() {
    this.setState((prev) => {
      if (this.state.showWapNav === prev.showWapNav) {
        return {
          showWapNav: !prev.showWapNav
        }
      }
    })
  }

  render() {
    const { showWapNav = false } = this.state;

    return (
      <div className={`common-header-wrap ${showWapNav ? 'active' : ''}`}>
        <div className="common-header">
          <a href="/" className="logo-wrap">
            <img src="/assets/images/common/logo.png" alt="Unimine" className="logo-pic"/>
          </a>
          <div className="pc-nav">
            <a href="/" className="nav-item">UMI TOKEN</a>
            <a href="/fund" className="nav-item">FUND</a>
            <a href="/about" className="nav-item">ABOUT</a>
            <a href="/faq" className="nav-item">FAQ</a>
          </div>
          <div className="wap-nav-btn" onClick={this.clickWapNavBtn.bind(this)}></div>
          {showWapNav && <div className="wap-nav">
            <a href="/" className="nav-item">UMI TOKEN</a>
            <a href="/fund" className="nav-item">FUND</a>
            <a href="/about" className="nav-item">ABOUT</a>
            <a href="/faq" className="nav-item">FAQ</a>
          </div>}
        </div>
      </div>
    )
  }
};

export default CommonHeader;

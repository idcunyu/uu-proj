import React, { Component } from 'react'
import './index.less';
import { Button } from 'antd';

class FundAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    
  }

  onGotoPage = () => {
    console.log("click btn");
  }

  render() {
    return (
      <div className="fund-about">
        <div className="fund-about-all">
          <div className="fund-about-content">
            <img src="/assets/images/fund/logo-s.png" alt="logo" className="about-pic wow fadeInLeft"/>
            <div className="title wow fadeInDown">ABOUT</div>
            <div className="d1 pc wow fadeInDown">
              What do we do?
            </div>
            <div className="d2 pc wow fadeInDown">
              Unimine is the best platform to get started mining cryptocurrency. It is the easiest platform for beginners to easily get into Blockchain.Unimine is the best platform to get started mining cryptocurrency. It is the easiest platform for beginners to easily get into Blockchain.
            </div>
            <div className="d2 wap wow fadeInDown">
              Unimine is the best platform to get started mining cryptocurrency. It is the easiest platform for beginners to easily get into Blockchain.Unimine is the best platform to get started mining cryptocurrency. It is the easiest platform for beginners to easily get into Blockchain.
            </div>

            <div className="smart-contract">
              <div className="title wow fadeInDown">
                Smart contract
              </div>
              <div className="token wow fadeInDown">
                0x1234567890123456789012345678901234567890
              </div>
            </div>
            
            <Button type="primary" className="about-btn wow fadeInDown" onClick={this.onGotoPage}>
              ABOUT UMI-TOKEN <img src="/assets/images/index/ic_btn_arrowright.png" alt="token"></img>
            </Button>
          </div>
        </div>
      </div>
    )
  }
};

export default FundAbout;

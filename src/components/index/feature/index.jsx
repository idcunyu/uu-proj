import React, { Component } from 'react'
import './index.less';

class IndexFeature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featureList: [
        {
          pic: '/assets/images/index/feature1.png',
          title: 'Pure-Decentralization',
          desc: 'All the modules of Unimine are runing on the ethereum network without any centralized services. All the programming are built the smart contract code.'
        }, {
          pic: '/assets/images/index/feature2.png',
          title: 'Non-KYC',
          desc: 'All users are anonymous without KYC.it can protect the privacy of all the participants.'
        }, {
          pic: '/assets/images/index/feature3.png',
          title: 'Open',
          desc: 'Unimine will open the mining protocol api which are the smart constract code of etherum.'
        }, {
          pic: '/assets/images/index/feature4.png',
          title: 'Instant',
          desc: 'Transcations and settlements are finished in every new block. It’s fast and instant.'
        }, {
          pic: '/assets/images/index/feature5.png',
          title: 'Transparency',
          desc: 'The smart contract code is open source. Anyone can see the code and the entire transaction history'
        }, {
          pic: '/assets/images/index/feature6.png',
          title: 'Governance',
          desc: 'UMI is the governance token of unimie, and all the governance functionality are decentralization.'
        }
      ]
    }
  }
  componentDidMount() {
    
  }

  render() {
    const { featureList = [] } = this.state;

    return (
      <div className="index-feature">
        <div className="index-feature-all">
          <div className="title wow fadeIn">FEATURES</div>
          <div className="d1 pc wow fadeInDown">
            Unimine is the best platform to<br/>
            get started mining<br/>
            cryptocurrency.
          </div>
          <div className="d1 wap wow fadeInDown">
            Unimine is the best platform to get started mining<br/>
            cryptocurrency.
          </div>
          <div className="d2 pc wow fadeInDown">
            Unimine is the best platform to get started mining cryptocurrency. It is the easiest platform for<br/>
            beginners to easily get into Blockchain.
          </div>
          <div className="d2 wap wow fadeInDown">
            Unimine is the best platform to get started mining<br/>
            cryptocurrency. It is the easiest platform for<br/>
            beginners to easily get into Blockchain.
          </div>
          <div className="feature-list">
            {featureList && featureList.length ? featureList.map((item, index) => {
              return (
                <div className="feature-item wow fadeInDown" data-wow-delay={`${(index + 1) * 100}ms`} key={'feature' + index}>
                  <img src={item.pic || ''} alt="feature" className="feature-pic"/>
                  <div className="feature-title">{item.title || ''}</div>
                  <div className="feature-desc" dangerouslySetInnerHTML={{__html: item.desc || ''}}></div>
                </div>
              )
            }) : ''}
          </div>
        </div>
      </div>
    )
  }
};

export default IndexFeature;

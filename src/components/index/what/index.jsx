import React, { Component } from 'react'
import './index.less';

class IndexBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="index-what">
        <div className="index-what-all">
          <div className="index-what-content">
            <img src="/assets/images/index/home-pic1.png" alt="slogan" className="what-pic wow fadeIn"/>
            <div className="title wow fadeIn">WHATS UNIMINE</div>
            <div className="d1 pc wow fadeInDown">
              A multi-dimensional decentralized blockchain-<br/>
              mining open platform.
            </div>
            <div className="d1 wap wow fadeInDown">
              A multi-dimensional<br/>
              decentralized blockchain-mining<br/>
              open platform.
            </div>
            <div className="d2 pc wow fadeIn" data-wow-delay="300ms">
              As we know, YFI provides the aggregation liquidity of De-Fi projects,<br/>
              SUSHI provides the liquidity of DEX. They are creative and successful.<br/>
              Decentralization will be the key point of blockchain, and decentralized<br/>
              mining becomes the most popular trend of blockchain technology and<br/>
              investment.<br/>
              Unimine integrates premium users and outstanding projects by providing<br/>
              diffrent kind of decentralized mining pool. And open the protocol to the<br/>
              developers and project founders.It will be a muli-dimensional platform.<br/>
            </div>
            <div className="d2 wap wow fadeIn" data-wow-delay="100ms">
              As we know, YFI provides the aggregation liquidity of De-Fi projects,
              SUSHI provides the liquidity of DEX. They are creative and successful.
              Decentralization will be the key point of blockchain, and decentralized
              mining becomes the most popular trend of blockchain technology and
              investment.<br/>
              Unimine integrates premium users and outstanding projects by providing
              diffrent kind of decentralized mining pool. And open the protocol to the
              developers and project founders.It will be a muli-dimensional platform.
            </div>
            <div className="a-item wow fadeInDown" data-wow-delay="200ms">A decentralized massive data flow platform.</div>
            <div className="a-item wow fadeInDown" data-wow-delay="300ms">A decentralized advertising platform.</div>
            <div className="a-item wow fadeInDown" data-wow-delay="400ms">A decentralized investment platform.</div>
          </div>
        </div>
      </div>
    )
  }
};

export default IndexBanner;

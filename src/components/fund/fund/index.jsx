import React, { Component } from 'react'
import './index.less';
import { Button, Input } from 'antd';
import moment from 'moment';

class FundCpt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      // 结束时间
      endTimeStr: '2020-10-30 24:00:00',
      endTime: moment('2020-10-30 24:00:00').valueOf(),
      // 显示
      days: '',
      hours: '',
      mins: '',
      secs: '',
      // 输入的eth
      inputEth: null,
    }
  }
  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
      this.setState({
        timer: null,
      })
    }
  }

  setTimer() {
    //定时更新当前时间
    this.setState({
      timer: setInterval(()=>{
        const now = moment().valueOf();
        const cut = this.state.endTime - now;
        this.setState({
          days: moment.duration(cut).days(),
          hours: moment.duration(cut).hours(),
          mins: moment.duration(cut).minutes(),
          secs: moment.duration(cut).seconds(),
        })
      }, 1000)
    })
  }

  onChangeEth = (e) => {
    const { value } = e.target;
    if (Number(value) >= 0) {
      console.log(value);
      this.setState({
        inputEth: value
      })
    }
  }

  onPurchase = () => {
    console.log("click purchase!!!");
  }

  render() {
    const { endTimeStr, days, hours, mins, secs, inputEth } = this.state;

    const formatNum = (num) => {
      return num < 10 ? `0${num}` : num;
    }

    return (
      <div className="fund-cpt">
        <div className="fund-cpt-all">
          <div className="title wow fadeIn">FUND</div>
          <div className="d1 wow fadeInDown">
            Unimine Cryptocurrency sale<br/>
            Do Not Miss It!
          </div>
          <div className="d2 pc wow fadeInDown">
            Limited supply: After fund ends, UMI obtained only through mining & exchanges.
          </div>
          <div className="d2 wap wow fadeInDown">
            Limited supply: After fund ends, UMI obtained only<br/> through mining & exchanges.
          </div>
          <div className="boxs">
            <div className="box left wow fadeInLeft">
              <div className="desc">
                UMI Token fund will be end at<br/>
                {endTimeStr}.
              </div>
              <div className="time-wrap">
                <div className="block">
                  <div className="num">{formatNum(days)}</div>
                  <div className="dw">DAYS</div>
                </div>
                <div className="block">
                  <div className="num">{formatNum(hours)}</div>
                  <div className="dw">HOURS</div>
                </div>
                <div className="block">
                  <div className="num">{formatNum(mins)}</div>
                  <div className="dw">MINS</div>
                </div>
                <div className="block">
                  <div className="num">{formatNum(secs)}</div>
                  <div className="dw">SECS</div>
                </div>
              </div>
            </div>
            <div className="box right wow fadeInRight">
              <div className="desc">
                500,000 UMI were supplied totally.
              </div>
              <div className="umi-wrap">
                <div className="block">
                  <div className="num">327500</div>
                  <div className="status">AMOUNT LEFT NOW</div>
                </div>
                <div className="block">
                  <div className="num">500000</div>
                  <div className="status">SUPPLY</div>
                </div>
              </div>
            </div>
          </div>

          <div className="purchase-wrap">
            <Input value={inputEth}  suffix="ETH" onChange={this.onChangeEth} className="wow fadeInUp" />
            <div className="show-purchase wow fadeInUp">
              100UMI per ETH, <span>{inputEth ? (Number(inputEth) * 100).toFixed(2) : 0}</span> UMI received.
            </div>
            <Button type="primary" className="purchase-btn wow fadeInUp" onClick={this.onPurchase}>PURCHASE NOW</Button>
          </div>
          
          <div className="more wow fadeInUp">
            <img src="/assets/images/index/promo.png" alt="promo" className="promo"/>
            <div className="content">
              <div className="ctt">
                Install Ethereum wallet to purchase UMI cryptocurrency.
              </div>
              <div className="ctt">
                It’s recommended to use:
                <a href="/">Metamask</a>
                (Chrome extension & Firefox extension),
                <a href="/">imToken</a>, 
                <a href="/">Trustwallet</a>, 
                <a href="/">Coinbase</a> etc. 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default FundCpt;

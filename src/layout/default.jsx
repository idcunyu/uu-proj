import React, { Component } from 'react'
import './default.less';
import CommonHeader from '@components/common/header/index';
import CommonFooter from '@components/common/footer/index';

class LayoutDefault extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="layout-default">
        <CommonHeader></CommonHeader>
        {this.props.children}
        <CommonFooter></CommonFooter>
      </div>
    )
  }
};

export default LayoutDefault;

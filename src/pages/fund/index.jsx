import React, { Component } from 'react'
import './index.less';
import Page from '@/layout/default';
import Fund from '@components/fund/fund/index';
import FundAbout from '@components/fund/about/index';
import FundFaq from '@components/fund/faq/index';

class PageFund extends Component {
  componentDidMount() {
    document.title = 'Unimine - Fund'
  }

  render() {
    return (
      <Page className="page-fund">
        <Fund></Fund>
        <FundAbout></FundAbout>
        <FundFaq></FundFaq>
      </Page>
    )
  }
};

export default PageFund;

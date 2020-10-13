import React, { Component } from 'react'
import './index.less';
import Page from '@/layout/default';
import IndexBanner from '@components/index/banner/index';
import IndexWhat from '@components/index/what/index';
import IndexFeature from '@components/index/feature/index';
import IndexRound from '@components/index/round/index';

class PageIndex extends Component {
  componentDidMount() {
    document.title = 'Unimine - Home'
  }

  render() {
    return (
      <Page className="page-index">
        <IndexBanner></IndexBanner>
        <IndexWhat></IndexWhat>
        <IndexFeature></IndexFeature>
        <IndexRound></IndexRound>
      </Page>
    )
  }
};

export default PageIndex;

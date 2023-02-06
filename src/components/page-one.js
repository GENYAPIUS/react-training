import React from "react";
import {Helmet} from "react-helmet";

export default class PageOne extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta property="og:image" content="https://png.pngtree.com/element_our/md/20180516/md_5afbe4e9e49f7.png"/>
          <meta property="og:description" content="this is free icon"/>
        </Helmet>
      </div>
    );
  }
}

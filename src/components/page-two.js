import React from "react";
import {Helmet} from "react-helmet";

export default class PageTwo extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta property="og:image" content="https://cdn-icons-png.flaticon.com/512/3884/3884851.png"/>
          <meta property="og:description" content="this is a man"/>
        </Helmet>
      </div>)
  }
}
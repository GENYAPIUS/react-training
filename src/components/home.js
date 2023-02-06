import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PageOne from "./page-one";
import PageTwo from "./page-two";

const router = createBrowserRouter([
  {
    path: "page-one",
    element: <PageOne/>
  },
  {
    path: "page-two",
    element: <PageTwo/>
  }
])

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div>I'm home</div>
        <RouterProvider router={router}/>
      </div>
    )
  }
}
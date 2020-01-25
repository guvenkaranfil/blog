import React, { Component } from "react";

import Link from "next/link";

import { privateRoute } from "../../components/PrivateRoute";
class Admin extends Component {
  render() {
    return (
      <div>
        <Link href="/post/create">Create a Post</Link>
        <Link href="/post">See All posts</Link>
      </div>
    );
  }
}

export default privateRoute(Admin);

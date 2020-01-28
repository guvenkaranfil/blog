import React, { Component } from "react";
import Head from "next/head";

export default class Comments extends Component {
  render() {
    const { postComments } = this.props;
    console.log("comments ==> ", postComments);
    if (Array.isArray(postComments)) {
      return (
        <div>
          <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
              integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
              crossorigin="anonymous"
            ></link>
          </Head>

          <body>
            <script
              src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
              integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
              crossorigin="anonymous"
            ></script>
            <script
              src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
              integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
              crossorigin="anonymous"
            ></script>
            <script
              src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
              integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
              crossorigin="anonymous"
            ></script>
          </body>

          <label>Comments</label>
          <div className="bg-white">
            {postComments.map((comment, index) => (
              <div className="bg-white shadow rounded py-4 my-3">
                <div className="px-3">
                  <label>
                    {comment.name} {comment.surname}
                  </label>
                </div>

                <div className="px-5">{comment.comment}</div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return <div>yorum yok</div>;
    }
  }
}

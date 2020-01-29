import React, { Component } from "react";

import Link from "next/link";

export default class PostCards extends Component {
  render() {
    const { tagName, posts } = this.props;
    console.log("posts ==> ", posts);
    if (Array.isArray(posts) && posts.length > 0) {
      return (
        <div className="">
          <div>
            <label className="tagTitle">{tagName}</label>
            <div className="row">
              {posts.map((post, index) => (
                <div
                  key={index}
                  className="col-md-3 border mx-3 mt-3 shadow py-3 mb-5 pb-5 bg-white rounded"
                >
                  <label className="postTitle">{post.title}</label>
                  <p className="postTrailerContent pl-1">
                    {post.trailerContent}
                  </p>
                  <Link href={`/${post._id}`}>
                    <button className="readMoreButton">Read More</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <style jsx>{`
            .tagTitle {
              font-size: 2rem;
              font-weight: 500;
            }

            .postTitle {
              font-size: 1.5rem;
              font-weight: 500;
            }
            .postTrailerContent {
              font-size: 1rem;
              font-weight: 300;
            }
            .readMoreButton {
              display: flex;
              position: absolute;
              bottom: 5px;
              right: 5px;
              outline: none;
              border: none;
              color: #338bd5;
            }
            .readMoreButton:hover {
              color: #fff;
              background-color: #333;
              border: 1px solid 2px 3px;
              border-radius: 4px;
            }
          `}</style>
        </div>
      );
    } else {
      return <div>post doesn't found</div>;
    }
  }
}

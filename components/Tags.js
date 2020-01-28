import React, { Component } from "react";
import Link from "next/link";

export default class Tags extends Component {
  render() {
    const { tags } = this.props;
    console.log("tags component");
    return (
      <div className="d-flex row px-4">
        {tags.map((tag, index) => (
          <div key={index} className="ml-2 py-1">
            <Link href={`/tags/${tag.tagName}`}>
              <a className="tagLink">#{tag.tagName}</a>
            </Link>
          </div>
        ))}
        <style jsx>{`
          .tagLink {
          }
          .tagLink:hover {
            cursor: pointer;
            font-weight: bold;
          }
        `}</style>
      </div>
    );
  }
}

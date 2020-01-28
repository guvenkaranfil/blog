import React, { Component } from "react";
import Link from "next/link";

export default class Tags extends Component {
  render() {
    const { tags } = this.props;
    console.log("tags component");
    return (
      <div className="d-flex row px-4">
        {tags.map((tag, index) => (
          <div key={index} className=" border ml-2">
            <Link>
              <a>#{tag.tagName}</a>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

import React, { Component } from "react";

import Link from "next/link";

import { privateRoute } from "../../../components/PrivateRoute";
import { createPost } from "../../../src/services/posts";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      trailerContent: "",
      tags: []
    };
  }

  handleChange = e => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  onSubmit = () => {
    console.log("this.stat ==> ", this.state);
    const { title, content, trailerContent, tags } = this.state;
    createPost(title, content, trailerContent, tags)
      .then(response => {
        console.log("response =?> ", response);
        alert("post create");
      })
      .catch(err => {
        console.log("err ==> ", err);
        alert("err ==> ", err);
      });
  };

  render() {
    return (
      <div>
        {/* Contennt */}
        <div className="box">
          <label>Title:</label>
          <textarea
            onChange={this.handleChange}
            name="title"
            rows="1"
            cols="33"
          />
        </div>

        {/* Contennt */}
        <div className="box">
          <label>Content:</label>
          <textarea
            onChange={this.handleChange}
            name="content"
            rows="5"
            cols="100"
          />
        </div>

        {/* trailerContent */}
        <div className="box">
          <label>trailerContent:</label>
          <textarea
            onChange={this.handleChange}
            name="trailerContent"
            rows="2"
            cols="50"
          />
        </div>

        <button onClick={this.onSubmit} className="btn">
          Share!
        </button>

        <style jsx>{`
          label,
          textarea {
            font-size: 0.8rem;
            letter-spacing: 1px;
          }
          textarea {
            padding: 10px;
            line-height: 1.5;
            border-radius: 5px;
            border: 1px solid #ccc;
            box-shadow: 1px 1px 1px #999;
          }

          label {
            display: block;
            margin-bottom: 10px;
          }
          .box {
            margin-top: 20px;
          }
          .btn {
            width: 100px;
            height: 30px;
            border-radius: 15px;
            margin: 50px;
          }
        `}</style>
      </div>
    );
  }
}

export default privateRoute(Create);

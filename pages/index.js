import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import { read } from "../src/services/posts";
import PostCards from "../components/PostCards";
import Tags from "../components/Tags";

const Home = ({ posts }) => (
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

    {/* <div className="hero">
      <h1 className="hero-title">Selman Kahya</h1>
      <div className="hero-social-links">
        <Link href="https://medium.com/@selmankahya">
          <a className="social-link">Medium</a>
        </Link>
        <Link href="https://www.twitter.com/selmankahyax">
          <a className="social-link">Twitter</a>
        </Link>
        <Link href="https://www.linkedin.com/in/selmankahya">
          <a className="social-link">LinkedIn</a>
        </Link>
        <Link href="https://www.instagram.com/selmankahyax/?hl=en">
          <a className="social-link">Instagram</a>
        </Link>
      </div>
    </div> */}

    <div className="row">
      <div className="col-md-3 shadow py-3 mb-5 pb-5 bg-white rounded">
        {/* Tags */}
        <div>
          <label className="tagTitle">TAGS</label>
          <Tags
            tags={[
              { tagName: "react" },
              { tagName: "react-native" },
              { tagName: "Flutter" },
              { tagName: "Nodejs" },
              { tagName: "react" },
              { tagName: "react-native" },
              { tagName: "Flutter" },
              { tagName: "Nodejs" },
              { tagName: "mobile development" }
            ]}
          />
        </div>
      </div>
      <div className="col-md-9">
        <PostCards tagName="React" posts={posts} />
      </div>
    </div>

    {/* {posts.map((post, index) => (
      <div key={index} className="blog">
        <h2 className="blog-title">
          <Link href={post._id}>
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2>
        <div className="blog-text">
          <ReactMarkdown source={post.trailerContent} />
        </div>
        <div className="blog-date">{post.createdAt}</div>
      </div>
    ))} */}

    <style jsx>{`
      .tagTitle {
        font-size: 2rem;
        font-weight: 700;
        padding: 1rem;
      }
      .hero {
        text-align: center;
        margin: 96px 0;
      }

      .social-link {
        margin-right: 8px;
      }

      .hero-title {
        font-size: 48px;
      }

      .blog-date {
        text-align: right;
        color: #cccccc;
        margin: 12px 0 48px 0;
      }

      a {
        color: #35459e;
        text-decoration: none;
      }
    `}</style>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  return read().then(response => {
    console.log(response);
    return { posts: response };
  });
};

export default Home;

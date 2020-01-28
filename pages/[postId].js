import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getPost, postComment } from "../src/services/posts";
import Comments from "../components/Comments";

const BlogPost = ({ post, props }) => {
  return (
    <div className="container">
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

      <div className="hero">
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
      </div>

      <div className="blog">
        <h2 className="blog-title">
          <Link href="/test">
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2>
        <div className="blog-text">
          <ReactMarkdown source={post.content} />
        </div>

        <Comments postComments={post.comments} />

        <div className="">
          <label>Yorum Yap</label>
          <form className="">
            <div className="form-group">
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Surname" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="E-Mail" />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                placeholder="Comment"
                style={{ width: 300, height: 75 }}
              />
            </div>
          </form>
          <div>
            <button
              onClick={() =>
                postComment(
                  post._id,
                  "aynur",
                  "karanfil",
                  "this is comment"
                ).then(response => {
                  alert("yorum kayıt edilmiştir.");
                })
              }
            >
              Submit
            </button>
          </div>
        </div>
        <div className="blog-date">{post.createdAt}</div>
      </div>
      <style jsx>{`
        .container {
          max-width: 650px;
          width: 100%;
          margin: 0 auto;
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
};

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await getPost(query.postId);
  return { post: res };
};

export default BlogPost;

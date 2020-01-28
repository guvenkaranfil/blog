import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getTagPosts } from "../../src/services/tag";
import PostCards from "../../components/PostCards";
import Tags from "../../components/Tags";

const BlogPost = ({ post, props }) => {
  console.log("props ==> ", props);
  return (
    <div className="">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
                { tagName: "Nodejs" }
              ]}
            />
          </div>
        </div>
        <div className="col-md-9">
          <PostCards tagName="React" posts={post} />
        </div>
      </div>
    </div>
  );
};

BlogPost.getInitialProps = async ({ req, query }) => {
  console.log("query ==> ", query.tagName);
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await getTagPosts(query.tagName);
  console.log("res ==> ", res);
  return { post: res };
};

export default BlogPost;

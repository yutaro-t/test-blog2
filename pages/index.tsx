import Head from "next/head"
import React from 'react'
import { BlogList, BlogListItem } from "../components/BlogList"
import { Blog } from "../components/type";
import { getNewestBlogs } from "../components/utils";
import { GetStaticProps } from "next";
import { Contents } from "../components/Contents";

export interface Props {
  newBlogs?: Blog[],
}

export const getStaticProps: GetStaticProps<Props> = async () => {

  const others = await getNewestBlogs(10);
  
  return {
    props: {
      newBlogs: others
    }
  }
}

export const Home: React.FC<Props> = ({ newBlogs }) =>  {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Contents>
        <article>
          <BlogList title="New Blogs">
            {newBlogs.map(blog => <BlogListItem blog={blog} key={blog.title} />)}
          </BlogList>
        </article>
      </Contents>
    </>
  )
}

export default Home
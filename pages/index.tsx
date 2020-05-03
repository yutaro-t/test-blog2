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
        <title>ブログタイトル - TOP</title>
        <meta name="description" content="ブログタイトルのTOPページです" />
        <meta property="og:url" content="ページのURL" />
        <meta property="og:title" content="ブログタイトル - TOP" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="ブログタイトルのTOPページです" />
        <meta property="og:image" content="画像のURL" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:site_name" content="ブログタイトル" />
        <meta property="og:locale" content="ja_JP" />
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
import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import fs from 'fs';
import path from 'path';
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

export interface Props {
  blog?: {
    html: string,
    title: string,
    category: string,
    date: string,
    description: string,
    thumbnail: string
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {

  const { default: markdown } = await import(`../../content/blogs/${params.slug}.md`).catch(() => null);
  return {
    props: markdown
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: fs.readdirSync(path.resolve(serverRuntimeConfig.PROJECT_ROOT, 'content/blogs'))
      .map(filename => '/blogs/' + filename.split('.').slice(0, -1).join('.')),
    fallback: true
  }
}

export const Blog: React.FC<Props> = ({ blog }) =>  {
  if (!blog) return <div>not found</div>;
  return (
    <>
      <article>
        <h1>{blog.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blog.html }} />
      </article>
    </>
    );
  }
  
  export default Blog;
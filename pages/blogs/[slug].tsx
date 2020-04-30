import React from 'react';
import { GetStaticProps } from 'next';

export interface Props {
  blog?: {
    content: () => React.ReactElement,
    title: string,
    category: string,
    date: string,
    tags: string[],
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {

  const {default: content, ...others} = await import(`../../content/blogs/${params.slug}`);

  return {
    props: {
      content,
      ...others
    }
  }
}

export const Blog: React.FC<Props> = ({ blog }) =>  {
  if (!blog) return <div>not found</div>;
  const Content = blog.content;
  return (
    <>
      <article>
        <h1>{blog.title}</h1>
        <Content />
      </article>
    </>
    );
  }
  
  export default Blog;
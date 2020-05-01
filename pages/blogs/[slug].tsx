import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import fs from 'fs';
import path from 'path';
import markdownStyles from './markdown.module.scss';
import style from './style.module.scss';
import { Contents } from '../../components/Contents';
import { Header } from '../../components/Header';
import { SideContainer } from '../../components/SideContainer';

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

  const file = await import(`../../content/blogs/${params.slug}.md`).catch(() => null);
  if(!file) return { props: { blog: null} };

  return {
    props: {
      blog: {
        html: file.html,
        ...file.attributes
      }
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: fs.readdirSync(path.resolve(process.cwd(), 'content/blogs'))
      .map(filename => '/blogs/' + filename.split('.').slice(0, -1).join('.')),
    fallback: true
  }
}

export const Blog: React.FC<Props> = ({ blog }) =>  {
  if (!blog) return <div>not found</div>;
  return (
    <>
      <article>
        <Header title={blog.title} date={blog.date} category={blog.category} />
        <Contents>
          <div className={style.container}>
            <div className={markdownStyles.markdown} dangerouslySetInnerHTML={{ __html: blog.html }} />
            <div className={style.side}>
              <SideContainer label="Popular">
                foobar
              </SideContainer>
              <SideContainer label="New Blogs">
                foobar
              </SideContainer>
            </div>
          </div>
        </Contents>
      </article>
    </>
    );
  }
  
  export default Blog;
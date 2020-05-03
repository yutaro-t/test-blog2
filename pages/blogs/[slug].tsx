import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import fs from 'fs';
import path from 'path';
import markdownStyles from './markdown.module.scss';
import style from './style.module.scss';
import { Contents } from '../../components/Contents';
import { Header } from '../../components/Header';
import { SideContainer } from '../../components/SideContainer';
import { Blog as BlogType } from '../../components/type';
import { BlogChip } from '../../components/BlogChip';
import { getNewestBlogs } from '../../components/utils';

export interface Props {
  blog?: BlogType,
  newBlogs?: BlogType[],
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {

  const file = await import(`../../content/blogs/${params.slug}.md`).catch(() => null);
  

  const others = await getNewestBlogs(5);
  if(!file) return { props: { blog: undefined, newBlogs: undefined } };
  
  return {
    props: {
      blog: {
        html: file.html,
        ...file.attributes
      },
      newBlogs: others
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

export const Blog: React.FC<Props> = ({ blog, newBlogs }) =>  {
  if (!blog) return <div>not found</div>;
  return (
    <>
      <article>
        <Header title={blog.title} date={blog.date} category={blog.category} />
        <Contents>
          <div className={style.container}>
            <div className={markdownStyles.markdown} dangerouslySetInnerHTML={{ __html: blog.html }} />
            <div className={style.side}>
              <SideContainer label="New Blogs">
                {newBlogs.map(blog => <BlogChip key={blog.title} blog={blog}/>)}
              </SideContainer>
            </div>
          </div>
        </Contents>
      </article>
    </>
    );
  }
  
  export default Blog;
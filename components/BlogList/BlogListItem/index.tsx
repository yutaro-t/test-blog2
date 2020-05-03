import React from 'react';
import { Blog } from '../../type';
import style from './style.module.scss';
import { parseDate } from '../../runtimeUtils';
import Link from 'next/link';
import { DateChip } from '../../DateChip';
import { CategoryChip } from '../../CategoryChip';


export interface Props {
  blog: Blog;
}

export const BlogListItem: React.FC<Props> = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.title}`}>
      <a className={style.container}>
        <div className={style.imgContainer} >
          <img className={style.img} src={blog.thumbnail} alt={`thumbnail of ${blog.title}`} />
        </div>
        <div className={style.title}>{blog.title}</div>
        <div className={style.dateAndCategory}>
          <DateChip date={blog.date} />
          <CategoryChip category={blog.category} />
        </div>
        <div className={style.description}>{blog.description}</div>
      </a>
    </Link>
  )
}
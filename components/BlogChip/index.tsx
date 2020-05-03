import React from 'react';
import style from './style.module.scss';
import { Blog } from '../type';
import Link from 'next/link';
import { parseDate } from '../runtimeUtils';

export interface Props {
  blog: Blog
}

export const BlogChip: React.FC<Props> = ({blog}) => {
  return (
    <Link href={blog.title}>
      <a className={style.container}>
        <img className={style.img} src={blog.thumbnail} alt={'Thumbnail for ' + blog.title} />
        <div className={style.inner}>
          <div className={style.content}>
            <div className={style.title}>{blog.title}</div>
            <div className={style.category}>{parseDate(blog.date)}</div>
            <div className={style.category}>{blog.category}</div>
          </div>
        </div>
      </a>
    </Link>
  )
}
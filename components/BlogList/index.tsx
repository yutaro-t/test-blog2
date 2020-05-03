import React from 'react';
import style from './style.module.scss';

export interface Props {
  title: string
}

export const BlogList: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <h2 className={style.title}>{title}</h2>
      {children}
    </>
  )
}

export { BlogListItem } from './BlogListItem';
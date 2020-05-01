import React from 'react';
import style from './style.module.scss';
import { Contents } from '../Contents';

export interface Props {
  title: string;
  category: string;
  date: string;
}

export const Header: React.FC<Props> = ({
  title, category, date
}) => (
  <div className={style.container}>
    <Contents>
      <div className={style.date}>{date.slice(0, 10)}</div>
      <h1 className={style.h1}>{title}</h1>
      <div className={style.category}>{category || 'ssss'}</div>
    </Contents>
  </div>
)
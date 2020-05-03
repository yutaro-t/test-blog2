import React from 'react';
import style from './style.module.scss';
import { Contents } from '../Contents';
import { parseDate } from '../runtimeUtils';
import { DateChip } from '../DateChip';
import { CategoryChip } from '../CategoryChip';

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
      <DateChip date={date} />
      <h1 className={style.h1}>{title}</h1>
      <CategoryChip category={category} />
    </Contents>
  </div>
)
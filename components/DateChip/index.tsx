import React from 'react';
import style from './style.module.scss';
import { parseDate } from '../runtimeUtils';


export const DateChip: React.FC<{date: string}> = ({ date }) => (
  <div className={style.date}>{parseDate(date)}</div>
)
import React from 'react';
import style from './style.module.scss';

export const CategoryChip: React.FC<{category: string}> = ({ category }) => (
  <div className={style.category}>{category}</div>
)
import React from 'react';
import style from './style.module.scss';

export interface Props {
  label: string
}

export const SideContainer: React.FC<Props> = ({ label, children }) => {
  return (
    <div className={style.container}>
      <div className={style.title}>{label}</div>
      <div className={style.child}>{children}</div>
    </div>
  )
}
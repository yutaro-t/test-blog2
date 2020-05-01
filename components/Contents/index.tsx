import React from 'react';
import style from './style.module.scss';

export const Contents: React.FC = ({children}) => {
  return (
    <div className={style.contents}>
      <div className={style.inner}>
        {children}
      </div>
    </div>
  );
}
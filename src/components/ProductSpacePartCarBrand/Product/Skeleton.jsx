import React from 'react';
import s from './Product.module.css';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={260}
    height={240}
    viewBox='0 0 260 240'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='29' y='4' rx='0' ry='0' width='153' height='125' />
    <rect x='30' y='141' rx='0' ry='0' width='153' height='23' />
    <rect x='54' y='212' rx='0' ry='0' width='105' height='22' />
    <rect x='30' y='178' rx='0' ry='0' width='153' height='23' />
  </ContentLoader>
);

export default Skeleton;

import { HeadingBase } from './heading-base';
const { registerBlockType } = wp.blocks;

registerBlockType(
  'cpc/heading-one',
  HeadingBase({
    title: 'Heading One',
    tag: 'h1',
    textSize: 'text-4xl md:text-5xl',
  })
);

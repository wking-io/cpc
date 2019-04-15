import { HeadingBase } from './heading-base';
const { registerBlockType } = wp.blocks;

registerBlockType(
  'cpc/heading-six',
  HeadingBase({
    title: 'Heading Six',
    tag: 'h6',
    textSize: 'text-sm',
  })
);

import { HeadingBase } from './heading-base';
const { registerBlockType } = wp.blocks;

registerBlockType(
  'cpc/heading-two',
  HeadingBase({
    title: 'Heading Two',
    tag: 'h2',
    textSize: 'text-3xl',
  })
);

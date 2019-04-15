import { HeadingBase } from './heading-base';
const { registerBlockType } = wp.blocks;

registerBlockType(
  'cpc/heading-four',
  HeadingBase({
    title: 'Heading Four',
    tag: 'h4',
    textSize: 'text-xl',
  })
);

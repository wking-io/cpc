import { HeadingBase } from './heading-base';
const { registerBlockType } = wp.blocks;

registerBlockType(
  'cpc/heading-three',
  HeadingBase({
    title: 'Heading Three',
    tag: 'h3',
    textSize: 'text-2xl md:text-3xl',
  })
);

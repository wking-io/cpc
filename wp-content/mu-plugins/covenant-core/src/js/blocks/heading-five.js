import { HeadingBase } from './heading-base';
const { registerBlockType } = wp.blocks;

registerBlockType(
  'cpc/heading-five',
  HeadingBase({
    title: 'Heading Five',
    tag: 'h5',
    textSize: 'text-base',
  })
);

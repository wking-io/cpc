import { ALLOWED_BLOCKS } from './blocks/utils';

import '../scss/block-editors.scss';
import '../scss/block-styles.scss';
import './blocks/page-header';
import './blocks/heading-one';
import './blocks/heading-two';
import './blocks/heading-three';
import './blocks/heading-four';
import './blocks/heading-five';
import './blocks/heading-six';
import './blocks/quote';
import './blocks/wrapper';
import './blocks/split-panel';
import './blocks/drawer';
import './blocks/drawer-list';
import './blocks/link-button';
import './blocks/upcoming-events';

wp.blocks.getBlockTypes().forEach(blockType => {
  if (ALLOWED_BLOCKS.indexOf(blockType.name) === -1) {
    wp.blocks.unregisterBlockType(blockType.name);
  }
});

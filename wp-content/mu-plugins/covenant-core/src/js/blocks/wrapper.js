import { CovenantColorPalette, colors } from './inputs/colorPalette';
import wrapperIcon from './icons/wrapper';
import { ALLOWED_BLOCKS } from './utils';

const { __ } = wp.i18n;
const { InspectorControls, InnerBlocks } = wp.editor;
const { registerBlockType } = wp.blocks;

registerBlockType('cpc/wrapper', {
  title: __('Wrapper'),
  icon: wrapperIcon,
  category: 'common',
  keywords: [__('test')],
  supports: {
    align: ['full', 'wide'],
    className: false,
  },
  attributes: {
    bgColor: {
      type: 'string',
      default: 'black',
    },
    bgValue: {
      type: 'string',
      default: colors.black,
    },
    align: {
      type: 'string',
      default: 'full',
    },
  },

  getEditWrapperProps({ align }) {
    if (['wide', 'full'].indexOf(align) === -1) {
      return { 'data-align': 'full' };
    }
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  edit: function({ attributes, setAttributes }) {
    return (
      <div className={`cpc-wrapper bg-${attributes.bgColor}`}>
        <InspectorControls>
          <CovenantColorPalette
            color={attributes.bgValue || colors.black}
            onChange={([bgColor, bgValue]) =>
              setAttributes({ bgColor, bgValue })
            }
          />
        </InspectorControls>
        <InnerBlocks
          allowedBlocks={ALLOWED_BLOCKS}
          renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
        />
      </div>
    );
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  save: function({ attributes }) {
    return (
      <div className={`cpc-wrapper bg-${attributes.bgColor}`}>
        <InnerBlocks.Content />
      </div>
    );
  },
});

import { CovenantColorPalette, colors } from './inputs/colorPicker';

const { __ } = wp.i18n;
const { InspectorControls, InnerBlocks } = wp.editor;
const { registerBlockType } = wp.blocks;

registerBlockType('cpc/wrapper', {
  title: __('Section'),
  icon: 'editor-quote',
  category: 'common',
  keywords: [__('test')],
  supports: {
    align: ['full', 'wide'],
    className: false,
  },
  attributes: {
    backgroundColor: {
      type: 'string',
      default: 'black',
    },
    colorValue: {
      type: 'string',
      default: 'black',
    },
    align: {
      type: 'string',
      default: 'full',
    },
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
      <div className={`bg-${attributes.textColor}`}>
        <InspectorControls>
          <CovenantColorPalette
            color={attributes.colorValue || colors.black}
            onChange={([textColor, colorValue]) =>
              setAttributes({ textColor, colorValue })
            }
          />
        </InspectorControls>
        <InnerBlocks />
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
      <div className={`bg-${attributes.textColor}`}>
        <InnerBlocks.Content />
      </div>
    );
  },
});

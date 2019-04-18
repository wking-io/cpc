import { CovenantColorPalette, colors } from './inputs/colorPalette';
import wrapperIcon from './icons/wrapper';
import { ALLOWED_BLOCKS } from './utils';

const { __ } = wp.i18n;
const { InspectorControls, InnerBlocks, MediaUpload } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Button, ToggleControl } = wp.components;

registerBlockType('cpc/split-panel', {
  title: __('Split Panel'),
  icon: wrapperIcon,
  category: 'common',
  keywords: [__('test')],
  supports: {
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
    imageAlt: {
      type: 'string',
    },
    imageUrl: {
      type: 'string',
    },
    flip: {
      type: 'boolean',
    },
  },

  getEditWrapperProps() {
    return { 'data-align': 'full' };
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
    const getImageButton = openEvent => {
      const buttonText =
        attributes.imageUrl && attributes.imageUrl.length > 0
          ? 'Replace Image'
          : 'Pick Image';
      return (
        <div className="flex flex-col pt-6 pb-3">
          <label className="mb-1" htmlFor="bg-image">
            Panel Image
          </label>
          <Button
            id="bg-image"
            onClick={openEvent}
            className="button button-large"
          >
            {buttonText}
          </Button>
        </div>
      );
    };

    return (
      <div
        className={`cpc-split-panel bg-${attributes.bgColor} ${
          attributes.flip
            ? 'flex-col-reverse md:flex-row-reverse'
            : 'flex-col md:flex-row'
        }`}
      >
        <InspectorControls>
          <ToggleControl
            label="Flip Panels?"
            checked={attributes.flip}
            onChange={flip => setAttributes({ flip })}
          />
          <MediaUpload
            onSelect={media => {
              setAttributes({ imageAlt: media.alt, imageUrl: media.url });
            }}
            type="image"
            value={attributes.imageID}
            render={({ open }) => getImageButton(open)}
          />
          <CovenantColorPalette
            color={attributes.bgValue || colors.black}
            onChange={([bgColor, bgValue]) =>
              setAttributes({ bgColor, bgValue })
            }
          />
        </InspectorControls>
        <div className="cpc-split-panel__img-wrapper">
          <img
            className="cpc-split-panel__img"
            src={attributes.imageUrl}
            alt={attributes.imageAlt}
          />
        </div>
        <div className={`cpc-split-panel__content`}>
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
        </div>
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
      <div
        className={`cpc-split-panel bg-${attributes.bgColor} ${
          attributes.flip
            ? 'flex-col-reverse md:flex-row-reverse'
            : 'flex-col md:flex-row'
        }`}
      >
        <div className="cpc-split-panel__img-wrapper">
          <img
            className="cpc-split-panel__img"
            src={attributes.imageUrl}
            alt={attributes.imageAlt}
          />
        </div>
        <div className="cpc-split-panel__content">
          <InnerBlocks.Content />
        </div>
      </div>
    );
  },
});

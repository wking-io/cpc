import quoteIcon from './icons/quote';

const { __ } = wp.i18n;
const { InspectorControls, RichText } = wp.editor;
const { registerBlockType } = wp.blocks;
import { ToggleControl } from '@wordpress/components';

registerBlockType('cpc/quote', {
  title: __('Quote'),
  icon: quoteIcon,
  category: 'common',
  keywords: [__('test')],
  attributes: {
    quote: {
      type: 'string',
    },
    source: {
      type: 'string',
    },
    isLight: {
      type: 'boolean',
      default: false,
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
      <blockquote
        className={`border-l-2 py-2 pl-4 border-${
          attributes.isLight ? 'white' : 'primary'
        }`}
      >
        <InspectorControls>
          <ToggleControl
            label="Is On Dark Background?"
            help={
              attributes.isLight
                ? 'Quote is white to show on dark backgrounds'
                : 'Default styles'
            }
            checked={attributes.isLight}
            onChange={isLight => setAttributes({ isLight })}
          />
        </InspectorControls>
        <RichText
          tagName="p"
          formattingControls={[]}
          value={attributes.quote}
          onChange={quote => setAttributes({ quote })}
          placeholder={`Add quote here…`}
          className={`font-sans mt-0 mb-4 leading-normal text-md md:text-lg text-${
            attributes.isLight ? 'white' : 'black'
          }`}
        />
        <RichText
          tagName="p"
          formattingControls={[]}
          value={attributes.source}
          onChange={source => setAttributes({ source })}
          placeholder={`Add source here…`}
          className={`font-sans font-bold m-0 leading-tight text-base md:text-md text-${
            attributes.isLight ? 'white' : 'black'
          }`}
        />
      </blockquote>
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
      <blockquote
        className={`border-l-2 py-2 pl-4 border-${
          attributes.isLight ? 'white' : 'primary'
        }`}
      >
        <p
          className={`font-sans mt-0 mb-4 leading-normal text-md md:text-lg text-${
            attributes.isLight ? 'white' : 'black'
          }`}
        >
          {attributes.quote}
        </p>
        <p
          className={`font-sans font-bold m-0 leading-tight text-base md:text-md text-${
            attributes.isLight ? 'white' : 'black'
          }`}
        >
          <cite>{attributes.source}</cite>
        </p>
      </blockquote>
    );
  },
});

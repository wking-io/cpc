import buttonIcon from './icons/button';

const { __ } = wp.i18n;
const {
  BlockControls,
  InspectorControls,
  AlignmentToolbar,
  RichText,
} = wp.editor;
const { SelectControl, TextControl } = wp.components;
const { registerBlockType } = wp.blocks;

registerBlockType('cpc/link-button', {
  title: 'Link Button',
  icon: buttonIcon,
  category: 'common',
  keywords: [__('test')],
  attributes: {
    content: {
      type: 'string',
    },
    link: {
      type: 'string',
    },
    buttonType: {
      type: 'string',
      default: 'primary',
    },
    alignment: {
      type: 'string',
      default: 'left',
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
      <div className={`text-${attributes.alignment}`}>
        <BlockControls>
          <AlignmentToolbar
            onChange={alignment => setAttributes({ alignment })}
          />
        </BlockControls>
        <InspectorControls>
          <TextControl
            label="Button Link"
            id="button-link"
            onChange={link => setAttributes({ link })}
            value={attributes.link}
            placeholder="Add link here..."
            className="py-3"
          />
          <SelectControl
            label="Button Type"
            value={attributes.buttonType}
            options={[
              { label: 'Primary', value: 'primary' },
              { label: 'Secondary', value: 'secondary' },
              { label: 'Secondary Light', value: 'secondary-light' },
              { label: 'Outline', value: 'outline' },
              { label: 'Outline Light', value: 'outline-light' },
            ]}
            onChange={buttonType => setAttributes({ buttonType })}
          />
        </InspectorControls>
        <RichText
          tagName="p"
          formattingControls={[]}
          value={attributes.content}
          onChange={content => setAttributes({ content })}
          placeholder="Button text here..."
          className={`cpc-button cpc-button--${attributes.buttonType}`}
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
      <div className={`text--${attributes.alignment}`}>
        <a
          href={attributes.link}
          className={`cpc-button cpc-button--${attributes.buttonType}`}
        >
          {attributes.content}
        </a>
      </div>
    );
  },
});

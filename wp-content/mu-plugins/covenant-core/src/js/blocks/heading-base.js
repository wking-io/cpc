import { CovenantColorPalette, colors } from './inputs/colorPalette';

const { __ } = wp.i18n;
const {
  BlockControls,
  InspectorControls,
  AlignmentToolbar,
  RichText,
} = wp.editor;

export const HeadingBase = ({ title, tag, textSize }) => ({
  title,
  icon: 'heading',
  category: 'common',
  keywords: [__('test')],
  attributes: {
    content: {
      type: 'string',
    },
    textColor: {
      type: 'string',
      default: 'black',
    },
    colorValue: {
      type: 'string',
      default: 'black',
    },
    uppercase: {
      type: 'boolean',
      default: false,
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
  edit: function({ attributes, className, setAttributes }) {
    return (
      <div>
        <BlockControls>
          <AlignmentToolbar
            onChange={alignment => setAttributes({ alignment })}
          />
        </BlockControls>
        <InspectorControls>
          <div className="pt-4 pb-12">
            <CovenantColorPalette
              color={attributes.colorValue || colors.black}
              onChange={([textColor, colorValue]) =>
                setAttributes({ textColor, colorValue })
              }
            />
          </div>
        </InspectorControls>
        <RichText
          tagName={tag}
          formattingControls={[]}
          value={attributes.content}
          onChange={content => setAttributes({ content })}
          placeholder={`${title}…`}
          className={`cpc-heading-base ${textSize} ${
            attributes.uppercase ? 'uppercase' : ''
          } text-${attributes.alignment} text-${
            attributes.textColor
          } ${className || ''}`}
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
  save: function({ attributes, className }) {
    return (
      <h1
        className={`cpc-heading-base ${textSize} ${
          attributes.uppercase ? 'uppercase' : ''
        } text-${attributes.alignment} text-${
          attributes.textColor
        } ${className || ''}`}
      >
        {attributes.content}
      </h1>
    );
  },
});

/**
 * BLOCK: cpc-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.

const { __ } = wp.i18n;
const { MediaUpload, PlainText, InspectorControls } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Button } = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('cpc/page-image-header', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('Page Header - Image'), // Block title.
  icon: 'format-image', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__('test')],
  supports: {
    align: ['full'],
  },
  attributes: {
    title: {
      source: 'text',
    },
    imageAlt: {
      attribute: 'alt',
    },
    imageUrl: {
      attribute: 'src',
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
  edit: function({ attributes, className, setAttributes, isSelected }) {
    const getImageButton = openEvent => {
      const buttonText =
        attributes.imageUrl && attributes.imageUrl.length > 0
          ? 'Replace Image'
          : 'Pick Image';
      return (
        <div>
          <label htmlFor="bg-image">Background Image</label>
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
      <div className={`page-header relative aspect-3:1 bg-grey ${className}`}>
        <InspectorControls>
          <MediaUpload
            onSelect={media => {
              setAttributes({ imageAlt: media.alt, imageUrl: media.url });
            }}
            type="image"
            value={attributes.imageID}
            render={({ open }) => getImageButton(open)}
          />
          <div>
            <label htmlFor="page-header-title">Heading</label>
            <PlainText
              id="page-header-title"
              onChange={content => setAttributes({ title: content })}
              value={attributes.title}
              placeholder="Page Heading"
            />
          </div>
        </InspectorControls>
        <img
          className="absolute top-0 left-0 w-full h-full object-center page-header__img"
          src={attributes.imageUrl}
          alt={attributes.imageAlt}
        />
        <h1 className="absolute font-sans uppercase pin-center text-center text-white">
          {attributes.title || 'Page Heading'}
        </h1>
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
      <div className={`page-header relative aspect-3:1 bg-grey ${className}`}>
        <img
          className="absolute top-0 left-0 w-full h-full object-center page-header__img"
          src={attributes.imageUrl}
          alt={attributes.imageAlt}
        />
        <h1 className="absolute font-sans uppercase pin-center text-center text-white">
          {attributes.title || 'Page Heading'}
        </h1>
      </div>
    );
  },
});

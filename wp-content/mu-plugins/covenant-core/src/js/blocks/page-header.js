const { __ } = wp.i18n;
const { MediaUpload, InspectorControls } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Button, TextControl } = wp.components;

registerBlockType('cpc/page-image-header', {
  title: __('Page Header - Image'),
  icon: 'format-image',
  category: 'common',
  keywords: [__('test')],
  attributes: {
    title: {
      type: 'string',
    },
    imageAlt: {
      type: 'string',
    },
    imageUrl: {
      type: 'string',
    },
  },

  getEditWrapperProps() {
    return { 'data-align': 'full' };
  },

  edit: function({ attributes, className, setAttributes }) {
    const getImageButton = openEvent => {
      const buttonText =
        attributes.imageUrl && attributes.imageUrl.length > 0
          ? 'Replace Image'
          : 'Pick Image';
      return (
        <div className="flex flex-col pt-6 pb-3">
          <label className="mb-1" htmlFor="bg-image">
            Background Image
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
      <div className={`page-header ${className}`}>
        <InspectorControls>
          <MediaUpload
            onSelect={media => {
              setAttributes({ imageAlt: media.alt, imageUrl: media.url });
            }}
            type="image"
            value={attributes.imageID}
            render={({ open }) => getImageButton(open)}
          />
          <TextControl
            label="Heading"
            id="page-header-title"
            onChange={content => setAttributes({ title: content })}
            value={attributes.title}
            placeholder="Page Heading"
            className="pb-3"
          />
        </InspectorControls>
        <img
          className="page-header__img"
          src={attributes.imageUrl}
          alt={attributes.imageAlt}
        />
        <div className="page-header__overlay" />
        <h1 className="page-header__heading">
          {attributes.title || 'Page Heading'}
        </h1>
      </div>
    );
  },

  save: function({ attributes, className }) {
    return (
      <div className={`page-header ${className}`}>
        <img
          className="page-header__img"
          src={attributes.imageUrl}
          alt={attributes.imageAlt}
        />
        <div className="page-header__overlay" />
        <h1 className="page-header__heading">
          {attributes.title || 'Page Heading'}
        </h1>
      </div>
    );
  },
});

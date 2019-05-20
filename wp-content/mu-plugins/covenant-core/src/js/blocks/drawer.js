import { CovenantColorPalette, colors } from './inputs/colorPalette';
import quoteIcon from './icons/quote';
import { ALLOWED_BLOCKS } from './utils';

const { __ } = wp.i18n;
const { InspectorControls, InnerBlocks, RichText } = wp.editor;
const { registerBlockType } = wp.blocks;

const attrs = {
  title: {
    type: 'string',
  },
  bgColor: {
    type: 'string',
    default: 'black',
  },
  bgValue: {
    type: 'string',
    default: colors.black,
  },
  clientId: {
    type: 'string',
  },
};

registerBlockType('cpc/drawer', {
  title: __('Drawer'),
  parent: ['cpc/drawer-list'],
  icon: quoteIcon,
  category: 'common',
  keywords: [__('test')],
  attributes: attrs,

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  edit: function({ attributes, setAttributes, clientId }) {
    setAttributes({ clientId });
    return (
      <div
        className={`cpc-drawer border-${attributes.bgColor}`}
        data-drawer-wrapper
        data-drawer-expanded="false"
        id={clientId}
      >
        <InspectorControls>
          <CovenantColorPalette
            color={attributes.bgValue || colors.black}
            onChange={([bgColor, bgValue]) =>
              setAttributes({ bgColor, bgValue })
            }
          />
        </InspectorControls>
        <div data-drawer-full>
          <div
            className={`cpc-drawer__title-wrapper bg-${attributes.bgColor}`}
            data-drawer-visible
          >
            <RichText
              tagName="p"
              formattingControls={[]}
              value={attributes.title}
              onChange={title => setAttributes({ title })}
              placeholder={`Add title here…`}
              className="cpc-drawer__title"
            />
            <button
              className="cpc-drawer__toggle"
              data-drawer-action
              aria-expanded="false"
              aria-controls={clientId}
            >
              <span className="cpc-drawer__toggle-bar" />
              <span className="cpc-drawer__toggle-bar" />
            </button>
          </div>
          <div className="cpc-drawer__content">
            <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
          </div>
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
        className={`cpc-drawer border-${attributes.bgColor}`}
        data-drawer-wrapper
        data-drawer-expanded="false"
        id={attributes.clientId}
      >
        <div data-drawer-full>
          <button
            className={`cpc-drawer__title-wrapper bg-${attributes.bgColor}`}
            data-drawer-visible
            data-drawer-action
            aria-expanded="false"
            aria-controls={attributes.clientId}
          >
            <p className="cpc-drawer__title">{attributes.title}</p>
            <div className="cpc-drawer__toggle">
              <span className="cpc-drawer__toggle-bar" />
              <span className="cpc-drawer__toggle-bar" />
            </div>
          </button>
          <div className="cpc-drawer__content">
            <InnerBlocks.Content />
          </div>
        </div>
      </div>
    );
  },
});

import listIcon from './icons/list';

const { __ } = wp.i18n;
const { InnerBlocks } = wp.editor;
const { registerBlockType } = wp.blocks;

registerBlockType('cpc/drawer-list', {
  title: __('Drawer List'),
  icon: listIcon,
  category: 'common',
  keywords: [__('test')],
  attributes: {},

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  edit: function() {
    return (
      <ul className="cpc-drawer-list">
        <InnerBlocks
          allowedBlocks={['cpc/drawer']}
          template={[['cpc/drawer', {}]]}
          renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
        />
      </ul>
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
  save: function() {
    return (
      <ul className="cpc-drawer-list">
        <InnerBlocks.Content />
      </ul>
    );
  },
});

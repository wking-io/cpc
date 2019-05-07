const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;

registerBlockType('cpc/upcoming-events', {
  title: 'Upcoming Events',
  icon: 'calendar',
  category: 'common',

  edit: withSelect(select => {
    return {
      posts: select('core').getEntityRecords('postType', 'post'),
    };
  })(({ posts, className }) => {
    if (!posts) {
      return 'Loading...';
    }

    if (posts && posts.length === 0) {
      return 'No posts';
    }

    const post = posts[0];

    return (
      <a className={className} href={post.link}>
        {post.title.rendered}
      </a>
    );
  }),
  save: function() {
    return <div>No one cares.</div>;
  },
});

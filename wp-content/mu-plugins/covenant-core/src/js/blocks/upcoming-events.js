const { registerBlockType } = wp.blocks;

registerBlockType('cpc/upcoming-events', {
  title: 'Upcoming Events',
  icon: 'calendar',
  category: 'common',

  edit: function() {
    return (
      <div className="upcoming-events border p-6 my-6">
        <h2 className="cpc-heading-base text-xl uppercase my-0">
          This is where the events will go
        </h2>
      </div>
    );
  },

  save: function() {
    return <div>No one cares.</div>;
  },
});

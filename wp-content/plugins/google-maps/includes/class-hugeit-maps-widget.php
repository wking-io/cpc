<?php

/**
 * Class Hugeit_Maps_Widget
 */
class Hugeit_Maps_Widget extends WP_Widget  {
    /**
     * Hugeit_Maps_Widget constructor.
     */
    public function __construct() {
        parent::__construct(
            'Hugeit_Maps_Widget',
            __( 'Huge IT Google Maps', 'hg_gmaps' ),
            array( 'description' => __( 'Huge IT Google Maps', 'hg_gmaps' ), )
        );
    }

    /**
     * @param array $args
     * @param array $instance
     */
    public function widget( $args, $instance ) {
        extract( $args );

        if ( isset( $instance['g_map_id'] ) ) {
            $g_map_id = $instance['g_map_id'];

            $title = apply_filters( 'widget_title', $instance['title'] );

            echo $before_widget;
            if ( ! empty( $title ) ) {
                echo $before_title . $title . $after_title;
            }

            echo do_shortcode( "[huge_it_maps id='{$g_map_id}']" );
            echo $after_widget;
        }
    }

    /**
     * @param array $new_instance
     * @param array $old_instance
     * @return array
     */
    public function update( $new_instance, $old_instance ) {
        $instance             = array();
        $instance['g_map_id'] = strip_tags( $new_instance['g_map_id'] );
        $instance['title']    = strip_tags( $new_instance['title'] );

        return $instance;
    }

    /**
     * @param array $instance
     */
    public function form( $instance ) {
        $map_instance = ( isset( $instance['g_map_id'] ) ? $instance['g_map_id'] : 0 );
        $title        = ( isset( $instance['title'] ) ? $instance['title'] : '' );

        ?>
        <p>

            <p>
                <label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:' ); ?></label>
                <input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>"
                       name="<?php echo $this->get_field_name( 'title' ); ?>" type="text"
                       value="<?php echo esc_attr( $title ); ?>"/>
            </p>
            <label for="<?php echo $this->get_field_id( 'g_map_id' ); ?>"><?php _e( 'Select map:', 'hg_gmaps' ); ?></label>
            <select id="<?php echo $this->get_field_id( 'g_map_id' ); ?>" name="<?php echo $this->get_field_name( 'g_map_id' ); ?>">
                <?php
                $maps = Hugeit_Maps_Query::get_maps();

                if( $maps ){
                    foreach( $maps as $map ){
                        ?>
                        <option <?php echo selected( $map_instance, $map->get_id() ); ?> value="<?php echo $map->get_id(); ?>"><?php echo $map->get_name(); ?></option>
                        <?php
                    }
                }


                ?>
            </select>

        </p>
        <?php
    }
}
<!--<div class="wrap dg-options-page framework-options">-->
<!--    <form action="options.php" method="POST">-->
<!--        <!-- NEW SECTION -->-->
<!--        <div class="dg-options-page custom-post-type">-->
<!--            <table class="form-table">-->
<!---->
<!--                <h3>For tradeshow only:</h3>-->
                <!-- Venue Name -->
                <tr>
                    <td class="events_meta_box_td" colspan="2">
                        <label for="event_venue">Venue Name</label>
                    </td>
                    <td colspan="4">
                        <input type="text" name="event_venue" class="regular-text" value="<?php echo esc_attr( $event_venue ); ?>" placeholder="Please enter venue here">
                    </td>
                </tr>
                <!-- City -->
                <tr>
                    <td class="events_meta_box_td" colspan="2">
                        <label for="event_city">City</label>
                    </td>
                    <td colspan="4">
                        <input type="text" name="event_city" class="regular-text" value="<?php echo esc_attr( $event_city ); ?>" placeholder="Please enter city here">
                    </td>
                </tr>
                <!-- State -->
                <tr>
                    <td class="events_meta_box_td" colspan="2">
                        <label for="event_state">State</label>
                    </td>
                    <td colspan="4">
                        <input type="text" name="event_state" class="regular-text" value="<?php echo esc_attr( $event_state ); ?>" placeholder="Please enter state here">
                    </td>
                </tr>
                <!-- Zip Code -->
                <tr>
                    <td class="events_meta_box_td" colspan="2">
                        <label for="event_zip">Zip Code</label>
                    </td>
                    <td colspan="4">
                        <input type="text" name="event_zip" class="regular-text" value="<?php echo esc_attr( $event_zip ); ?>" placeholder="Please enter zip code">
                    </td>
                </tr>

                <!-- Sponsor's URL -->
                <tr>
                    <td class="events_meta_box_td" colspan="2">
                        <label for="sponsor_url">Sponsor's URL</label>
                    </td>
                    <td colspan="4">
                        <input type="text" name="sponsor_url" class="regular-text" value="<?php echo esc_attr( $sponsor_url ); ?>" placeholder="http://your-link-here.com">
                    </td>
                </tr>
<!--            </table>-->
<!--        </div><!-- /.dg-options-page -->
<!---->
<!--    </form>-->
<!--</div>-->
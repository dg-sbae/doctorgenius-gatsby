// Home Page Postmeta Scripts

/*
 * Attaches the image uploader to the input field
 */
jQuery(document).ready(function($) {

    toggleHiddenFields('init');
    // Initialize all the image holders and format selectors present on page load
    $('.image-holder').click(imagePickerInit);
    // Toggles the hidden fields on the form when checkboxes are selected
    $('input[type=checkbox]').click(toggleHiddenFields);
    // Initially run to see what fields are hidden and visible

    // Allow the image holders to return url from the media gallery's chosen image to the corresponding html inputs
    function imagePickerInit(e){
        var el = jQuery(this);

        // Instantiates the variable that holds the media library frame.
        var meta_image_frame;

        // Prevents the default action from occuring.
        e.preventDefault();

        // console.log('clicked this image');

        // If the frame already exists, re-open it.
        if ( meta_image_frame ) {
            meta_image_frame.open();
            return;
        }


        // Sets up the media library frame
        meta_image_frame = wp.media.frames.meta_image_frame = wp.media({
            title: "Choose or Upload an Image",
            button: { text:  "Use this image" },
            library: { type: 'image' }
        });

        // Runs when an image is selected.
        meta_image_frame.on('select', function(){

            // Grabs the attachment selection and creates a JSON representation of the model.
            var media_attachment = meta_image_frame.state().get('selection').first().toJSON();

            $.fn.exists = function () {
                return this.length !== 0;
            }

            var imageHolder = jQuery(el);
            var idHolder = imageHolder.parents('tr').find('.id-holder');
            var urlHolder = imageHolder.parents('tr').find('.url-holder');
            console.log( 'First: ' + urlHolder );
            if ( !urlHolder.exists()) {
                urlHolder = imageHolder.parents('tr').next('tr').find('.url-holder');
                console.log( 'Second: ' + urlHolder );
            }
            console.log( imageHolder );

            imageHolder = imageHolder.find('img');

            // Sends the attachment URL to our custom image input field.
            imageHolder.attr( 'src', media_attachment.url);
            idHolder.val( media_attachment.id );
            urlHolder.val( media_attachment.url );
        });

        // Opens the media library frame.
        meta_image_frame.open();
    }

    function toggleHiddenFields(mode) {
        if (mode === 'init') {
            var elements = $('.toggle_checkbox');
        } else {
            var elements = $(this);
        }
//TODO need to get the value of this checkbox
//         console.log(elements);

        elements.each(function() {
            let hiddenField = $(this).attr('class');
            hiddenField = hiddenField.replace("toggle_checkbox", "");
            console.log(hiddenField);
            if ($(this).is(':checked')) {
                $('.' + hiddenField).not('input').removeClass('hidden');
            } else {
                $('.' + hiddenField).not('input').addClass('hidden');
            }
        });
    }

    $('.delete-speaker-item-button').click( function(e)  {
        console.log('Delete this row');
        var currentRow = $(this).closest('tbody');
        currentRow.empty();
        // var rowID = $('.speaker-item-row').last().attr('id');
        // console.log(newID);
        // newID = /speaker-row-(\d*)/.exec( newID );
    });

    $('.add-speaker-item-button').click( function(e) {
        // if ( $('table.speaker-item-row').last().attr('id') ) {
        //     var newID = $('table.speaker-item-row').last().attr('id');
        //     newID = /speaker-row-(\d*)/.exec( newID );
        //     newID = parseInt( newID[1] ) + 1;
        // } else {
        //     newID = 0;
        // }
        var newID = $('.speaker-item-row').last().attr('id');
        console.log(newID);
        newID = /speaker-row-(\d*)/.exec( newID );
        newID = parseInt( newID[1] ) + 1;

        var newRow = [
            '<tbody class="speaker-item-row form-table" id="speaker-row-' + newID + '">',

                '<tr>',
                    '<td colspan="1"><h4>Speaker #' + newID + '</h4></td>',
                    '<td colspan="1">',
                        '<div class="position">',
                            '<label for="speaker_items[' + newID + '][order]"><small><em>Position:</em></small></label>&nbsp;&nbsp;',
                            '<input type="text" class="veryshort" name="speaker_items[' + newID + '][order]" value="' + newID + '" >',
                        '</div>',
                    '</td>',
                '</tr>',

                '<tr>',
                    '<td class="field-top item-label" rowspan="2" colspan="1">Speaker Profile Image</td>',
                    '<td colspan="1" class="field-top">',
                        '<label for="speaker_items[' + newID + '][speaker_profile_image]">Image ID</label>',
                    '</td>',
                    '<td colspan="4" class="field-top">',
                        '<input type="text" id="speaker_items[' + newID + '][speaker_profile_image]" name="speaker_items[' + newID + '][speaker_profile_image]" class="id-holder regular-text" value="">',
                    '</td>',
                    '<td rowspan="2" colspan="2" class="field-top">',
                        '<div id="speaker_items[' + newID + '][speaker_profile_image_selector]" class="image-holder" style="height: 200px; width: 200px;"><img id="speaker_items[' + newID + '][speaker_profile_image_holder]" height="200" width="200" src=""></div>',
                        '<small>Click to choose image</small>',
                    '</td>',
                '</tr>',
                '<tr>',
                    '<td colspan="1" class="field-top">',
                        '<label for="speaker_items[' + newID + '][speaker_profile_image_url]" >Image URL</label>',
                    '</td>',
                    '<td colspan="4" class="field-top">',
                        '<input readonly type="text" id="speaker_items[' + newID + '][speaker_profile_image_url]" name="speaker_items[' + newID + '][speaker_profile_image_url]" class="url-holder regular-text" value="">',
                    '</td>',
                '</tr>',
                // '<tr>',
                //     '<td class="field-top" rowspan="2" colspan="1">Speaker Background Image</td>',
                //     '<td colspan="1" class="field-top">',
                //         '<label for="speaker_items[' + newID + '][speaker_bg_image]">Image ID</label>',
                //     '</td>',
                //     '<td colspan="4" class="field-top">',
                //         '<input type="text" id="speaker_items[' + newID + '][speaker_bg_image]" name="speaker_items[' + newID + '][speaker_bg_image]" class="id-holder regular-text" value="">',
                //     '</td>',
                //     '<td rowspan="2" colspan="2" class="field-top">',
                //         '<div id="speaker_items[' + newID + '][speaker_bg_image_selector]" class="image-holder" style="height: 200px; width: 200px;"><img id="speaker_items[' + newID + '][speaker_bg_image_holder]" height="200" width="200" src=""></div>',
                //         '<small>Click to choose image</small>',
                //     '</td>',
                // '</tr>',
                // '<tr>',
                //     '<td colspan="1" class="field-top">',
                //         '<label for="speaker_items[' + newID + '][speaker_bg_image_url]">Image URL</label>',
                //     '</td>',
                //     '<td colspan="4" class="field-top">',
                //         '<input readonly type="text" id="speaker_items[' + newID + '][speaker_bg_image_url]" name="speaker_items[' + newID + '][speaker_bg_image_url]" class="url-holder regular-text" value="">',
                //     '</td>',
                // '</tr>',
                '<tr>',
                    '<td class="events_meta_box_td item-label" colspan="2">',
                        '<label for="speaker_items[' + newID + '][speaker_name]">Speaker Name*</label>',
                    '</td>',
                    '<td colspan="4">',
                        '<input type="text" name="speaker_items[' + newID + '][speaker_name]" class="regular-text" value="" placeholder="Enter the speaker\'s name">',
                    '</td>',
                '</tr>',
                '<tr>',
                    '<td class="events_meta_box_td item-label" colspan="2">',
                        '<label for="speaker_items[' + newID + '][speaker_position]">Speaker Position*</label>',
                    '</td>',
                    '<td colspan="4">',
                        '<input type="text" name="speaker_items[' + newID + '][speaker_position]" class="regular-text" value="" placeholder="Enter the speaker\'s position">',
                    '</td>',
                '</tr>',
                '<tr>',
                    '<td class="events_meta_box_td item-label" colspan="2">',
                        '<label for="speaker_items[' + newID + '][speaker_company]">Speaker Company*</label>',
                    '</td>',
                    '<td colspan="4">',
                        '<input type="text" name="speaker_items[' + newID + '][speaker_company]" class="regular-text" value="" placeholder="Enter the speaker\'s company">',
                    '</td>',
                '</tr>',
                // '<tr>',
                //     '<td class="events_meta_box_td" colspan="2">',
                //         '<label for="speaker_items[' + newID + '][speaker_bio]">Speaker Bio</label>',
                //     '</td>',
                //     '<td colspan="4">',
                //         '<input type="text" name="speaker_items[' + newID + '][speaker_bio]" class="regular-text" value="" placeholder="Enter the speaker\'s bio">',
                //     '</td>',
                // '</tr>',
            '</tbody>'
        ];

        // Create the markup for the new row by joining the hardcoded strings
        newRow = $(newRow.join(''));

        // Insert the new markup at the bottom of the table
        $('.toggle_field.speakers_hide').append(newRow);
        // $('.speakers_section').append(newRow);

        // Initialize image holders, selectors, and input syncing in the new row
        $('.speaker-item-row').last().find('.image-holder').click(imagePickerInit);
        // inputSync();

    });

    //allow hidden html inputs to sync with the visible ones within the same row, whenever a value is changed
    // function inputSync() {
    //     $("input[name*='[image_1_attachment_id]']").on("keyup paste change", function () {
    //         $(this).parents('table').find("input[name*='[image_1_attachment_id]']").val($(this).val());
    //         console.log('image_1_attachment_id change');
    //     });
    //     $("textarea[name*='[image_1_description]']").on("keyup paste change", function () {
    //         console.log('image_1_description change');
    //         $(this).parents('table').find("textarea[name*='[image_1_description]']").val($(this).val());
    //     });
    //     $("input[name*='[image_2_attachment_id]']").on("keyup paste change", function () {
    //         $(this).parents('table').find("input[name*='[image_2_attachment_id]']").val($(this).val());
    //         console.log('image_2_attachment_id change');
    //     });
    //     $("textarea[name*='[image_2_description]']").on("keyup paste change", function () {
    //         $(this).parents('table').find("textarea[name*='[image_2_description]']").val($(this).val());
    //         console.log('image_2_description change');
    //     });
    //     $("textarea[name*='[service_description]']").on("keyup paste change", function () {
    //         $(this).parents('table').find("textarea[name*='[service_description]']").val($(this).val());
    //         console.log('service_description');
    //     });
    // }

});
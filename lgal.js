(function(doc) {

    'use strict';

    if(doc.lgal !== undefined) {
        throw 'Couldn\'t add lgal to document!';
    }

    doc.lgal = function(settings) {

        settings = settings || {};
        var class_prefix = settings.class_prefix || 'lgal';

        /*
        * showcase: node for peek display
        * selected_node: currently displayed peek
        * prev_button, next_button: back/forward buttons
        */
        var showcase;
        var selected_node;
        var title_node;
        var prev_button;
        var next_button;

        function contains_peek(cls) {
            return cls.indexOf(class_prefix+'-peek') >= 0;
        }

        function child_is_peek(node) {
            return node && node.firstChild && contains_peek(node.firstChild.className);
        }

        function change_to(img_node) {

            /* Prevent click on navigation buttons from displaying a null node */
            if(img_node === null || !contains_peek(img_node.className)) {
                return;
            }

            if(!doc.body.contains(fullscreen)) {
                /* If fullscreen mode isn't already set */
                doc.body.insertBefore(fullscreen, doc.body.firstChild);
            }

            /* Change currently displayed node */
            selected_node = img_node;
            /* Change displayed image */
            showcase.src = img_node.src;
            title_node.innerHTML = decodeURI(img_node.src)
                                    .replace(/_/g, ' ')
                                    .replace(/\.[a-z0-9]*$/i, '')
                                    .split(/\//g)
                                    .pop();

            prev_button.firstChild.style.color = child_is_peek(selected_node.parentNode.previousElementSibling)
                                                    ? 'inherit' : 'transparent';

            next_button.firstChild.style.color = child_is_peek(selected_node.parentNode.nextElementSibling)
                                                    ? 'inherit' : 'transparent';

        }

        function close_fullscreen() {

            /* Always make sure there is no node selected */
        	if(doc.body.contains(fullscreen)) {
        		selected_node = null;
        		doc.body.removeChild(fullscreen);        		
        	}

        }

        function create_button(icon, click) {

            var span = doc.createElement('span');
            span.className = class_prefix+'-navspan';

            var button = doc.createElement('button');
            button.className = class_prefix+'-navbutton';
            button.innerHTML = icon;
            button.onclick = click;

            span.appendChild(button);

            return span;

        }

        var fullscreen = (function() {

            var fullscreen_node = doc.createElement('div');
            fullscreen_node.id = class_prefix+'-bigview';

            var close_cross = doc.createElement('button');
            close_cross.id = class_prefix+'-close';
            close_cross.innerHTML = 'X';
            close_cross.addEventListener('click', close_fullscreen);
            window.onkeyup = function(e) {
            	if(e.key === 'Escape') {
            		close_fullscreen();
            	}
            };

            title_node = doc.createElement('span');
            title_node.style['padding-left'] = '10px';


            var outer_showcase = doc.createElement('span');
            outer_showcase.style.display = 'table-cell';
            outer_showcase.style['vertical-align'] = 'middle';

            showcase = doc.createElement('img');
            showcase.className = class_prefix+'-showcase';
            outer_showcase.appendChild(showcase);

            var separator = doc.createElement('div');
            separator.style.display = 'table';
            separator.style.width = '100%';
            separator.style.height = '100%';

            fullscreen_node.appendChild(close_cross);
            fullscreen_node.appendChild(title_node);

            /* Use parentNode here because img is wrapped in a-tag */
            prev_button = create_button('<', function() {
                if(!selected_node.parentNode.previousElementSibling) {
                    return;
                }
                change_to(selected_node.parentNode.previousElementSibling.firstChild);
            });
            prev_button.style['text-align'] = 'left';

            next_button = create_button('>', function() {
                if(!selected_node.parentNode.nextElementSibling) {
                    return;
                }
                change_to(selected_node.parentNode.nextElementSibling.firstChild);
            });
            next_button.style['text-align'] = 'right';

            separator.appendChild(prev_button);
            separator.appendChild(outer_showcase);
            separator.appendChild(next_button);
            fullscreen_node.appendChild(separator);

            return fullscreen_node;

        }());

        doc.body.addEventListener('click', function(e) {

            /* Only subscribe to global click and check if target is a peek */
            if(!contains_peek(e.target.className)) {
                return;
            }

            e.preventDefault();
            e.stopPropagation();

            /* Display selected peek in fullscreen mode */
            change_to(e.target);

        });

    };

}(document));

document.addEventListener('DOMContentLoaded', function() {
	
    document.lgal({class_prefix: 'lgal'});

});
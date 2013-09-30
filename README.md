jQuery.scrollZone
=================

Perform actions depending on where someone has or has not scrolled to.

## Initialization

    $(element).scrollZone(options);
    $(element).scrollZone([options, options, options]);
    $(window).scrollZone({
     id:"zonebone", 
     startY:100, 
     endY:400,
     startX:0, 
     onceIn:function(ya){
      $('body').css('background', '#af6789');
     }, 
     onceOut:function(ya){
      $('body').css('background', '#89af67');
     }
    });
    $(window).scrollZone([
     {
      id:"zonebone", 
      startY:100, 
      endY:400,
      startX:0, 
      onceIn:function(ya){
       $('body').css('background', '#af6789');
      }, 
      onceOut:function(ya){
       $('body').css('background', '#89af67');
      }
     },
     {
      id:"bonezone", 
      startY:200, 
      endY:500,
      startX:0, 
      onceIn:function(ya,e){
       $('#passion').fadeIn('fast');
       $('#pit').fadeOut('fast');
       $('#ins').val(e.objectLeft+', '+e.objectTop);
      }, 
      onceOut:function(ya,e){
       $('#passion').fadeOut('fast');
       $('#pit').fadeIn('fast');
       $('#outs').val(e.objectLeft+", "+e.objectTop);
      }, 
      repeatIn:function(ya,e){
       $('#inr').val(e.objectLeft+', '+e.objectTop);
      }, 
      repeatOut:function(ya,e) { 
       $('#outr').val(e.objectLeft+', '+e.objectTop);
      }
     }
    ]);

Can be initialized with either an object containing the options or an array containing objects that contain the options.

## Options
### `id`

* `id` is useful for removing, pausing, and starting scrollZone actions.
* Can be anything you want.
* Default: `false`.

### `active`

* `active` is a boolean value that determines whether to fire the scrollZone object in question.
* `true` or `false`
* Default: `true` (will fire)

### `startY`

* `startY` is an integer that dictates how many pixels from the top of the element to initiate the functions.
* Integer
* Default: `Infinity` (won't initiate "in" functions unless defined as something else)

### `startX`

* `startX` is an integer that dictates how many pixels from the left of the element to initiate the functions.
* Integer
* Default: `Infinity` (won't initiate "in" functions unless defined as something else)

### `endY`

* `endY` is an integer that dictates how many pixels from the top of the element to end the functions.
* Integer
* Default: `Infinity` (`Infinity` here means that it'll never stop)

### `endX`

* `endY` is an integer that dictates how many pixels from the left of the element to end the functions.
* Integer
* Default: `Infinity` (`Infinity` here means that it'll never stop)

### `onceIn(element, eventishObject)`

* `onceIn` is a function to initiate once a user has entered the "scroll zone".
* Two arguments: `element` and `eventishObject`. `element` is the element that has been scrolled and `eventishObject` will be defined later.
* Default: `false` (doesn't initiate a function)

### `onceOut(element, eventishObject)`

* `onceOut` is a function to initiate once a user has exited the "scroll zone".
* Two arguments: `element` and `eventishObject`. `element` is the element that has been scrolled and `eventishObject` will be defined later.
* Default: `false` (doesn't initiate a function)

### `repeatIn(element, eventishObject)`

* `repeatIn` is a function to be fired for every `scroll` event encountered when inside the "scroll zone".
* Two arguments: `element` and `eventishObject`. `element` is the element that has been scrolled and `eventishObject` will be defined later.
* Default: `false` (doesn't initiate a function)

### `repeatOut(element, eventishObject)`

* `repeatOut` is a function to be fired for every `scroll` event encountered when outside the "scroll zone".
* Two arguments: `element` and `eventishObject`. `element` is the element that has been scrolled and `eventishObject` will be defined later.
* Default: `false` (doesn't initiate a function)

## `eventishObject`
The eventishObject returns an object containing related information to scrollZone
* `id` - the ID of the scrollZone object called.
* `scrollZone` - the scrollZone object.
* `objectTop` - how far from the top has the element been scrolled.
* `objectLeft` - how far from the left has the element been scrolled.
* `toStart` - an object.
    * `top` - how far from the `startY` benchmark the element currently is.
    * `left` - how far from the `startX` benchmark the element currently is.
* `toEnd` - an object.
    * `top` - how far from the `endY` benchmark the element currently is.
    * `left` - how far from the `endX` benchmark the element currently is.

## Other functions

		$(element).returnSZ(id);
		$(element).removeSZ();
		$(element).removeSZ(id);
		$(element).pauseSZ();
		$(element).pauseSZ(id);
		$(element).startSZ();
		$(element).startSZ(id);

* `returnSZ` - Returns the scrollZone object(s) related to the `id` within an array (an empty array if the `id` is not associated with an object).
* `removeSZ` - If `id` is not defined, will remove all scrollZone objects associated with the element. If `id` is defined, will remove all scrollZone objects with the id that are associated with the element.
* `pauseSZ` - If `id` is not defined, will pause all scrollZone actions related to the element. If `id` is defined, will pause all scrollZone objects with the id that are associated with the element.
* `startSZ` - If `id` is not defined, will start all scrollZone actions related to the element. If `id` is defined, will start all scrollZone objects with the id that are associated with the element.

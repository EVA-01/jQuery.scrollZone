jQuery.fn.scrollZone=function(o) {
 /*
  o=[
   {
  ]
 */
 var h=function(o,k) {
  if(jQuery.type(o)=="object") {
   o=jQuery.extend({
    id:false,
	active:true,
    repeatIn:false,
    repeatOut:false,
    onceIn:false,
	onceInActive:false,
	onceOutActive:true,
    onceOut:false,
    startX:Infinity,
    endX:Infinity,
    startY:Infinity,
    endY:Infinity
   }, o);
   if(k.data('scrollZone')==undefined) {
    k.data('scrollZone', [o]);
	k.bind('scroll.scrollZone', function() {
	 var k=jQuery(this);
	 jQuery.each(k.data('scrollZone'), function() {
	  if(this.active) {
	   if(this.endY>=k.scrollTop() && k.scrollTop()>=this.startY && this.endX>=k.scrollLeft() && k.scrollLeft()>=this.startX) {
	    if(this.repeatIn!=false) {
		 this.repeatIn(k,{id:this.id,scrollZone:this,objectTop:k.scrollTop(),objectLeft:k.scrollLeft(),toStart:{top:k.scrollTop()-this.startY, left:k.scrollLeft()-this.startX},toEnd:{top:this.endY-k.scrollTop(), left:this.endX-k.scrollLeft()}});
		}
		if(!this.onceInActive) {
		 this.onceInActive=true;
		 this.onceOutActive=false;
		 if(this.onceIn!=false) {
		  this.onceIn(k,{id:this.id,scrollZone:this,objectTop:k.scrollTop(),objectLeft:k.scrollLeft(),toStart:{top:k.scrollTop()-this.startY, left:k.scrollLeft()-this.startX},toEnd:{top:this.endY-k.scrollTop(), left:this.endX-k.scrollLeft()}});
		 }
		}
	   } else {
	    if(this.repeatOut!=false) {
		 this.repeatOut(k,{id:this.id,scrollZone:this,objectTop:k.scrollTop(),objectLeft:k.scrollLeft(),toStart:{top:k.scrollTop()-this.startY, left:k.scrollLeft()-this.startX},toEnd:{top:this.endY-k.scrollTop(), left:this.endX-k.scrollLeft()}});
		}
		if(!this.onceOutActive) {
		 this.onceOutActive=true;
		 this.onceInActive=false;
		 if(this.onceOut!=false) {
		  this.onceOut(k,{id:this.id,scrollZone:this,objectTop:k.scrollTop(),objectLeft:k.scrollLeft(),toStart:{top:k.scrollTop()-this.startY, left:k.scrollLeft()-this.startX},toEnd:{top:this.endY-k.scrollTop(), left:this.endX-k.scrollLeft()}});
		 }
		}
	   }
	  }
	 });
	});
	jQuery(k).trigger('scroll.scrollZone');
   } else {
    var y=k.data('scrollZone');
	y.push(o);
	k.data('scrollZone', y);
	jQuery(k).trigger('scroll.scrollZone');
   }
   return o;
  } else {
   console.error('Invalid argument for scrollZone. (Argument array contains non-object)');
   return undefined;
  }
 };
 var n=undefined;
 switch(jQuery.type(o)) {
  case 'array':
   n=[];
   var k=jQuery(this);
   jQuery.each(o, function() {
    n.push(h(this, k));
   });
  break;
  case 'object':
   n=h(o, jQuery(this));
  break;
  default:
   console.error('Invalid argument for scrollZone. (Argument isn\'t an object or array of objects)');
  break;
 }
 return n;
}
jQuery.fn.returnSZ=function(id) {
 if(jQuery(this).data('scrollZone')) {
  var n=[];
  jQuery.each(jQuery(this).data('scrollZone'), function() {
   if(this.id==id) {
    n.push(this)
   }
  });
  return n;
 } else {
  return [];
 }
}
jQuery.fn.removeSZ=function(id) {
 if(id) {
  var n=jQuery(this).returnSZ(id);
  var k=jQuery(this).data('scrollZone');
  jQuery.each(n, function() {
   k.splice(k.indexOf(this), 1);
  });
 } else {
  var k=[];
 }
 jQuery(this).data('scrollZone', k);
 return jQuery(this);
}
jQuery.fn.pauseSZ=function(id) {
 var n=id?jQuery(this).returnSZ(id):jQuery(this).data('scrollZone');
 jQuery.each(n, function() {
  this.active=false;
 });
}
jQuery.fn.startSZ=function(id) {
 var n=id?jQuery(this).returnSZ(id):jQuery(this).data('scrollZone');
 jQuery.each(n, function() {
  this.active=true;
 });
}

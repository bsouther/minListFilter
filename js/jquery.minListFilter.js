//
// http://mlf.souther.us
// Ben Souther
// Use as you like but please keep this heading.
//
(function( $ ){
  $.fn.selectFilter = function( options ){
    return this.each(function(){

      var settings = $.extend({
        'size':            5,
        'wrapperDivClass':    'selectFilterWrapper',
        'criteriaFieldClass': 'selectFilterCriteria',
      }, options);

      var $this = $(this);
      var thisList = this;

      var wrapper = $("<div class='" + settings.wrapperDivClass + "'></div>");
      $this.before(wrapper);
      wrapper.append($this);

      var crit = $("<input type='text' class='" + settings.criteriaFieldClass + "'/><br />");
      $this.before(crit);
      $this.attr("size", settings.size);

      var keptList = [];
      for(var i = 0; i < thisList.options.length; i++){
        keptList.push(thisList.options[i]);
      }

      $(crit).keyup(function(){

        thisList.options.length = 0;
        for(var i = 0; i < keptList.length; i++){
          thisList.options.add(keptList[i]);
        }

        var opts = thisList.options;
        for(var j = opts.length -1; j > -1; j--){
          if(opts[j].text.toLowerCase().indexOf(crit.val().toLowerCase()) < 0){
            opts.remove(j);
          }
          if(opts.length === 1){
            opts[0].selected = true;
          }
        }
      });//keyup
    });//each in wrapped set
  }
})( jQuery );

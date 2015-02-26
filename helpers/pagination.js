module.exports.register = function (Handlebars, options) {
  'use strict';

  Handlebars.registerHelper('pagination', function (pages, from, howMany) {
    
    /*
    pages.forEach(function(item) {
      console.log(item.relativeLink);
    });
    */
//    console.log(pages[0]);
    
    //howMany=3;
    //from=1;
    
    var absoluteLink = pages[0].pages[0].dest;
//    console.log(absoluteLink.slice(absoluteLink.indexOf('/')));
    var html = '<div>'
                + '<a href="' + absoluteLink.slice(absoluteLink.indexOf('/')) + '">'
                    + pages[0].pages[0].filename
                + '</a><br/>'
                + '';
              
    var numElem = pages.length;
    for (var ii=from; ii<=(from+howMany) && ii<numElem; ii++) {
      absoluteLink = pages[ii].pages[0].dest;
      html += '<a href="' + absoluteLink.slice(absoluteLink.indexOf('/')) + '">'
                + pages[ii].pages[0].filename
            + '</a><br/>';
//      console.log(pages[ii].pages[0].relativeLink);
    }
    
    absoluteLink = pages[numElem-1].pages[0].dest;
    html += '<a href="' + absoluteLink.slice(absoluteLink.indexOf('/')) + '">'
              + pages[numElem-1].pages[0].filename
          + '</a><br/>';
    html += '</div>';
    return html;
  });

};
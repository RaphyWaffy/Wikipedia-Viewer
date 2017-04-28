/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function() {
  'use strict';
  $("#look").click(function() {
    var search = $("#mysearch").val();
    var wikiPage = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + search + "&prop=revisions&rvprop=content&format=json&callback=?";
    $.getJSON(wikiPage, function(data) {
      for (var i = 0; i < 10; i++) {
        var title = data.query.search[i].title.replace(/\s+/g, '');
        var ref = "<a href=" + 'https://en.wikipedia.org/wiki/' + title + ">" + data.query.search[i].title + "</a></br>";
        $("#master").append("<div class='results'>" + ref + data.query.search[i].snippet + "..." + "</div>");
        console.log(data.query.search[i].snippet);
      };
    });
  });
});

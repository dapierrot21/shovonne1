//Problem: It looks gross in smaller browser widths and devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//Create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each( function() {
    var $anchor = $(this);
 // Create an Option
    var $option = $("<option></option>");
    
 //Deal with selected options depending on current page
    if ($anchor.parent().hasClass("selected")){
        $option.prop("selected", true); 
       } 
    
 //Option value is the href 
    $option.val($anchor.attr("href"));
 //Option's text is the text of link
    $option.text($anchor.text());
 //Append option to select
    $select.append($option);
 });    
//Create button
var $buttonMenu = $("<button>Go</button>");
$("#menu").append($buttonMenu);
//Bind click to button
$buttonMenu.click(function(){
 //Go to select's location
    window.location = $select.val();
});










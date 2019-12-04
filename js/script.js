//Add focus to the name input
$("#name").focus();

//Hide "Other" job field option text input
$("#other-title").hide();

//Hides the  'Select Theme' option on the Design menu
$("option[value='Select Theme']").attr('disabled', true).attr('hidden', true);

//Updates 'Color' field to read 'Please Select a T-shirt theme'
$('#colors-js-puns label').text("Please Select T-shirt theme");

//Hides the 'Color' dropdown options
$('#color option').hide();

//Variables for the Design Options and Color Options
var $updateDesign = $('#design');
var $updateDesignOptions = $('#design option');
var $colorOptions = $('#color option');
//console.log($colorOptions);

$updateDesign.on('change', function(event){
    //$updateDesignOptions.each(function(i, element){
        if ($(event.target).val() === 'js puns'){
                $("colorOptions:contains('JS shirt only')").hide();
                $("colorOptions:contains('JS Puns shirt only')").show();
        } else {
                if ($(event.target).val() === 'heart js') {
                    $("colorOptions:contains('JS shirt only')").show();
                    $("colorOptions:contains('JS Puns shirt only')").hide();
                }
       // }












});




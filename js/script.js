//Add focus to the name input
$("#name").focus();

//Hide "Other" job field option text input
$("#other-title").hide();

//Hides the  'Select Theme' option on the Design menu
$("option[value='Select Theme']").attr('disabled', true).attr('hidden', true);

//Updates 'Color' field to read 'Please Select a T-shirt theme'
$('#colors-js-puns label').text("Please Select T-shirt theme");
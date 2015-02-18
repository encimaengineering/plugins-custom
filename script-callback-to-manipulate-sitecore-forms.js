//Below is the code you can implement when you need to hide something on the forms

$(function() {
                //Call function to hide the elements on the page THIS NAME CAN CHANGE
                hideEWCCheckbox();

                //Get the instance of the PageRequestManager
                var prm = Sys.WebForms.PageRequestManager.getInstance(); 
                
                //Add a listener for when the request ends
                prm.add_endRequest(endRequest);
                
});

//Callback. Hides EWC when __doPostBack requests ends
function endRequest(sender, args) {
                hideEWCCheckbox();
};

//Hide EWC
function hideEWCCheckbox() {
	//Target the elements on the page you want to hide via the element ID and use the methods .hide() or .remove()
                $('#step_0 fieldset#phmaincontent_0_phsideform_0_fSetF_SMSOpt-In').hide(); //left side form
                $('#step_0 fieldset#phmaincontent_1_fSetF_SMSOpt-In').remove(); //big red form
                $('#step_0 fieldset#phmaincontent_0_phsideform_0_fSetF_SMSOpt-In').hide(); //right side form
                $('#step_0 fieldset#phmaincontent_2_phrightsidebanners_1_fSetF_SMSOpt-In').hide(); // thin right side form
};
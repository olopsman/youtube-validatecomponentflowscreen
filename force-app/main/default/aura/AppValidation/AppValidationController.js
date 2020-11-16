({
    init : function(component, event, helper) {
        component.set('v.validate', function() { 
            //first mandatory field
            var mandatoryFields = [];
            // if question was answered show the other questions
            if(!$A.util.isUndefined(component.get("v.hasYoutubeChannel"))) {
                // if true make the fields mandatory
                if(component.get("v.hasYoutubeChannel") == 'Yes') {
                    mandatoryFields.push('channelName');
                    mandatoryFields.push('subscribers');
                    mandatoryFields.push('dateStarted');
                } else {
                    //clear storage for validation fields
                    sessionStorage.clear();
                    //reset all fields
                    component.set("v.channelName", "");
                    component.set("v.subscribers", "");
                    component.set("v.dateStarted", "");
                    return { 
                        isValid: true
                    };                    
                }
            } else {
                mandatoryFields.push('hasYoutubeChannel');
            }

            //loop through the fields
            var missingFields = [];
            for(var i = 0; i < mandatoryFields.length; i++) {
                var pagefield = component.find(mandatoryFields[i]);
                var fieldValue = pagefield.get("v.value");
                if($A.util.isEmpty(fieldValue)) { 
                    missingFields.push(mandatoryFields[i]);
                }
            }
            //check length
            if(missingFields.length > 0){
                sessionStorage.setItem('missingFields', missingFields);             
                // mandatory fields required set isValid to false
                return { 
                    isValid: false, 
                    errorMessage: '' //keep it empty
                };
            } 
        });    
    }, 
    //simple event tracking changes to the radio button   
    handleChange : function(component, event, helper) {
        component.set("v.hasYoutubeChannel",  event.getParam("value"));
    }
})

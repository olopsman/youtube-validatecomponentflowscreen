({
    displayErrorMessage : function(component){
        //all items from sessionStorage = should match the aura:id
        var missingFields = sessionStorage.getItem('missingFields'); 
        if(missingFields != null) {
            missingFields = missingFields.split(",");
            for(var i = 0; i < missingFields.length; i++) {
                var compElement = component.find(missingFields[i]);
                if(!$A.util.isUndefined(compElement)){
                    compElement.setCustomValidity('Please complete required information.');
                    compElement.reportValidity();
                }    
            }
        }
    },
})

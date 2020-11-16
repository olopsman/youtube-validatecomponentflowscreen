({
    // Your renderer method overrides go here
    afterRender: function(component, helper) {
        this.superAfterRender();
        // display error on the screen
        if(sessionStorage){
            helper.displayErrorMessage(component);
        }
    }
})

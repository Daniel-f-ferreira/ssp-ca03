
function checkMensage() {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const error = parameters.get('error');

    if(error) {
        $( "#error-login" ).show( "slow" );
    } else {
        $( "#error-login" ).hide();
    }
}

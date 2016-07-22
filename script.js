

function changeThis(){
    $( function() {
        $( "#draggable" ).draggable();
    } );

    var formInput = document.getElementById('theInput').value;
    document.getElementById('newText').innerHTML = formInput;
}

$( function() {
    $( "#draggable" ).draggable();
} );

function changeThis(){
    var formInput = document.getElementById('theInput').value;
    document.getElementById('newText').innerHTML = formInput;
}

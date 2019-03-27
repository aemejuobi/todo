// $(document).ready(function(){
//     // When the 'Add' button is clicked, an ajax call is sent to the /api/todo route as a post request to store the input val in the database
//     $("#add").on("click", function(){
//         $.post("/api/todo", {
//            text: $("#item").val().trim() 
//         }).then(function(results){
//             console.log(results.data);
//         });
//     })
    
//     // Add a to-do
//     // Take the value of the input field and display it as a list item
//     // Send a get request to the database to get all the items to do and display it on the page
// });
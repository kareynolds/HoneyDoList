
//*****      Add the completed css class to create a strike through line ******
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
})



//********     add the fadeout animation to the trash can ********
$("ul").on("click", "span", function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
})



//******  Targets the input field, if the keystroke is enter(i.e 13) then create a new todo and append it ********
$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
       var todoText =  $(this).val();
       $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i> </span>" + todoText + "</li>");
    } 
});



// ******   targets the hyphen and makes it fade when clicked *****
$(".fa-minus").on("click", function(){
    $("input").fadeToggle();
})

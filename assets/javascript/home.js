/* DECLARING ALL THE DOM OBJECT */
const search=document.getElementById("search");
const close_search=document.getElementById("close_search");
const search_icon=document.getElementsByClassName("fa-magnifying-glass")[0];
const search_type=document.getElementById("search_item")
const search_input_type=document.getElementById("search_input");

//Search specific area visible
search.addEventListener("click",function()
{
    search.classList.remove("search_1");
    search.classList.add("search_2");
    search_icon.style.color="white";
})

//search specific area hide
close_search.addEventListener("click",function(){
    console.log("hi");
    search.classList.remove("search_2");
    search.classList.add("search_1");
    search_icon.style.color="black";
    event.stopPropagation();
})


// Changing Search Type
search_type.addEventListener("change",function(){
        switch(search_type.value){
            case 'Title': document.getElementById("input").innerHTML="<input type='text' placeholder='Enter Keyword' id='search_input' name='search_keyword' required>"
                            search_input_type.type="text";
                            break;
            case 'Date' :document.getElementById("input").innerHTML="<input type='date' id='search_input' name='search_keyword' required>"
                            search_input_type.type="date";
                            break;
            case 'Category' :document.getElementById("input").innerHTML='<select name="search_keyword"> <option value="Work" selected>Work</option> <option value="School">School</option> <option value="Personal" >Personal</option> </select>'
                            break;
        }
})

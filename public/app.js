
 $(document).ready(function(){
     $.get('https://gitlab.com/api/v4/users/blabel3/projects', function(data, status){
         if(status == 0){
             console.log('Error! :(');
         } else {
             console.log('Made request!');
             addProjects(data);
         }
     })/*
     fetch('https://gitlab.com/api/v4/users/blabel3/projects').then(
         function(response) {
             console.log(response);
             addProjects(response);
         }
     ).catch(
         function(response) {
             console.log("Request failed :(");
         }
     );*/
 })

 function addProjects(projects) {
     //console.log(projects)
     for (var i = 0; i < projects.length; i++){
         console.log(projects[i]) 
        $("#project-grid").append("\
        <div class=\"span-4\">\
            <div class=\"project\">\
                <img class=\"project-image\"src=\"" + projects[i].avatar_url + "\" alt=\"Project Image\"  width=\"100dp\"> \
                <div class=\"project-description\">" + projects[i].description + "</div>\
                <div class=\"project-link\">\
                    <a href=\"" + projects[i].web_url + "\"><button class=\"source-button\">\
                    see the code\
                    </button></a>\
                </div>\
            </div>\
        </div>") 
    }
 }

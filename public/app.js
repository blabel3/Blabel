import {MDCRipple} from '@material/ripple';
const ripple = new MDCRipple(document.querySelector('.source-button'));

 $(document).ready(function(){
     $.ajax({
         url: 'https://gitlab.com/api/v4/users/blabel3/projects',
         type:"GET",
         success: function(result){
             //console.log(result)
             addProjects(result)
         },
         error: function(error){
             console.log('Error ${error}')
         }
     })
 })

 function addProjects(projects) {
     //console.log(projects)
     for (var i = 0; i < projects.length; i++){
         console.log(projects[i]) 
        $("#project-grid").append("\
        <div class=\"mdc-layout-grid__cell--span-4\">\
            <div class=\"mdc-card\">\
                <div class=\"mdc-card\"></div>\
                <img class=\"project-image\"src=\"" + projects[i].avatar_url + "\" alt=\"Project Image\"  width=\"100dp\"> \
                <div class=\"project-description\">" + projects[i].description + "</div>\
                <div class=\"mdc-card__actions\">\
                    <a href=\"https://github.com/michaelgira23/hack-chicago-2018\"><button class=\"source-button\">\
                    see the code\
                    </button></a>\
                </div>\
            </div>\
        </div>") 
    }
 }

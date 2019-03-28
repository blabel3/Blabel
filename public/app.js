import {MDCRipple} from '@material/ripple';
const ripple = new MDCRipple(document.querySelector('.source-button'));

 $(document).ready(function(){
     $.ajax({
         url: 'https://gitlab.com/api/v4/users/blabel3/projects',
         type:"GET",
         success: function(result){
             console.log(result)
         },
         error: function(error){
             console.log('Error ${error}')
         }
     })
 })

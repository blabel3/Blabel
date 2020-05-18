# blabel

* run `npm install` to install all the dependencies of the project.
    * **You will need to change a variable in `node_modules/@fortawesome/fontawesome-free/scss/_variables`**: `$fa-font-path` should be `"../node_modules/@fortawesome/fontawesome-free/webfonts" !default;`, not `"../webfonts" !default;`
* run `npm run start` for quickly working on the site as that shows your edits to pages live. It does not regenerate the styles or javascript automatically though, so if you need to edit that run the command again. 
* run `npm run build` when you're ready to commit back up to the website (or if serve is being weird). Somestimes start will change more files in docs than necessary, but build ensures you only commit what's necessary.
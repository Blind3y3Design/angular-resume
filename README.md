# [Angular Resume](https://blind3y3design.github.io/angular-resume/src/)

This project was inspired by the [JSON Resume](https://jsonresume.org/) project. The idea is that you create a standard JSON-based dataset, and then you can easily reuse that data across a multitide of templates without having to re-write your resume each time you wanted to update the look and feel. Any time you need to update any relevant data you can simply update the JSON and that data is accessible anywhere.

I decided to find a pre-built html resume template that I thought looked interesting and had an array of different data types. I chose to go with [Orbit](http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/) from #rd Wave Media because it was clean, responsive and had a number of differing data types and ways of displaying that data.

In this version of the resume we used angular to build out the template instead of handlebars. I used a pre-existing angular setup from [AccioCode](https://www.youtube.com/user/CDPAdvertising "Accio Code on YouTube") in order to speed up the build process. 

As with the [JSON Resume](https://blind3y3design.github.io/json-resume/) I pulled in all of the resume data from a single JSON file and then used angular to build out the page. Angular presented some challenges that were not present with handlebars. 
- I had to create an angular filter in order to prevent the summary content from being escaped. 
- I had to use `ng-class` and ternary operators in order to assign the icon classes for the social links in the sidebar.
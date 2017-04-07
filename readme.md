### Fort

This is an app I am developing in my free time. It is also a way to practice my node.js skills.

It uses a custom MVC framework which is easy to use. In the routes, you first declare the url, then the method (GET, PATH, etc.).
The third, forth and fifth options are optional, but you need at least one of them.
---
If you don't want a controller and just a standard EJS page to load, then leave the third option blank and declare the name of the ejs file in the fourth option. The fifth option is then required and you MUST provide a title.
---
If you want a controller, then specify the third option like this: 'controller@action'. The app will automatically provide the req and res variables do the controller.
This will always overide the option to render a template without using a controller. So you will need to use the controller to render views.
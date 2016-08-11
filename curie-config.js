"use strict";

module.exports = {
  name: "react",
  options: [
    {
      type: "checkbox",
      name: "options",
      message: "So what do you want in this thing?",
      choices: [{
        name: "React Router",
        value: "router",
        checked: true
      },
      {
        name: "Code Splitting",
        value: "splitting"
      }, {
        name: "Server Rendering",
        value: "server"
      },
      {
        name: "Flowtype",
        value: "flow"
      }]
    },
    {
      type: "list",
      name: "flux",
      message: "Which data/state lib do you wanna use?",
      "choices": [{
        name: "Redux",
        value: "redux",
        default: true,
      }, {
        name: "Mobx",
        value: "mobx",
      }, {
        name: "None",
        value: "none"
      }],
    }
  ],
  finished: function(options) {
    return `
 Application generation complete! Next steps:

${options.path !== '' && " - Enter your app directory by running 'cd " + options.path + "' "}
 - Run 'npm run dev' to start your dev server
 - Open your browser to http://localhost:3000
 - Write an amazing app!
  `;
  }
}

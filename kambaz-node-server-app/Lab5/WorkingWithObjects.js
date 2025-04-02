const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  };
const module = {
    id: "5610",
    name: "Introduction to Web Development",
    description: "This module covers the basics of web development.",
    course: "Web Development"
};
  export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });
    app.get("/lab5/assignment/title", (req, res) => {
      res.json(assignment.title);
    });
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
      const { newTitle } = req.params;
      assignment.title = newTitle;
      res.json(assignment);
    });
    // Route to update the score
    app.put("/lab5/assignment/score", (req, res) => {
      const { score } = req.body;
      assignment.score = parseInt(score);
      res.json(assignment);
    });

    // Route to update the completed property
    app.put("/lab5/assignment/completed", (req, res) => {
        const { completed } = req.body;
        assignment.completed = completed === "true";
        res.json(assignment);
    });

    // Route to update the module's description
    app.put("/lab5/module/description", (req, res) => {
        const { description } = req.body;
        module.description = description;
        res.json(module);
    });

    // Route to get the entire module object
    app.get("/lab5/module", (req, res) => {
      res.json(module);
    });

    // Route to get the name of the module
    app.get("/lab5/module/name", (req, res) => {
      res.send(module.name);
    });

    app.get("/lab5/module/name/:newName", (req, res) => {
      const { newName } = req.params;
      module.name = newName;
      res.json(module);
    });
  
  
  };
  
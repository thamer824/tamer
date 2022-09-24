const { Response, Namespace } = require("./common");
const { courseController } = require("../controllers");

const ns = new Namespace("/course", courseController, [
  // "create", // Disable default and implement manually to check tutor
  "list",
  "get",
  "update", // TODO: Must be implemented manually to check tutor
  "delete", // TODO: Must be implemented manually to check tutor
]);

// Create course
ns.router.route("/").post(async (req, res) => {
  try {
    const { title, description } = req.body;

    const course = await courseController.create({
      title,
      description,
      TutorId: parseInt(req.body.TutorId), // TODO: Must be detected from JWT or session
    });

    Response.data(res, course);
  } catch (error) {
    Response.error(res, error);
  }
});

// Search for courses by title and description
ns.router.route("/search").get(async (req, res) => {
  const { title, description } = req.body;

  try {
    const courses = courseController.search(title, description);
    Response.data(res, courses);
  } catch (error) {
    Response.error(res, error);
  }
});

module.exports = ns.base;

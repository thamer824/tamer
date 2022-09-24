const express = require("express");

class Response {
  constructor(data, error = undefined) {
    if (data) {
      this.data = data;
    }

    if (error) {
      this.error = error;
    }
  }

  static data(res, data) {
    const response = new Response(data);
    return res.json(response);
  }

  static error(res, error, code = 500) {
    const response = new Response(undefined, error);

    // Log error
    console.error(error);

    return res.status(code).json(response);
  }
}

function genCrud(router, controller, crud = undefined) {
  let _crud;

  if (crud === false) {
    return router; // Ignore CRUD generation
  } else if (!crud) {
    _crud = ["create", "list", "get", "update", "delete"];
  } else {
    _crud = crud;
  }

  if (_crud.includes("create") && controller.create) {
    router.route("/").post(async (req, res) => {
      try {
        const record = await controller.create(req.body);

        Response.data(res, record);
      } catch (error) {
        Response.error(res, error);
      }
    });
  }

  if (_crud.includes("list") && controller.getList) {
    router.route("/").get(async (req, res) => {
      try {
        const records = await controller.getList();

        Response.data(res, records);
      } catch (error) {
        Response.error(res, error);
      }
    });
  }

  if (_crud.includes("get") && controller.getById) {
    router.route("/:id").get(async (req, res) => {
      try {
        const id = req.params.id;
        const record = await controller.getById(id);

        Response.data(res, record);
      } catch (error) {
        Response.error(res, error);
      }
    });
  }

  if (_crud.includes("update") && controller.updateById) {
    router.route("/:id").put(async (req, res) => {
      try {
        const id = req.params.id;
        const record = await controller.updateById(id, req.body);

        Response.data(res, record);
      } catch (error) {
        Response.error(res, error);
      }
    });
  }

  if (_crud.includes("delete") && controller.deleteById) {
    router.route("/:id").delete(async (req, res) => {
      try {
        const id = req.params.id;
        const record = await controller.deleteById(id);

        Response.data(res, record);
      } catch (error) {
        Response.error(res, error);
      }
    });
  }

  return router;
}

class Namespace {
  constructor(path, controller, cruds = undefined) {
    this.path = path;
    this.base = express.Router();

    if (path === "/") {
      this.router = this.base;
    } else {
      this.router = express.Router();
    }

    genCrud(this.router, controller, cruds);

    if (path !== "/") {
      this.base.use(path, this.router);
    }
  }
}

module.exports = {
  Response,
  genCrud,
  Namespace,
};

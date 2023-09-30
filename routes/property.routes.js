const { application } = require("express");
const express = require("express");
const jwt = require("jsonwebtoken");
const propertyRoutes = express.Router();
module.exports = propertyRoutes;

//Post Method
propertyRoutes.post("/property", PropertyCtrl.Add);

propertyRoutes.get("/property", PropertyCtrl.GetAllOwner);
//Get all Method
propertyRoutes.get("/property-list", PropertyCtrl.GetAll);

//Get by ID Method
propertyRoutes.patch("/property/:id", PropertyCtrl.Update);


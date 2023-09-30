const { application } = require("express");
const express = require("express");
const jwt = require("jsonwebtoken");
const ownerRoutes = express.Router();
module.exports = ownerRoutes;

//Post Method
ownerRoutes.post("/signup", OwnerCtrl.Add);

ownerRoutes.get("/login", OwnerCtrl.GetAllOwner);
//Get all Method


const express = require('express')
const router = express.Router();
const {getContacts , createContact,deleteContact,updateContact,getContact} =require("../controllers/contact.controller.js")
// console.log(typeof(getContacts));
router.route("/").get(getContacts).post(createContact)//mutliple http methods per route
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)
// router.route("/:id").put(updateContact)
// router.route("/:id").delete(deleteContact)

//exprot it 
module.exports = router;
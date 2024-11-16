const express = require("express");
const router = express.Router();
const {
  addContact,
  getContacts,
  updateContact,
  deleteContact,
} = require("../controller/contactController");

router.post("/", addContact);
router.get("/", getContacts);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

module.exports = router;

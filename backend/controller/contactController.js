const contactModel = require("../models/contact");

const addContact = async (req, res) => {
  const { firstName, lastName, email, phone, company, jobTitle } = req.body;
  try {
    const contact = new contactModel({
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
    });
    const createdContact = await contact.save(); 
    res
      .status(200)  
      .json({ message: "Contact added successfully", createdContact });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to create contact", error: error.message });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await contactModel.find(); 
    res.status(200).json({ message: "Successfully got Contacts", contacts });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to get contacts", error: error.message });
  }
};

const updateContact = async (req, res) => {  
  const { id } = req.params;
  const { firstName, lastName, email, phone, company, jobTitle } = req.body;
  try {
    const updatedContact = await contactModel.findByIdAndUpdate(
      id,
      { firstName, lastName, email, phone, company, jobTitle },
      { new: true, runValidators: true }
    );
    if (!updatedContact) {
      throw new Error("Contact not found");
    }
    res
      .status(200)
      .json({ message: "Contact updated successfully", updatedContact });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to update contact", error: error.message });
  }
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedContact = await contactModel.findByIdAndDelete(id);
    if (!deletedContact) throw new Error("Contact not found");
    res
      .status(200)
      .json({ message: "Contact deleted successfully", deletedContact });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to delete contact", error: error.message });
  }
};

module.exports = { addContact, getContacts, updateContact, deleteContact };  

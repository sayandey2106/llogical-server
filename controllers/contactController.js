const ContactModel = require('../model/contactModel')

module.exports = {
    contact: async (req, res) => {
        const { name, email, mobileNo, message } = req.body
        if (!name || !email || !mobileNo || !message) {
            return res.status(400).json({ message: 'name , email , mobile number , message is required' })
        }
        const contact = await ContactModel.create({
            name,
            email,
            mobileNo,
            message
        })
        if (!contact) {
            res.status(400).json({ message: "unable to create conatct us now " })
        }
        res.json({ message: "thank you for contact us", data: { id: contact.id } })
    }
}
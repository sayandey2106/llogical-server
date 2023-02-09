const ContactModel = require('../model/contactModel')

module.exports = {
    contact: async (req, res) => {
        try {
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
        } catch (error) {
            console.log(error)
            return res.status(500).json({message : error.message})
        }
    },
    getallcontact: async (req, res) => {
        try {
            const find = await ContactModel.find(req.query)
            res.json({ message: 'contacts Found', data: find })
        } catch (error) {
            console.log(error)
            return res.status(500).json({message : error.message})
        }
    }
}
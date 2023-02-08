const MockTest = require('../model/mockTestModel')

module.exports = {
    createMockTest: async (req, res) => {
        const { name, email, grade, date, time, school, board, address, mobileNo } = req.body;
        if (!name || !email || !grade || !date || !time || !school || !board || !address || !mobileNo) {
            return res.status(400).json({ message: ' name, email, grade , date, time, school, board, address, mobileNo  are required!' });
        }
        try {
            const mocktest = await MockTest.create({
                name: name,
                email: email,
                mobileNo: mobileNo,
                date: date,
                address: address,
                time: time,
                grade: grade,
                board: board,
                school: school
            })
            if (!mocktest) {
                return res.status(500).json({ error: 'Cannot create the Mock Test at the moment!' });
            }
            const Details = {
                id: mocktest._id,
                name: mocktest.name,
            }

            res.json({
                message: 'Mock Test Creation Successful!!',
                data: Details
            });
        } catch (error) {
            console.log(error)
        }
    },
    deleteMockTest: async (req, res) => {
        const id = req.params.id
        if (!id) {
            return res.status(400).json({ message: 'Mock test id required!' });
        }
        const find = await MockTest.findOne({ _id: id });
        if (!find) {
            return res.status(404).json({ message: 'Mock test not found' });
        }
        const deleteMockTest = await MockTest.findByIdAndDelete(id);
        if(deleteMockTest){
            return res.status(400).json({ message: 'Unable to Delete Mock Test' });
        }
        res.json({ message: "Mock test deleted successfully" })
    },
    updateMockTest: async (req, res) => {
        const id = req.params.id
        if (!id) {
            return res.status(400).json({ message: 'Mock test id required!' });
        }
        const find = await MockTest.findOne({ _id: id });
        if (!find) {
            return res.status(404).json({ message: 'Mock test not found' });
        }
        const updateMockTest = await MockTest.findByIdAndUpdate(id, req.body);
        if(!updateMockTest){
            return res.status(400).json({ message: 'Unable to Update Mock Test' });
        }
        res.json({ message: "Mock Test updated successfully" })
    },
    getAllMockTest: async (req, res) => {
        const find = await MockTest.find({})
        res.json({ message: 'Mock Test Found', data: find })

    },
    getMockTestById: async (req, res) => {
        const id = req.params.id
        if (!id) {
            return res.status(400).json({ message: 'Mock test id required!' });
        }
        const find = await MockTest.findOne({ _id: id });
        if (!find) {
            return res.status(404).json({ message: 'Mock test not found' });
        }
        res.json({ message: 'Mock Test Found', data: find })
    }
}
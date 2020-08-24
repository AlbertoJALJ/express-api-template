let users = {}

users.index = async (req,res) => {
    res.send('Welcome')
}
users.post = async (req,res) => {
    res.send(req.body)
}

module.exports = users
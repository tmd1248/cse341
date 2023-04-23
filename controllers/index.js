const responseFunction = (req, res, next) => {
    res.json("Hi my person is Madelyn, my sister!");
};

module.exports = {responseFunction};
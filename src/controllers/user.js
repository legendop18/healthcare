
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const getuser = await User.findOne({ email, password });

        if (!getuser) {
            res.status(400).json({
                success: false,
                message: "user does not exist",

            })
        };

        const matchpassword = bcrypt.compare(password,User.password)

        if (!matchpassword) {
            res.status(404).json({
                success: false,
                message: "Incorrect password"
            })
        };

        res.status(201).json({
            message: "login succesfull",
            success: true,
            getuser
        })

    } catch (error) {
        console.log(error)
        res.status(404).json({message:"login error"})
    }
}
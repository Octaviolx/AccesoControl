const User = require('../models/user')
const Form = require('../models/form')

// Authorizations procession here

 // This function is for user login 

const login = async (req, res) => { 

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email, password });

        if (!user) {
            console.log(`user haves invalid credentials`);
            console.log(user)
            return res.status(404).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        console.log(`user compared successfully`);

        return res.status(200).json({
            success: true,
            message: 'Sign-in successful'
        });

    } catch (error) {
        console.log(`An error has ocurred`);
        return res.status(500).json({
            success: false,
            message: 'An error occurred'
        });
    }

}

// This function is for registering

const register = async (req, res = response) => {
    try {
        const { email, password } = req.body

        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                success: false,
                message: 'A user already exists with this email'
            })
        }
        
        user = new User({email, password});


        //encriptar contraseña
        // const salt = bcrypt.genSaltSync();
        // user.password = bcrypt.hashSync(password, salt)

        await user.save();

        //generar jwt
        //const token = await generateJwt(user.id, user.name)

        //res.status(201).json({
         //   ok: true,
          //  uid: user.id,
          //  name: user.name,
          //  token,
        // })

        // Ver el tema de la encripcion

        return res.status(201).json({
            success: true,
            message: 'Registration successful',
          });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: true,
            message: 'An error ocurred',
        })
    }
}

//This function is for the form (planillas) function

const uploadform async (req, res = response) => {

    const { email, password, additionalData } = req.body;


    //Username and Password given are compared in the database

    try {

        const user = await User.findOne({ email, password });

        if (!user) {
            console.log(`user haves invalid credentials`);
            console.log(user)
        }

        console.log(`user compared successfully`);

    } catch (error) {
        console.log(`An error has ocurred`);
        return res.status(500).json({
            success: false,
            message: 'An error occurred'
        });
    }

    //If username given exists, either a new form is created for them or their already existing one is updated

    console.log('user exists in the database');

    //NO SOBRESCRIBIR NAME. solo password y additional data (esta ultima va a tener mas de 1 item )


}








//Functions export
module.exports = {
    login,
    register,
    uploadform
}
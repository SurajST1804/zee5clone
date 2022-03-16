const AuthSchema = require("../models/Auth");
const bcrypt = require("bcryptjs");
const { JWT_COOKIE_EXPIRE } = require("../config/index");
/*@http req method post
@access public 
@url api/auth/signup*/

exports.SignUp = async (req, res) => {
  // write sigmup logic here
  let { username, email, role, password } = req.body;
  try {
    let payload = { username, email, role, password };
    let user = await AuthSchema.create(payload);
    // let TOKEN = data.getJWTtoken();
    // res.status(201).json({ message: "Successfully user created", TOKEN });
    sendTokenResponse(user, 201, res);
    console.log(user);
  } catch (error) {
    console.log(error);
    res.status(501).json("Server error");
  }
};

/*@http req method post
@access public 
@url api/auth/signin*/

exports.SignIn = async (req, res) => {
  // write sigmup logic here
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and Password Required" });
    }
    // check user email exist or not
    // fetching data from database
    let user = await AuthSchema.findOne({ email }).select("+password");
    if (!user) {
      return res
        .status(401)
        .json({ message: "Email Not Exits In oufr Database" });
    }

    // check password
    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Passwored Not Match" });
    }
    // let TOKEN = user.getJWTtoken();
    // res.status(201).json({ message: "Successfully logged In", TOKEN });
    sendTokenResponse(user, 201, res);
  } catch (error) {
    return res.status(501).json({ message: "Server Error" });
  }
};

function sendTokenResponse(user, statusCode, res) {
  let token = user.getJWTtoken();
  let options = {
    expires: new Date(Date.now() + JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  res
    .status(statusCode)
    .cookie("TOKEN", token, options)
    .json({ message: "successfully cookie stored", token });
}

exports.getMe = async (req, res, next) => {
  try {
    let user = await AuthSchema.findById(req.user.id);
    res.status(200).json({ message: "Successfully fetched", user });
  } catch (error) {
    res.status(501).json({ message: "Server error" });
  }
};

exports.Logout = async (req, res) => {
  try {
    let user = await AuthSchema.findOne(req.user);
    console.log(user);
    expireTokenResponse(user, 201, res);
  } catch (error) {
    console.log(error);
  }
};

function expireTokenResponse(user, statusCode, res) {
  let token = user.getJWTtoken();
  let options = {
    expires: new Date(0),
    httpOnly: true,
  };
  res
    .status(statusCode)
    .cookie("TOKEN", token, options)
    .json({ message: "Successfully token deleted" });
}

exports.dynamicData = (req, res) => {
  let data = [
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3444/portrait/1920x77000fb0aef19c44cba86897d8612b2758cbbab3c59cedd49a4b6d9a0f01eab56b5.jpg",
      description: "Break Point",
      buttonText: "watch",
    },
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-tvshow_984782182/portrait/06tvshow984782182incove.jpg",
      description: "Karenjit Kaur",
      buttonText: "watch",
    },
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-974/portrait/06974cover.jpg",
      description: "Jodha Akbar - Quick Recap",
      buttonText: "watch",
    },
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z51037/portrait/1920x770fe734f03103940239299810a07731993.jpg",
      description: "Train to Busan Presents: Peninsula",
      buttonText: "watch",
    },
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-122736/portrait/1920x77052d26ebbbbe84965ba5a44b5018e3881.jpg",
      description: "Hotel Mumbai",
      buttonText: "watch",
    },
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-manual_14f6f12ndhmo/portrait/1920x7701253328845.jpg",
      description: "Timeless Treasure",
      buttonText: "watch",
    },
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z571846/portrait/1920x770cdd0cb64f2eb453bb2c879868e201adb88d5717209b24798a5058fc6fbdde4c5.jpg",
      description: "Garuda Gamana Vrishabha Vahana",
      buttonText: "watch",
    },
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z587327/portrait/1920x77050a97119c23e45af93fcc383af7a2f5e.jpg",
      description: "100",
      buttonText: "watch",
    },
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z560890/portrait/1920x7707b2b6b9f455e4c75aff88be953d813504208f626bd9f433b866c6819010b9985.jpg",
      description: "Bhajarangi 2",
      buttonText: "watch",
    },
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-movie_2078675568/portrait/1920x770674969995.jpg",
      description: "Mufti",
      buttonText: "watch",
    },
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-51732/portrait/0051732incove17446094671744b766305e9ecc4d5f9c8f38b0053fcba6.jpg",
      description: "Natasaarvabhowma",
      buttonText: "watch",
    },
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z553807/portrait/1920x770a865b56847a8446786ba50210823077b78c7ca8c9d2e430994957d1ccc08f770.jpg",
      description: "Puksatte Lifu",
      buttonText: "watch",
    },
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-1734/portrait/1920x77033ffb77772f64aadad5e7e413bba9c17.jpg",
      description: "Auto Shankar",
      buttonText: "watch",
    },
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-1958/portrait/061958incover.jpg",
      description: "Poison",
      buttonText: "watch",
    },
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-2270/portrait/1920x770645879602645879602ed3459b915754f5dadabc8c60cc242a6.jpg",
      description: "Jamai 2.0",
      buttonText: "watch",
    },
  ];
  try {
    res.status(200).json({ message: "sucessfulley fetch", data });
  } catch (err) {
    res.status(501).json({ message: "server error" });
  }
};

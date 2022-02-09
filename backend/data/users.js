import bcrypt from "bcryptjs"; // bycrptjs is good for hashing passwords docs: https://www.npmjs.com/package/bcryptjs 
//bcryptjs better than bcrypt becuase has less dependencies 



const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10), //passwords need to be hashed f1st arugment is the password and the 2nd is how many rounds the higher rounds more secure
        isAdmin: true
    },
    {
        name: 'Larry David',
        email: 'larrydavid@example.com',
        password: bcrypt.hashSync('123456', 10) 
        //isAdmin is false by default
    },
    {
        name: 'Bruce Wayne',
        email: 'brucewayne@wayneenterprizes.com',
        password: bcrypt.hashSync('123456', 10)

    },
];

export default users;
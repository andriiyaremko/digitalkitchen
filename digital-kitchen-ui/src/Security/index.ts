import bcrypt from 'bcryptjs';

const salt = '$2a$10$StaticSaltExample1234567890';

const handleHashPassword = async (password:string) => {
    try {
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (err) {
        console.error('Error hashing password:', err);
        return "Error occurred";
    }
};

export default handleHashPassword;
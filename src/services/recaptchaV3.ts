import axios from "axios";

export const verifyRecaptchaV3 = async (data:{token:string, form:string})=>{
  const { token, form} = data
  console.log(token);
let success = true
      const SECRET_KEY_v3 = '6Lf3BtEpAAAAAAw1UyiWomtRsaYhnFXB6x2yDmwW'
      const recaptchaResponse = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY_v3}&response=${token}`);

      
      if (!recaptchaResponse.data.success || recaptchaResponse.data.score < 0.5 || recaptchaResponse.data.action !== form) {
        success = false
      }

      // Authenticate with email and password

      return {
        valid: success
      };

    }
import React from 'react'

export const checkValidateData = (email,password) => {
 const isEamilValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
 const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

 if(!isEamilValid) return "Email Id is not valid."
 if(!isPasswordValid) return "Password is not valid."

 return null;
};


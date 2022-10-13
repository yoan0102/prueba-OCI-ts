import jwt from "jsonwebtoken"

export const generateToken = (uid: any) => {
  const expiresIn = 60 * 15
  try {
    const token = jwt.sign({ uid }, process.env.JWT_SECRET || 'secret', {
      expiresIn,
    })
    console.log(token);
    

    return { token, expiresIn }
  } catch (error) {
    console.log(error)
  }
}
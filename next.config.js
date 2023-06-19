/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  env:{
    DB_CONNECT_URI : "mongodb+srv://hparashar617:hparashar27@cluster0.risvet9.mongodb.net/",
    NEXTAUTH_SECRET : "bookitapp",
    GOOGLE_CLIENT_ID : "894755424741-f962k420k0np638eetrd0gubk4nq4jh8.apps.googleusercontent.com",
    GOOGLE_SECRET_ID : "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",
  },
  images:{
domains : ['res.cloudinary.com']
  }
   
}

module.exports = nextConfig

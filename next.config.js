/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  env:{
    DB_CONNECT_URI : "mongodb+srv://hparashar617:hparashar27@cluster0.risvet9.mongodb.net/"
  },
  images:{
domains : ['res.cloudinary.com']
  }
   
}

module.exports = nextConfig

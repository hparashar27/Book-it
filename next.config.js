/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  serverTimeout: 10000, // set timeout to 10 seconds
  env :{
    DB_CONNECT_URI : "mongodb+srv://hparashar617:hparashar27@cluster0.risvet9.mongodb.net/"
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true
    },
    eslint:{
           ignoreDuringBuilds:true
    },
    typescript:{
        ignoreBuildErrors:true
    },
    images:{
       domains :['uploadthing.com']
    }
}

module.exports = nextConfig

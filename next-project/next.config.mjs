/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{},
    typescript:{
        ignoreBuildErrors:true,
    },
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'raw.githubusercontent.com',
                port:'',
                pathname: '/Suntoh/blogpost/master/images/**'
            },
        ],
    },
};

export default nextConfig;

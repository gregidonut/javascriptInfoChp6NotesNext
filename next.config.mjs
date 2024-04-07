/** @type {import('next').NextConfig} */
import m from '@next/mdx'
const withMDX = m()

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below
}

export default withMDX( nextConfig );


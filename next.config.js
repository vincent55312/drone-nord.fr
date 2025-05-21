/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Désactiver les vérifications ESLint pendant la compilation
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Désactiver la vérification des types TypeScript pendant la compilation
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 
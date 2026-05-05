/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Isso gera a pasta 'out' ao rodar o build
    images: {
      unoptimized: true, // O GitHub Pages não suporta a otimização de imagem nativa do Next.js
    },
  };
  
  module.exports = nextConfig;
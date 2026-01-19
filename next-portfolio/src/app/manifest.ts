import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tostes | Desenvolvedor Full Stack',
    short_name: 'Tostes.Dev',
    description: 'Transforme sua ideia em software premium com Alessandro Tostes.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#21808d',
    icons: [
      {
        src: '/img/iconetostes.webp',
        sizes: 'any',
        type: 'image/webp',
      },
    ],
  }
}

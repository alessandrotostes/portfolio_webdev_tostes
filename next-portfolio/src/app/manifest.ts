import { MetadataRoute } from 'next'

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tostes | Desenvolvedor Full Stack',
    short_name: 'Tostes.Dev',
    description: 'Transforme sua ideia em software premium com Alessandro Tostes.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090d16',
    theme_color: '#6366f1',
    icons: [
      {
        src: '/img/logo.webp',
        sizes: 'any',
        type: 'image/webp',
      },
    ],
  }
}

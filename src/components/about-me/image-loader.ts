import type { ImageInfo } from '../ui/photo-card';

export function loadImages(): ImageInfo[] {
  return Object.entries(
    import.meta.glob('@/assets/images/about_me/*.{png,jpg,jpeg}', {
      eager: true,
    })
  ).map(([path, module]) => ({
    src: (module as { default: string }).default,
    alt: path.split('/').pop()?.split('.')[0] || 'About me image',
  }));
}

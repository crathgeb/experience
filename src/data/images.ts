import { ImageInfo } from '@/components/ui/photo-card';

export function loadImages(
  imports: Record<string, unknown>,
  defaultAlt: string
): ImageInfo[] {
  return Object.entries(imports).map(([path, module]) => ({
    src: (module as { default: string }).default,
    alt: path.split('/').pop()?.split('.')[0] || defaultAlt,
  }));
}

export function aboutMe(): ImageInfo[] {
  const imports = import.meta.glob(
    '@/assets/images/about_me/*.{png,jpg,jpeg}',
    { eager: true }
  );

  return loadImages(imports, 'About Me');
}

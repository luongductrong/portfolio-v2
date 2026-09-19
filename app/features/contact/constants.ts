import Mail from '@/components/icons/Mail.vue';
import GitHub from '@/components/icons/GitHub.vue';
import GitLab from '@/components/icons/GitLab.vue';
import LinkedIn from '@/components/icons/LinkedIn.vue';

// @export
export const FORM_ENDPOINT = 'https://formspree.io/f/xzepdoea';

// @export
export const gmail = {
  url: 'mailto:luongductrong2004@gmail.com',
  value: 'luongductrong2004@gmail.com',
};

// @export
export const socials = [
  {
    platform: 'GitHub',
    url: 'https://github.com/luongductrong',
    icon: GitHub,
  },
  {
    platform: 'GitLab',
    url: 'https://gitlab.com/luongductrong',
    icon: GitLab,
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/luongductrong2004/',
    icon: LinkedIn,
  },
  {
    platform: 'Gmail',
    url: gmail.url,
    icon: Mail,
  },
];

// @export
export const networkSocials = socials.filter((social) => social.platform !== 'Gmail');

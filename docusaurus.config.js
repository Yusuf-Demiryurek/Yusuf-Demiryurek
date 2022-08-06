// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yusuf Demiryurek',
  tagline: 'Développeur Full Stack',
  url: 'https://Yusuf-Demiryurek.github.io',
  baseUrl: '/Yusuf-Demiryurek/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Yusuf-Demiryurek', // Usually your GitHub org/user name.
  projectName: 'Yusuf-Demiryurek', // Usually your repo name.
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'YD',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {to: '/#presentation', label: 'Presentation', position: 'left', activeBasePath: 'docs/null',},
          {to: '/#competence', label: 'Compétences', position: 'left', activeBasePath: 'docs/null',},
          {to: '/#portfolio', label: 'Portfolio', position: 'left', activeBasePath: 'docs/null',},
          {to: '/blog', label: 'Blog', position: 'left', activeBasePath: 'docs/null',},
          {to: 'https://yusuf-demiryurek.github.io/Yusuf-Demiryurek/assets/files/CV-Yusuf-DEMIRYUREK-25420daba4a6faa45792da0851958bd6.pdf', label: 'Mon CV', position: 'right'},
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            items: [
              {
                // label: 'Linkedin',
                // href: 'https://www.linkedin.com/in/yusufde/',
                  html: `
                      <a href="https://www.linkedin.com/in/yusufde/" target="_blank" rel="noreferrer noopener" aria-label="Linkedin">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGmSURBVHgB7ZcxSAJhFMf/dziYDkYGQURKQ0Mg1lhgQWs2BkJBWxK0RENQDQY1tLlE5VTQ1KrR1qDh0lAuRQ6hDUHQgTdoBXpf9x3d4ekpXt1dQfeb3vs+5f3v/97jOOC/w8iBe/lqkVSFuHjSDXMpMCCxcmLqhCasfCrUhJgFxSl+AiYuJ4oA0Qo/rEN5UEfLX7gcmAl6wb9VkbrlYBYtBWS3xuDzOqW4yL1jfOcGfKUKo2G1DsOjXqU4hcbhYA/MQFOAp6vZGL4iwDIBqRwn2S5D41TuFWagOQO01yMb11IrqBvnuV8YQore6aebExhwS/ET96FyUbeA8lFIlbujGc27zEMJkcN77M0NYWGiT/WfTJ5H9DjfVgiLHzLY65RWtrE4JTTswcVaAB6XwzwBdEXrV1brfmW6H6YJkEmLrdhNFnGafWm6m9dwR6btEHZKUhzWyMGdktOeb876lLydQ4Y4sH72qMr3L5/RKYYIaJxyPe8Mw2bgu9gCbAG2AOW7wLWUJrCQSmJSqv2HWkBQgmWQAhoFCKitkroL82qTEsMy27D54hPpKH9SD6G82gAAAABJRU5ErkJggg==" alt="Linkedin" />
                      </a>
                      `  
              }
            ],
          },
          {
            items: [
              {
                // label: 'GitHub',
                // href: 'https://github.com/Yusuf-Demiryurek',
                html: `
                <a href="https://github.com/Yusuf-Demiryurek" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANTSURBVHgBvVeNTdtAFH7vbCilUptuYFQihUhNzQQJEzSZoGSChgkIEwATNJ0AmICM4ISKWCKoHiGtVDUCn1/v2cRx4nNIcNRPgpzvnd/fvT8jLAnLsgrGVqEOQlaR0AYECwgKIRFhpNYeITkQYFeOf195njdahi8+K7hUsgzcaCPi51jgElDKdGTweOK5rgcvUYAtNl+/PVbLFuSBoDP/j3Hiec5oaQUiqzevFdGCNYAAPEkPBzpviPmNYrlsr1M4g3kxz2KxbGtoU6zb8nnoPBF7IIzyOeH8gvp/Gf2uCJUZRNRRK2e6FXnCsuxCSgEOuJTlBO3h4KZxP+jvKGbNWBFOu5AxdeO/aO9JMBwOb/vv792bJlBwNKsXWOYbeZx4jlxv4ubPlBG+2L+7c2ILLFtpPh4XslLLKtkWjGGUjHjeMzFI8fbpYYf5mPzAea5j+GjATOp4Tsg4s8B4ruPBkjDEBnuhKdgqBPyiPQSyBjlhZgS0qqZ1jgVhjGVddyCMWDC6kBP+FjgZQaxKu6wLFQU10GvQXsWlWeBrQwqaeqqoClXjP+lIciyuYE0Yuj+mWZIACrI5Da15Arssq3bngAdpQZZYpcPlApHOoIKA/wVEraFCezdhZbbX6xkCW7M7Yg94uvPGtqzCmrBbsmtaAoInKICelkY5B5EECOWhdj9AR0TNRKtCbXevkluJ4l7la1alZdlCbhmXujh4wuluuXIMOYSrlD7LonOtCbvhh71KRy0iLQlOwukW8HTSnrkuKFedEYne0HW6sEho0bbBDKqEcJgReJEYws6922s+teNpywzrtqQjuW10zYfgOs0EL4eDXkPHdLf88UJdeB2WgE9ih0t9WAd4oQSfh+yVPmjgN+77fiAaqUZC8jyTa0DZtCQLJWvSZ+JCJF+JdkIYj2ctPiRJHPALPF4p5VphXc/AIlpCuCf/ivbkeW4otdXMFsRzIfq+mohuHVgBKnNooXBlULLLpr4LeCwPyLyIA1B94QhCJyDxS2Dw7m7QP3+JAmEgo2goe2YMyvgwmfVEEsNBH1dVQGf5BNpmxAd5EuaUhJzg+FF3vp813CzshkO33+Z0UUy+w7LgohaO5tjhd5UhrbXMFtwdeXx/9py6vlU66T98qp4a9HCubgAAAABJRU5ErkJggg==" alt="GitHub" />
                </a>
                `  
              },
            ],
          },
          {
            items: [
              {
                // label: 'CodinGame',
                // href: 'https://www.codingame.com/profile/da781273c752a1c57bcddfb989704bb11112374',
                html: `
                <a href="https://www.codingame.com/profile/da781273c752a1c57bcddfb989704bb11112374" target="_blank" rel="noreferrer noopener" aria-label="CodinGame">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAYFBMVEX/0gD90QAzMyYuMCaAcBc4OCR6axggJSklKSj6zgGNeRXatgfqwgRQSiD1ygJDQCNkWhzzyQK4mw3EpQt1ZxqjixGskg+GdRbhuwZGQiKYghO/oAzMqwmpkBBZUR/txANNOdpLAAAAqklEQVQYGcXBR5bCMBQEwLYtqSVnmxxmuP8t0ROYDb/XVOF3xlDXpwRtz8xBSpFZAy0ya6A5Zg5aar1vE771x/Z0XKAsITKr77D1E188TNU/Nx0sO350sDhu4gjLzM0M08S35gxLz7dLB9OVxfSXYOobknHeVbAtAxnDGcpjIIcO0lqTIUGo1oFkC9t4c55ZgBBZXBIEvqxQWPgKCos9JBZXSCwOkFgcoDwBt3EIc30KA/oAAAAASUVORK5CYII=" alt="CodinGame" />
                </a>
                `
              },
            ],
          },
          {
            items: [
              {
                // label: 'YouTube',
                // href: 'https://www.youtube.com/channel/UCUOEvY8gjVMDVuukW3DH7ig',
                html: `
                <a href="https://www.youtube.com/channel/UCUOEvY8gjVMDVuukW3DH7ig" target="_blank" rel="noreferrer noopener" aria-label="YouTube">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzNCMzQ2OTE4RjRDMTFFNzk0NkJBQjFBRkY5OTYyN0YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzNCMzQ2OTI4RjRDMTFFNzk0NkJBQjFBRkY5OTYyN0YiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMzQ0MUZDNDhGNEMxMUU3OTQ2QkFCMUFGRjk5NjI3RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozM0IzNDY5MDhGNEMxMUU3OTQ2QkFCMUFGRjk5NjI3RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvLSNusAAAKBSURBVHja7JdNTxNxEMZ/3b6BWA1CPYAvSBrSRC6GC0ajCYleOEHCyRufgQT4DnwCwsEDXogHr0aMicaoIdAISMAGGyGiSZVgUaEt7Ti73eLGC+y2tgeZZNLN7s7Mk//OPPPUJyLU0wzqbCcAAtls1rooqu+pH9gPQg6EZ/687zsCtNiprDw/HDfzjnyNZuEygHg8bj00b9yBa73Q2wadnRANQrP66Qg0aOUG+7WQnfNvM8EV1HNmPc2Z3YZ9E8cv2NmAr59hYwkWn8KLb5ojXI48B02P4L5CL2hm+de+AM/icKl0BIr8iRavRWGnr8LziHmad6FHbxzUGoDpA9Bn3ICbehD+ekzALbhudEG8XiMYgy7jMrS7iopGYXxc56O5YgAt0EYSXrr6dtGoSD4vkkyKDA5W1AMfYQHtxiVXga2tIum0HNrMjEgs5gnAFqwZDtLzZkNDMDcHIyOayV0qBXGKNVit6ASclkiI9PcfO5cy45YRLFFodayjQ1u63dUmNHLVKj41Bd3dMDl57BBdWBJwLEBvNj8PY2MwO+slep/38Np1D+RyIpmMyOioSDjseQx1ChYDGdh2hdmvrD09DRMTsLJS0eEpgJ3AB/3tcROVTsPwcFXa5jt8MVKYX8GFFYtVGxotvG680R6o1zJKKIXRBMG38LjWWkBJ6N0FiFhIrip9LKtCqVXxT7DcZ5VVFgyHw5i6+Lyqs3swoOrktnLZlYu6LZUizyq7N7aU9kXQFqX+o/nFEqd5FZ45Jbo9LZrZ1GnT9t3UrfHqATxch11TlPpSqdRh1E+bHs1qkZLM9et1yAYQ8AggrwAKu7Y0L9iyvLy2fCf/Df97AL8FGADezLVaLkUivwAAAABJRU5ErkJggg==" alt="YouTube" />
                </a>
                `
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yusuf Demiryurek, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

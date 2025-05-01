import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Raptors",
  subTitle: "Segundo aniversario 25 Mayo",
  brandTitle: "Raptors",

  description: "Rueda con nosotros en nuestro 2° Aniversario",

  site: "https://raptors-one.vercel.app",

  locale: "en", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    }
  ],

  username: "Raptors Morelia",
  sign: "Unete!",
  avatarUrl: "https://i.postimg.cc/YCVSV8Xq/Raptors-2510.png",
  socialLinks: [
    {
      icon: "line-md:facebook",
      link: "https://www.facebook.com/profile.php?id=61551506633346",
    },
    {
      icon: "line-md:instagram",
      link: "https://www.instagram.com/raptorsmorelia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      icon: "mingcute:whatsapp-line",
      link: "https://wa.me/524433721771?text=Hola%2C%20encontr%C3%A9%20a%20los%20Raptors%20en%20la%20web%20y%20me%20gustar%C3%ADa%20rodar%20con%20ustedes",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://i.postimg.cc/fTyJ16nb/Primera-en-la-rana.jpg",
    "https://i.postimg.cc/wMYTBPhw/Grupal24.jpg",
    "https://i.postimg.cc/mgJd0SCK/Cesar.jpg",
    "https://i.postimg.cc/SKtjPNZV/Retocaja24.jpg",
    "https://i.postimg.cc/pVJ6pzMn/Beto.jpg",
    "https://i.postimg.cc/jSLgg1wz/Luis-Abraham.jpg",
    //"https://i.postimg.cc/Qx6YqDt8/Hermanos.jpg",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://postimg.cc/PPfCFRfr",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;

const {
  spacing
} = require('tailwindcss/defaultTheme');

const colors = require('tailwindcss/colors');

const hyvaModules = require('@hyva-themes/hyva-modules');

module.exports = hyvaModules.mergeTailwindConfig({
  theme: {
    extend: {
      fontSize: {
        'sm12': ['12px', '14px'],
        'sm14': ['14px', '20px'],
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px' // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        sans: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        RalewayR: ["Raleway-r"], // font-weight: 500;
        RalewayB: ["Raleway-b"], // font-weight: 600;
      },      
      colors: {
        'th-primary': {
          'default': 'var(--theme-heading-text-color, #333333)', // Maps to --theme-border-color
          'lighter': 'var(--theme-heading-text-color, #757575)', // Maps to --theme-heading-text-color
          'darker': 'var(--theme-text-color, #333333)', // Maps to --theme-text-color
        },
        'th-secondary': {
          'darker': '#F9F9F9', // Static value
          'lighter': '#EBEBEB', // Static value
        },
         'white-overlay': '#FDFDFD33',
         'blue-overlay': '#354DC380',
        primary: {
          lighter: colors.blue['300'], // Static value
          "DEFAULT": 'var(--header-top-notification-background-color, #333333)', // Maps to --header-top-notification-background-color
          darker: colors.blue['900'] // Static value
         
        },
        secondary: {
          lighter: colors.blue['100'], // Static value
          "DEFAULT": colors.blue['200'], // Static value
          darker: colors.blue['300'], // Static value
        },
        background: {
          lighter: colors.blue['100'], // Static value
          "DEFAULT": colors.blue['200'], // Static value
          darker: colors.blue['300'], // Static value
        },
        green: colors.emerald, // Static value
        yellow: colors.amber, // Static value
        purple: colors.violet, // Static value
        gray: {
          700: 'var(--theme-text-color, #333333)', 
        },
      },
      textColor: {
        orange: colors.orange, // Static value
        red: {
          ...colors.red,
          "DEFAULT": colors.red['500'], // Static value
        },
        primary: {
          lighter: 'var(--theme-text-color, #333333)', // Maps to --theme-text-color
          "DEFAULT": 'var(--theme-text-color, #333333)', // Maps to --theme-text-color
          darker: 'var(--theme-text-color, #333333)', // Maps to --theme-text-color
        },
        secondary: {
          lighterDefault: 'rgba(var(--general-buttons-background-color, 51, 51, 51), 0.3)',
          lighter: 'var(--theme-span-color, #333333)', // Maps to --theme-text-color
          "DEFAULT": 'var(--theme-text-color, #333333)', // Maps to --theme-text-color
          darker: 'var(--general-buttons-background-color, #333333)', // Maps to --theme-text-color
        },
        werra: {
          theme: {
            text: 'var(--theme-text-color, #333333)', // Maps to --theme-text-color
            heading: 'var(--theme-heading-text-color, #757575)', // Maps to --theme-heading-text-color
            link: 'var(--theme-link-color, #333333)', // Maps to --theme-link-color
            linkHover: 'var(--theme-link-hover-color, #333333)', // Maps to --theme-link-hover-color
          },
          general: {
            success_msg: {
              text: 'var(--general-messages-success-text-color, #FFFFFF)', // Maps to --general-messages-success-text-color
            },
            warning_msg: {
              text: 'var(--general-messages-warning-text-color, #FFFFFF)', // Maps to --general-messages-warning-text-color
            },
            error_msg: {
              text: 'var(--general-messages-error-text-color, #FFFFFF)', // Maps to --general-messages-error-text-color
            },
          },
          rating: {
            fill: 'var(--general-buttons-background-color, #333333)', // Static value
            non_fill: 'var(--general-buttons-background-color-light, #333333)', // Static value
          },
          pageWrapper: {
            primary: 'var(--page-wrapper-text-color, #333333)', // Maps to --page-wrapper-text-color
            lighter: 'var(--page-wrapper-link-hover-color, #333333)', // Maps to --page-wrapper-link-hover-color
            heading: 'var(--page-wrapper-heading-text-color, #757575)', // Maps to --page-wrapper-heading-text-color
            linkPrimary: 'var(--page-wrapper-link-color, #333333)', // Maps to --page-wrapper-link-color
            linkHover: 'var(--page-wrapper-link-hover-color, #333333)', // Maps to --page-wrapper-link-hover-color
          },
          mainContainer: {
            primary: 'var(--main-container-text-color, #333333)', // Maps to --main-container-text-color
            lighter: 'var(--main-container-link-hover-color, #333333)', // Maps to --main-container-link-hover-color
            heading: 'var(--main-container-heading-text-color, #757575)', // Maps to --main-container-heading-text-color
            linkPrimary: 'var(--main-container-link-color, #333333)', // Maps to --main-container-link-color
            linkHover: 'var(--main-container-link-hover-color, #333333)', // Maps to --main-container-link-hover-color
            popularProducts: {
              primary: 'var(--main-container-popular-product-text-color, #333333)', // Maps to --main-container-popular-product-text-color
              lighter: 'var(--main-container-popular-product-span-color, #333333)', // Maps to --main-container-popular-product-span-color
            },
            bestSellingProducts: {
              primary: 'var(--main-container-bestselling-product-text-color, #333333)', // Maps to --main-container-bestselling-product-text-color
              lighter: 'var(--main-container-bestselling-product-span-color, #333333)', // Maps to --main-container-bestselling-product-span-color
            },
            brands: {
              primary: 'var(--main-container-brands-text-color, #757575)', // Maps to --main-container-brands-text-color
              lighter: 'var(--main-container-brands-span-color, #333333)', // Maps to --main-container-brands-span-color
            },
          },
          formElement: {
            primary: 'var(--general-form-inputs-text-color, #757575)', // Maps to --general-form-inputs-text-color
          },
          btn: {
            primary: 'var(--general-buttons-text-color, #FFFFFF)', // Maps to --general-buttons-text-color
            lighter: 'var(--general-buttons-text-hover-color, #FFFFFF)', // Maps to --general-buttons-text-hover-color
          },
          topBar: {
            primary: 'var(--header-top-notification-text-color, #FFFFFF)', // Maps to --header-top-notification-text-color
            lighter: 'var(--header-top-notification-text-color, #FFFFFF)', // Maps to --header-top-notification-text-color
            link: 'var(--header-top-notification-link-color, #FFFFFF)', // Maps to --header-top-notification-link-color
            linkHover: 'var(--header-top-notification-link-hover-color, #FFFFFF)', // Maps to --header-top-notification-link-hover-color
            background: 'var(--header-top-notification-background-color, #333333)', // Maps to --header-top-notification-background-color
          },
          footerTop: {
            section1: {
              headingColor: 'var(--footer-top-section-1-heading-text-color, #333333)', // Maps to --footer-top-section-1-heading-text-color
              textColor: 'var(--footer-top-section-1-text-color, #333333)', // Maps to --footer-top-section-1-text-color
              linkColor: 'var(--footer-top-section-1-link-color, #333333)', // Maps to --footer-top-section-1-link-color
              linkHover: 'var(--footer-top-section-1-link-hover-color, #333333)', // Maps to --footer-top-section-1-link-hover-color
            },
            section2: {
              headingColor: 'var(--footer-top-section-2-heading-text-color, #333333)', // Maps to --footer-top-section-2-heading-text-color
              textColor: 'var(--footer-top-section-2-text-color, #333333)', // Maps to --footer-top-section-2-text-color
              linkColor: 'var(--footer-top-section-2-link-color, #333333)', // Maps to --footer-top-section-2-link-color
              linkHover: 'var(--footer-top-section-2-link-hover-color, #333333)', // Maps to --footer-top-section-2-link-hover-color
            },
            section3: {
              headingColor: 'var(--footer-top-section-3-heading-text-color, #333333)', // Maps to --footer-top-section-3-heading-text-color
              textColor: 'var(--footer-top-section-3-text-color, #333333)', // Maps to --footer-top-section-3-text-color
              linkColor: 'var(--footer-top-section-3-link-color, #333333)', // Maps to --footer-top-section-3-link-color
              linkHover: 'var(--footer-top-section-3-link-hover-color, #333333)', // Maps to --footer-top-section-3-link-hover-color
            },
            section4: {
              headingColor: 'var(--footer-top-section-4-heading-text-color, #333333)', // Maps to --footer-top-section-4-heading-text-color
              textColor: 'var(--footer-top-section-4-text-color, #333333)', // Maps to --footer-top-section-4-text-color
              linkColor: 'var(--footer-top-section-4-link-color, #333333)', // Maps to --footer-top-section-4-link-color
              linkHover: 'var(--footer-top-section-4-link-hover-color, #333333)', // Maps to --footer-top-section-4-link-hover-color
              formElement: {
                textColor: 'var(--footer-top-section-4-form-inputs-text-color, #757575)', // Maps to --footer-top-section-4-form-inputs-text-color
                buttonTextColor: 'var(--footer-top-section-4-form-inputs-button-text-color, #FFFFFF)', // Maps to --footer-top-section-4-form-inputs-button-text-color
              },
            },
          },
          footerBottom: {
            section1: {
              textColor: 'var(--footer-bottom-section-1-text-color, #333333)', // Maps to --footer-bottom-section-1-text-color
              linkColor: 'var(--footer-bottom-section-1-link-color, #333333)', // Maps to --footer-bottom-section-1-link-color
              linkHover: 'var(--footer-bottom-section-1-link-hover-color, #333333)', // Maps to --footer-bottom-section-1-link-hover-color
            },
            section2: {
              textColor: 'var(--footer-bottom-section-2-text-color, #333333)', // Maps to --footer-bottom-section-2-text-color
              linkColor: 'var(--footer-bottom-section-2-link-color, #333333)', // Maps to --footer-bottom-section-2-link-color
              linkHover: 'var(--footer-bottom-section-2-link-hover-color, #333333)', // Maps to --footer-bottom-section-2-link-hover-color
            },
          },
        },
        categoryList: {
          textColor: 'var(--main-container-category-listing-heading-color, #757575)', // Maps to --main-container-category-listing-heading-color
          spanColor: 'var(--main-container-category-listing-span-color, #333333)', // Maps to --main-container-category-listing-text-color
          subTextColor: 'var(--main-container-category-listing-text-color, #333333)', // Maps to --main-container-category-listing-span-color
        },
      },
      backgroundColor: {
        primary: {
          lighter: '#333333', // Static value
          "DEFAULT": "var(--general-buttons-background-color, #333333)", // Static value
          darker: colors.blue['800'], // Static value
        },
        secondary: {
          lighter: colors.blue['100'], // Static value
          "DEFAULT": colors.blue['200'], // Static value
          darker: colors.blue['300'], // Static value
        },
        container: {
          lighter: colors.white, // Static value
          "DEFAULT": colors.neutral['50'], // Static value
          darker: colors.neutral['100'], // Static value
        },
        'white60': 'var(--theme-background-color, #ffffff99)', // Static value
        werra: {
          theme: {
            background: 'var(--theme-background-color, #FFFFFF)', // Maps to --theme-background-color
          },
          general: {
            success_msg: {
              background: 'var(--general-messages-success-background-color, #333333)', // Maps to --general-messages-success-background-color
            },
            warning_msg: {
              background: 'var(--general-messages-warning-background-color, #333333)', // Maps to --general-messages-warning-background-color
            },
            error_msg: {
              background: 'var(--general-messages-error-background-color, #333333)', // Maps to --general-messages-error-background-color
            },
          },
          pageWrapper: {
            primary: 'var(--page-wrapper-background-color, #FFFFFF)', // Maps to --page-wrapper-background-color
          },
          mainContainer: {
            primary: 'var(--main-container-background-color, #FFFFFF)', // Maps to --main-container-background-color
          },
          btn: {
            primary: 'var(--general-buttons-background-color, #333333)', // Maps to --general-buttons-background-color
            lighter: 'var(--general-buttons-hover-background-color, #333333)', // Maps to --general-buttons-hover-background-color
          },
          topBar: {
            primary: 'var(--header-top-notification-background-color, #333333)', // Maps to --header-top-notification-background-color
          },
          menu: {
            primary: 'var(--header-menu-background-color, #FFFFFF)', // Maps to --header-menu-background-color
          },
          formElement: {
            background: 'var(--general-form-inputs-background-color, #FFFFFF)', // Maps to --general-form-inputs-background-color
          },
          footer: {
            top: {
              primary: 'var(--footer-top-section-background-color, #3333331A)', // Maps to --footer-top-section-background-color
            },
            bottom: {
              primary: 'var(--footer-bottom-section-background-color, #3333331A)', // Maps to --footer-bottom-section-background-color
            },
            formElement: {
              primary: 'var(--footer-top-section-4-form-inputs-background-color, #FFFFFF)', // Maps to --footer-top-section-4-form-inputs-background-color
              btn: {
                primary: 'var(--footer-top-section-4-form-inputs-button-background-color, #757575)', // Maps to --footer-top-section-4-form-inputs-button-background-color
              },
            },
          },
        },
      },
      borderColor: {
        primary: {
          lighter: 'var(--theme-border-color, #333333)', // Maps to --theme-border-color
          "DEFAULT": colors.blue['700'], // Static value
          darker: colors.blue['800'], // Static value
        },
        secondary: {
          lighter: colors.blue['100'], // Static value
          "DEFAULT": colors.blue['200'], // Static value
          darker: colors.blue['300'], // Static value
        },
        container: {
          lighter: colors.neutral['100'], // Static value
          "DEFAULT": '#EEEEEE', // Static value
          darker: 'var(--theme-border-color, #EEEEEE)', // Static value
        },
        'card': '#EEEEEE', // Static value
        'ftc': '#B6A47566', // Static value
        'th-primary': {
          'default': 'var(--theme-border-color, #EEEEEE)', // Static value
          'lighter': '#757575', // Static value
          'darker': '#333333', // Static value
          'slight': '#EBEBEB', // Static value
        },
        werra: {
          theme: {
            border: 'var(--theme-border-color, #333333)', // Maps to --theme-border-color
          },
          general: {
            success_msg: {
              border: 'var(--general-messages-success-border-color, #FFFFFF)', // Maps to --general-messages-success-border-color
            },
            warning_msg: {
              border: 'var(--general-messages-warning-border-color, #FFFFFF)', // Maps to --general-messages-warning-border-color
            },
            error_msg: {
              border: 'var(--general-messages-error-border-color, #FFFFFF)', // Maps to --general-messages-error-border-color
            },
          },
          formElement: {
            default: 'var(--general-form-inputs-border-color, #333333)', // Maps to --general-form-inputs-border-color
            footer: {
              default: 'var(--footer-top-section-4-form-inputs-border-color, #333333)', // Maps to --footer-top-section-4-form-inputs-border-color
            },
          },
        },
      },
      minHeight: {
        a11y: spacing["11"],
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh'
      },
      maxHeight: {
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh'
      },
      gap: {
        'sm9': '9rem',
        'sm5': '5rem',
      },
      letterSpacing: {
        'extra-wide': '3px',
        'ls':'30px',
        'ls4':'4px',
      },
      lineHeight: {
        'lh30': '30px',
        'lh50': '50px',
        'lh48': '48px',
        'lh24': '24px',
        'lh36': '36px',
        'lh42': '42px',
      },
      animation: {
        'customer-logo-slow': 'customer-logo 10s linear infinite',
        'customer-logo-fast': 'customer-logo 20s linear infinite',
      },
      keyframes: {
        'customer-logo': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      border: {
        'b2': '2px',
      },
      borderRadius: {
        'br4': '4px',
        'br6': '6px', // you can use it as `rounded-custom`
      },
      padding: {
        's7': '1.8rem', // use it as `p-custom`, `px-custom`, `py-custom`, etc.
      },
      spacing: {
        12: '3rem',
        16: '4rem',
        18: '5rem',
       
      },
      container: {
        center: true,
        padding: spacing["6"]
      },
    }
  },
  plugins: [
  require('@tailwindcss/forms'), 
  require('@tailwindcss/typography'),
  function ({ addUtilities }) {
      addUtilities({
        '.font-small-caps': {
          'font-variant': 'small-caps',
        },
        '.mask-fade-x': {
          '-webkit-mask-image': 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))',
          'mask-image': 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))',
        },
        '.no-arrows': {
          /* Remove spin buttons in Webkit browsers */
          '&::-webkit-inner-spin-button': { display: 'none' },
          '&::-webkit-outer-spin-button': { display: 'none' },

          /* Remove spin buttons in Firefox */
          '-moz-appearance': 'textfield',

          /* Remove spin buttons in IE/Edge */
          '&[type=number]': { '-moz-appearance': 'textfield' },
        },
      });
    },
  ],
  // Examples for excluding patterns from purge
  content: [
    // this theme's phtml and layout XML files
    '../../**/*.phtml',
    '../../*/layout/*.xml',
    '../../*/page_layout/override/base/*.xml',
    // parent theme in Vendor (if this is a child-theme)
    '../../../../../../../vendor/hyva-themes/magento2-default-theme/**/*.phtml',
    '../../../../../../../vendor/hyva-themes/magento2-default-theme/*/layout/*.xml',
    '../../../../../../../vendor/hyva-themes/magento2-default-theme/*/page_layout/override/base/*.xml',
    // app/code phtml files (if need tailwind classes from app/code modules)
    '../../../../../../../app/code/**/*.phtml',
  ],
  safelist: [
    // Werra components
    // Top notification bar
    'bg-werra-topBar-primary',
    'text-werra-topBar-primary',
    'text-werra-topBar-link',
    'hover:text-werra-topBar-linkHover',
    'bg-werra-footer-formElement-primary',
    'bg-werra-footer-formElement-btn-primary',
    // Footer
    'bg-werra-footer-top-primary',
    'bg-werra-footer-bottom-primary',
    'text-werra-footerTop-section1-headingColor',
    'text-werra-footerTop-section1-textColor',
    'text-werra-footerTop-section1-linkColor',
    'hover:text-werra-footerTop-section1-linkHover',
    'text-werra-footerTop-section2-headingColor',
    'text-werra-footerTop-section2-textColor',
    'text-werra-footerTop-section2-linkColor',
    'hover:text-werra-footerTop-section2-linkHover',
    'text-werra-footerTop-section3-headingColor',
    'text-werra-footerTop-section3-textColor',
    'text-werra-footerTop-section3-linkColor',
    'hover:text-werra-footerTop-section3-linkHover',
    'text-werra-footerTop-section4-headingColor',
    'text-werra-footerTop-section4-textColor',
    'text-werra-footerTop-section4-linkColor',
    'hover:text-werra-footerTop-section4-linkHover',
    'text-werra-footerTop-section4-headingColor',
    'text-werra-footerTop-section4-textColor',
    'text-werra-footerTop-section4-linkColor',
    'text-werra-footerTop-section4-textColor',
    'text-werra-footerTop-section4-linkColor',
    'hover:text-werra-footerTop-section4-linkHover',
    'border-werra-formElement-footer-default',
    'text-werra-footerTop-section4-formElement-textColor',
    'text-werra-footerTop-section4-formElement-buttonTextColor',
    'text-werra-footerBottom-section1-headingColor',
    'text-werra-footerBottom-section1-textColor',
    'text-werra-footerBottom-section1-linkColor',
    'hover:text-werra-footerBottom-section1-linkHover',
    'text-werra-footerBottom-section2-headingColor',
    'text-werra-footerBottom-section2-textColor',
    'text-werra-footerBottom-section2-linkColor',
    'hover:text-werra-footerBottom-section2-linkHover',
    'bg-werra-topBar-background',
    'bg-werra-general-success_msg-background',
    'bg-werra-general-warning_msg-background',
    'bg-werra-general-error_msg-background',
    'text-werra-general-success_msg-text',
    'text-werra-general-warning_msg-text',
    'text-werra-general-error_msg-text',
    'text-secondary-lighter',
    'bg-th-secondary-darker',
    'text-[12px]', 'md:text-[19px]','font-semibold','tracking-[2px]',

    'font-small-caps',
    'tracking-ls4',
    'text-werra-rating-fill',
    'text-werra-rating-non_fill',
    
    // Form Elements
    'bg-werra-formElement-background',
    'text-werra-formElement-primary',
    'border-werra-formElement-default',

    'md:text-sm14',
    'text-sm12','grid','grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4',
    'text-categoryList-textColor','text-categoryList-spanColor','text-categoryList-subTextColor',
    'block sm:flex gap-4 sm:gap-4 lg:gap-sm5 2xl:gap-sm9 w-full justify-center','tracking-ls4',
    'md:text-[35px]', 
    'max-md:text-white',
    'max-md:text-black','max-md:bg-white',
    'text-[12px]', 
    'max-sm:w-[85%]',
    'text-[40px]', 
    'text-[45px]', 
    'text-[60px]', 
    'weight-[600]',
    'text-[20px]', 
    'max-sm:text-[12px]',
    'max-sm:text-[14px]',
    'md:text-[110px]',
    'max-sm:w-[65%]',
    'max-md:w-[75%]',
    'max-sm:w-[80%]',
    'max-sm:w-[90%]',
    'max-sm:w-full',
    'md:tracking-[12px]',
    'max-md:w-[85%]',
    'max-md:w-[45%]',
    'sm:text-[45px]',
    'leading-[100px]',
    'max-sm:leading-[65px]',
    'max-sm:text-[25px]',
    'max-sm:w-[60%]', 
    'text-[25px]', 'md:text-[45px]', 'text-[30px]',
    'max-sm:text-white',
    'max-sm:font-semibold',
    'bg-white-overlay',
    'bg-blue-overlay',
    'md:text-[40px]',
    'text-[32px]',
    'md:text-[48px]',
    'max-sm:hidden',
    'rounded-[100px]',
    'max-md:text-[10px]',
    'max-md:text-[12px]',
    'max-sm:w-[70%]',
    'text-[15px]',
    'text-[12px]','md:text-[34px]','lg:text-[40px]','md:leading-[40]','lg:leading-[80]','xl:leading-[93px]',
    'sm:mb-4', 'md:mb-6', 'xl:mb-8',
]
});
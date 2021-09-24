module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          pending: 'var(--color-text-pending)',
          paid: 'var(--color-text-paid)',
          draft: 'var(--color-text-draft)'
        }
      },
      backgroundColor: {
        skin: {
          logoBg: 'var(--color-logo-bg)',
          navbarBg: 'var(--color-navbar-bg)',
          dataBar: 'var(--color-data-bar-bg)',
          dropdownBg: 'var(--color-dropdown-bg)',
          bodyBg: 'var(--color-body-bg)',
          almostBlack: 'var(--color-black-bg)',
          danger: 'var(--color-danger-bg)'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

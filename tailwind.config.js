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
          draft: 'var(--color-text-draft)',
          purple: 'var(--color-logo-bg)',
          name: 'var(--color-text-name)'
        }
      },
      backgroundColor: {
        skin: {
          logoBg: 'var(--color-logo-bg)',
          navbarBg: 'var(--color-navbar-bg)',
          dataBar: 'var(--color-data-bar-bg)',
          dropdownBg: 'var(--color-dropdown-bg)',
          invoiceBg:'var(--color-invoice-input-bg)',
          bodyBg: 'var(--color-body-bg)',
          almostBlack: 'var(--color-black-bg)',
          danger: 'var(--color-danger-bg)',
          pendingBg: 'var(--color-orange-bg)',
          paidBg: 'var(--color-green-bg)',
          draftBg: 'var(--color-draft-bg)'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

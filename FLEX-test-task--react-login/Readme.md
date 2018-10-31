# Changes

- Mobily Friendly support (via `viewport`)
- Team support (via _BEM_ classes)
- Improved UX (via animation)
- Improved Web Accessibility
- Improved DX (added arrow functions to avoid `bind.this`)
- Improved maintainability (via `defaultProps` & `propTypes`)
- Added internationalization
- `HomePage` unit tests have been updated
- Unit tests for new components (`Alert`, `NotFoundPage`) have been provided
- Lint issues have been addressed

# Notes

- Task Description has incorrect endpoints
- Achieved Lighthouse results:
  - Performance 100%
  - PWA 46% (out of scope)
  - Accessibility 100%
  - Best Practice 93% (will be 100% on prod env with H2)
  - SEO 100%

# Ways to improve this App

1. Refactor `LoginPage` & `RegisterPage` to join in one component
1. Combine files by components not by functionality
1. Add SCSS support
1. Provide PWA version
1. Improve Web Accessibility via ARIA intructions
1. Use Session cookies & JWT instead of localStorage
1. Consider abaddon Redux in favor of Context API

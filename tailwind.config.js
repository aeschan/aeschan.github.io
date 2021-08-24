module.exports = {
purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js',
    // TypeScript
    'plugins/**/*.ts',
    'nuxt.config.ts',
    'content/**/*.md'
    ]
},
darkMode: false, // or 'media' or 'class'
theme: {
    extend: {
        transitionTimingFunction: {
            'in-expo': 'cubic-bezier(.05,.91,.13,1)',
            'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        }
    },
},
variants: {
    extend: {},
},
plugins: [],
}
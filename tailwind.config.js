module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  safelist: [
    'grid-cols-2', 'grid-rows-2',
    'grid-cols-4', 'grid-rows-4',
    'grid-cols-6', 'grid-rows-6',
  ],
}

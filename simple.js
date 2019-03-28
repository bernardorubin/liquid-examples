const Liquid = require('liquidjs')
const engine = new Liquid()

engine
  .parseAndRender('{{name | capitalize}}', { name: 'lucy' })
  .then(console.log)

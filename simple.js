const Liquid = require('liquidjs')
const engine = new Liquid()

engine
  .parseAndRender('{{name | capitalize}}', { name: 'bernardo' })
  .then(console.log)

ctx = { data: [5, 3, 2, 4, 1] }

engine.parseAndRender('Sorted data: {{ data | sort }}', ctx).then(console.log)

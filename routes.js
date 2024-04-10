'use strict'
module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', (req, res) => {
    res.locals.name = 'be'
    res.render('index')
  })

  app.get('/api/data', (req, res) => {
    const data = [
      { id: 1, name: 'asu 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ];
  
    res.json(data);
  });
}

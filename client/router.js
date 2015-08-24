Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/', {
  template: 'course',
})

Router.route('/materia', {
  template: 'subject',
})

Router.route('/examen', {
  template: 'exam',
})

Router.route('/configuracion', {
  template: 'configuration',
})

Router.route('/asistencias', {
  template: 'attendances_individual'
})

Router.route('/boletin', {
  template: 'scoreCard'
})

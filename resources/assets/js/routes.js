import pages from './pages/_pages'
export default [
  { path: '/',                      component: require('./pages/Mainboard') },
  { path: '/' + pages.about.path,   component: require('./pages/About') },
  { path: '/' + pages.illusts.path, component: require('./pages/Illusts') },
  { path: '/' + pages.comics.path,  component: require('./pages/comics') },
  { path: '/' + pages.photos.path,  component: require('./pages/photos') },
  { path: '/' + pages.apps.path,    component: require('./pages/Apps') }
]

import pages from './pages/_settings'
export default [
  { path: '/',                      component: require('./pages/Mainboard') },
  { path: '/' + pages.about.path,   component: require('./pages/About') },
  { path: '/' + pages.illusts.path, component: require('./pages/Illusts') },
  { path: '/' + pages.comics.path,  component: require('./pages/Comics') },
  { path: '/' + pages.photos.path,  component: require('./pages/Photos') },
  { path: '/' + pages.apps.path,    component: require('./pages/Apps') }
]

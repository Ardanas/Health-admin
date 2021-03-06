import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
import Full from '@/containers/Full'
import Full2 from '@/containers/Full2'



// Views - Pages
import Page404 from '@/views/errorPages/Page404'
import Page500 from '@/views/errorPages/Page500'


/* login */
const Login = _import('login/index');
Vue.use(Router);

export const constantRouterMap = [
    {path: '/login', component: Login, hidden: true },
    {path: '/pages',redirect: '/pages/p404', name: 'Pages',
          component: {
            render (c) { return c('router-view') }
              // Full,
          },
          children: [{path: '404',  name: 'Page404', component: _import('errorPages/Page404') },
                     {path: '500',name: 'Page500',component: _import('errorPages/Page404')},
                    ]
    }


]

export default new Router({
  mode: 'hash',
  base: '/admin/',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [

 {
    path: '/',
    redirect: '/usersetting',
    name: '首页',
    component: Full,
    hidden:false,
    children: [
      {path: '/usersetting',name: 'usersetting', icon:"merge",component: _import('UserSetting')},     
      {path: '/tinymce',name: 'Tinymce编辑器',icon:"android-document",component: _import('Tinymce')},
      {path: '/markdown',name: 'Markdown',icon:"android-list",component: _import('Markdown')},
      {path: '/info',name: 'info',icon:"android-list",component: _import('per_messages')},
      {path: '/evaluation',name: 'evaluation', icon:"merge",component: _import('per_evaluation')} ,     
      {path: '/visits',name: 'visits', icon:"android-document",component: _import('Visits')} ,     
    ]
  },



  { path: '*', redirect: '/pages/404', hidden: true }
  
];

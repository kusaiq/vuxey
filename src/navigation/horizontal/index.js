import {Home, Box, Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'secondPage',
    title: 'Login',
    icon: <Mail size={20} />,
    navLink: '/login'
  },
  { 
    id: 'users',
    title: 'User',
    icon: <User />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle />,
        navLink: '/apps/user/list'
      },
      {
        id: 'view',
        title: 'View',
        icon: <Circle />,
        navLink: '/apps/user/view'
      },
      {
        id: 'edit',
        title: 'Edit',
        icon: <Circle />,
        navLink: '/apps/user/edit'
      }
    ]
  }
]

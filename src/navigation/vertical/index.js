import { Mail, Home, FileText, User, Circle } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
 {
    id: 'users',
    title: 'User',
    icon: <User size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/apps/user/list'
      }
      // {
      //   id: 'view',
      //   title: 'View',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/user/view/'
      // },
      // {
      //   id: 'edit',
      //   title: 'Edit',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/user/edit'
      // }
    ]
  }

]

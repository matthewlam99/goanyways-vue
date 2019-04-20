import Home from '@/components/Home'
import Login from '@/components/Login.vue';
import SignUp from '@/components/SignUp.vue';
import Error404 from '@/components/Error404.vue';
import Dashboard from '@/components/Dashboard.vue';
import ShowBlogs from '@/components/ShowBlogs.vue';
import SingleBlog from '@/components/SingleBlog';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import Product from '@/components/Product.vue';

export const routes = 
  [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/blog',
      name: 'blog',
      component: ShowBlogs,
    },
    {
      path: '/blog/:id',
      component: SingleBlog,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/404',
      name: '404',
      component: Error404
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]

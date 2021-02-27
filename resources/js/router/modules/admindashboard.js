import Layout from '@/layouts/AdminDashboard';

export default {
    path: '/admin',
    component: Layout,
    redirect: 'dashboard',
    children: [{
            path: 'dashboard',
            component: () => import('@/views/AdminDashboard/Dashboard.vue'),
            name: 'AdminDashboard',
            meta: {
                auth: true,
                role: 'admin',
                title: 'AdminDashboard'
            },
        },
        {
            path: 'profile',
            component: () => import('@/views/AdminDashboard/Profile.vue'),
            name: 'AdminProfile',
            meta: {
                auth: true,
                role: 'admin',
                title: 'AdminProfile'
            },
        },
        {
            path: 'users',
            component: () => import('@/views/AdminDashboard/Users.vue'),
            name: 'AdminUsers',
            meta: {
                auth: true,
                role: 'admin',
                title: 'AdminUsers'
            },
        },
        {
            path: 'users/form',
            component: () => import('@/views/AdminDashboard/UsersForm.vue'),
            name: 'AdminUsersForm',
            meta: {
                auth: true,
                role: 'admin',
                title: 'AdminUsersForm'
            },
        },
        {
            path: 'payments',
            component: () => import('@/views/AdminDashboard/Payments.vue'),
            name: 'AdminPayments',
            meta: {
                auth: true,
                role: 'admin',
                title: 'AdminPayments'
            },
        },
        {
            path: 'notifications',
            component: () => import('@/views/AdminDashboard/Notifications.vue'),
            name: 'AdminNotifications',
            meta: {
                auth: true,
                role: 'admin',
                title: 'AdminNotifications'
            },
        },
        {
            path: 'messages',
            component: () => import('@/views/AdminDashboard/Messages.vue'),
            name: 'AdminMessages',
            meta: {
                auth: true,
                role: 'admin',
                title: 'AdminMessages'
            },
        },
        {
            path: 'settings',
            component: () => import('@/views/AdminDashboard/Settings.vue'),
            name: 'AdminSettings',
            meta: {
                auth: true,
                role: 'admin',
                title: 'AdminSettings'
            },
        },
    ],
}

import Layout from '@/layouts/AuthAdmin';

export default {
	path: '/admin',
	component: Layout,
	redirect: 'login',
	children: [
		{
			path: 'login',
			component: () => import('@/views/AuthAdmin/Login.vue'),
			name: 'UserLogin',
			meta: { auth: true, role: 'admin', title: 'AdminLogin' },
		},
	],
}
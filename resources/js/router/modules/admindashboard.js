import Layout from '@/layouts/AdminDashboard';

export default {
	path: '/admin',
	component: Layout,
	redirect: 'dashboard',
	children: [
		{
			path: 'dashboard',
			component: () => import('@/views/AdminDashboard/Dashboard.vue'),
			name: 'AdminDashboard',
			meta: { auth: true, role: 'admin', title: 'AdminDashboard' },
		},
	],
}
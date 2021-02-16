import Layout from '@/layouts/UserDashboard';

export default {
	path: '/user',
	component: Layout,
	redirect: 'dashboard',
	children: [
		{
			path: 'dashboard',
			component: () => import('@/views/UserDashboard/Dashboard.vue'),
			name: 'UserDashboard',
			meta: { auth: true, role: 'user', title: 'UserDashboard' },
		},
	],
}
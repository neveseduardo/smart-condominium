import NProgress from "nprogress";
import {
    isLogged
} from '@/services/authentication'
let routeResolved = false;

function tryInitProgress() {
    routeResolved = false;
    setTimeout(() => {
        if (!routeResolved) {
            NProgress.start();
        }
    }, 100);
}
export default function initProgress(router) {
    router.beforeEach((to, from, next) => {
        tryInitProgress();
		let usuario = isLogged();

		if (usuario === null && to.meta.auth && to.meta.role === 'admin') {
			return next({ name: 'AdminLogin'})
		}

		if (usuario === null && to.meta.auth && to.meta.role === 'user') {
			return next({ name: 'UserLogin'})
		}

		if (usuario !== null && to.meta.role === 'admin' && to.name === 'AdminLogin') {
			return next({ name: 'AdminDashbord' })
		}

		if (usuario !== null && to.meta.role === 'user' && to.name === 'UserLogin') {
			return next({ name: 'UserDashbord' })
		}

        return next()
    });
    router.afterEach(() => {
        routeResolved = true;
        NProgress.done();
    });
}

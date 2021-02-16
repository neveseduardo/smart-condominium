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
		
		if (usuario === null && to.meta.auth) {
			return next({ name: 'Login'})
		}

		if (usuario !== null && to.name === 'Login') {
			return next({ name: 'Dashboard'})
		}

        return next()
    });
    router.afterEach(() => {
        routeResolved = true;
        NProgress.done();
    });
}

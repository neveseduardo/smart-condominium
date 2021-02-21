import validator from '@/utils/validator'

export default {
    methods: {
        redirect(router, routerName) {
            router.push({
                name: routerName
            }).catch(() => {})
        },
		validate(type, value){
			return validator[type](value)
		}
    }
}

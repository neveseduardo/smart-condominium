import validator from '@/utils/validator'

export default {
    methods: {
        redirect(routerName) {
            this.$router.push({
                name: routerName
            }).catch(() => {})
        },
        validate(type, value) {
            return validator[type](value)
        },
        capitalize(string) {
			string = string.toLowerCase()
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
}

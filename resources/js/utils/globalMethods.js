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
        }
    }
}

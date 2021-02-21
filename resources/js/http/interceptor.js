import axios from 'axios'
import env from '@/environments'
import {
    outAdmin,
    getAdmin,
    outUser,
    getUser,
} from '@/services/authentication'
import {
    Message
} from 'element-ui'
import messages from '@/utils/messages'

const http = axios.create({
    baseURL: env.domain,
    timeout: 60000
})



http.interceptors.request.use(async config => {
    let {
        url
    } = config

    if (!url.includes('/auth')) {
        if (url.includes('/admin')) {
            const adminToken = await getAdmin()
            if (adminToken !== undefined && adminToken !== null) {
                config.headers['Authorization'] = `Bearer ${adminToken.token}`
            }

        }
        if (url.includes('/user')) {
            const userToken = await getUser()
            if (userToken !== undefined && userToken !== null) {
                config.headers['Authorization'] = `Bearer ${userToken.token}`
            }
        }
    }

    console.log(config)
    return config
}, error => {
    console.log(error)
    return Promise.reject(error)
})

http.interceptors.response.use(res => {
    const {
        method
    } = res.config

    if (method === 'post') {
        console.log(res)
    }
    return res.data
}, error => {
    const {
        response
    } = error
    console.log(error)
    if (!response) {
        return throwError(messages.serverErrorMessage)
    }
    throwError(error?.response?.data?.message)
    console.error('Erro na requisição: ', error?.response)
    return Promise.reject(error)
})

function throwError(message) {
    return Message({
        type: 'error',
        message: message,
        title: 'Erro!',
        duration: 5 * 1000
    })
}

export default http

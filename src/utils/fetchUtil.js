export const fetchUtil = (apiUrl, method, body = {}, token = localStorage.get('auth-token')) => {
    const options = {
        method,
        headers: {},
    }

    if (token) {
        options.headers.Authorization = `Bearer ${token}`
    }

    if (method !== 'GET' || method !== 'DELETE') {
        options.headers['Content-type'] = 'application/json'
        options.body = body
    }

    return fetch(apiUrl, options)
};
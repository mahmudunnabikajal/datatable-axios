import axios from "./axios"
// Create a URLSearchParams object to parse the query string
const searchParams = new URLSearchParams(window.location.search)

// Get individual query parameter values


class datatable {
    constructor() {
        // this.page = router.currentRoute.value.query.page
        // this.paginate = router.currentRoute.value.query.paginate
        // this.search = router.currentRoute.value.query.search
    }
    async get(url) {
        // const page = router.currentRoute.value.query.page
        // const paginate = router.currentRoute.value.query.paginate
        // const search = router.currentRoute.value.query.search
        const page = searchParams.get('page')
        const paginate = searchParams.get('paginate')
        const search = searchParams.get('search')

        return new Promise(async (resolve) => {
            if (!page && !paginate && !search) {
                await window.axios.get(url).then(response => {
                    resolve(response)
                })
            } else {
                await window.axios.get(`${url}?page=${page}&paginate=${paginate}&search=${search}`).then(response => {
                    resolve(response)
                })
            }
        })
    }
    async post(url) {
        // const page = router.currentRoute.value.query.page
        // const paginate = router.currentRoute.value.query.paginate
        // const search = router.currentRoute.value.query.search
        const page = searchParams.get('page')
        const paginate = searchParams.get('paginate')
        const search = searchParams.get('search')

        return new Promise(async (resolve) => {
            if (!page && !paginate && !search) {
                await window.axios.post(url).then(response => {
                    resolve(response)
                })
            } else {
                await window.axios.post(`${url}?page=${page}&paginate=${paginate}&search=${search}`).then(response => {
                    resolve(response)
                })
            }
        })
    }
}
// const datatableAxios = new datatable()
export default datatable
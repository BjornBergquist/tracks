import axios from 'axios'

export default axios.create({
    baseURL: 'http://2559-92-32-66-116.ngrok.io'  // Needs to be updated after 2 hours.
})

// ngrok http 3000
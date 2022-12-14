import {readFileSync} from 'node:fs'

const PVT_KEY = readFileSync(".keys/jwtRS256.key", 'utf-8')
const PUB_KEY = readFileSync(".keys/jwtRS256.key", 'utf-8')

export default {
    PVT_KEY,
    PUB_KEY
}
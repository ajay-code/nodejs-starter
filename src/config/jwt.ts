import { readFileSync } from 'node:fs'
import { resolve } from "node:path"
import { getDirname } from '#src/utils/getDirname.js'

const __dirname = getDirname(import.meta.url)
const PVT_KEY = readFileSync(resolve(__dirname, "../../.keys/jwtRS256.key"), 'utf-8')
const PUB_KEY = readFileSync(resolve(__dirname, "../../.keys/jwtRS256.key.pub"), 'utf-8')

export default {
    PVT_KEY,
    PUB_KEY
}
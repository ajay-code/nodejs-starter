#! /usr/bin/env node
import * as fs from "node:fs"
import {randomBytes} from "node:crypto"
import { getDirname } from "#src/utils/getDirname.js"


function genKey(): string {
    return randomBytes(32).toString('hex')
}

const __dirname = getDirname(import.meta.url)
function updateEnv(key:string, value:string) {
    const data = fs.readFileSync('.env', 'utf-8')
    const lines = data.split('\n')
    let found = false

    const newLines = lines.map(line => {
        if (line.startsWith(`${key}=`)) {
            found = true;
            return `${key}=${value}`
        } else {
            return line
        }
    })

    if (!found) {
        newLines.push(`${key}=${value}`)
    }

    const newData = newLines.join('\n')
    fs.writeFileSync(".env", newData)
}

const key = genKey()
updateEnv("APP_KEY", key)

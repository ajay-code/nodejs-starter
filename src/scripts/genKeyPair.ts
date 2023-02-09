import { generateKeyPairSync } from 'node:crypto'
import { writeFileSync } from 'node:fs'

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
    },
})

writeFileSync('keys/rsa.pem', publicKey)
writeFileSync('keys/rsa_pub.pem', privateKey)

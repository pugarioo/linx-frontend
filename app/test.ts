import { requestlink } from "./actions"

const res = await requestlink('https://www.prisma.io/docs/orm/reference/prisma-client-reference')

console.log(res)
import { faker } from '@faker-js/faker'

import { writeFileSync } from 'fs'
import { join } from 'path'

import { Contact } from './models/Contact.ts'

const TOTAL = 100
export default TOTAL

const contacts: Contact[] = []
let csvLines = 'NOME,E-MAIL,TELEFONE\n'

for (let i = 0; i < TOTAL; i += 1) {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const obj: Contact = {
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }),
    phone: faker.phone.number('(##) #####-####'),
  }

  contacts.push(obj)
  const line = `${obj.name},${obj.email},${obj.phone}\n`
  csvLines += line
}

const filesPath = join(__dirname, 'data')

// Salvando o arquivo JSON
const strJson = JSON.stringify(contacts)
const jsonFileName = join(filesPath, 'contacts.json')
writeFileSync(jsonFileName, strJson)

// Salvando o arquivo CSV
const csvFileName = join(filesPath, 'contacts.csv')
writeFileSync(csvFileName, csvLines)

console.log('Mal feito desfeito')

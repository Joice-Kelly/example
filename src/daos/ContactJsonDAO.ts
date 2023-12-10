import { join } from 'path'
import { writeFileSync } from 'fs'

import ContactDAO from './ContactDao.ts'

import { Contact } from '../models/Contact.ts'

class ContactJsonDAO extends ContactDAO {
  constructor() {
    super('contacts.json')
    const objs: Contact[] = JSON.parse(this.strContent)
    this.contacts = objs
  }

  flush(): void {
    const contactsJson = JSON.stringify(this.contacts)
    const filePath = join(__dirname, '..', 'data', 'contacts.json')
    writeFileSync(filePath, contactsJson)
  }
}
export default ContactJsonDAO
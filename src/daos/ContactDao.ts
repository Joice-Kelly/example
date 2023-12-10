import { join } from 'path'
import { readFileSync } from 'fs'

import { Contact } from '../models/Contact.ts'

abstract class ContactDAO {
  protected contacts: Contact[]

  protected strContent: string

  constructor(filename: string) {
    const fileName = join(__dirname, '..', 'data', filename)
    this.strContent = readFileSync(fileName, 'utf-8')
    this.contacts = []
  }

  abstract flush(): void

  findByEmail(email: string): Contact | undefined {
    const contact = this.contacts.find((c) => c.email === email)
    return contact
  }

  save(contact: Contact) {
    this.contacts.push(contact)
    this.flush()
  }
}
export default ContactDAO
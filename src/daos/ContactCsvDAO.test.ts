import { ContactCsvDAO } from './ContactCsvDAO.ts'

import { Contact } from '../models/Contact.ts'

let contactDAO: ContactCsvDAO

describe('Tests over ContactCsvDAO', () => {
  beforeAll(() => {
    contactDAO = new ContactCsvDAO()
  })
  it('should retrieve a contact by its email', () => {
    const contact = contactDAO.findByEmail('Sara.Moreira90@hotmail.com')
    expect(contact?.name).toBe('Sara Moreira')
    expect(contact?.phone).toBe('(36) 23539-2327')
  })
  it('should save a new contact inside the repository', async () => {
    const contact: Contact = {
      name: 'Sidney Sousa', email: 'sidney.sousa@ifms.edu.br', phone: '(99) 99999-9999',
    }
    contactDAO.save(contact)
    contactDAO = new ContactCsvDAO()
    const newContact = contactDAO.findByEmail(contact.email)
    expect(newContact?.email).toBe(contact.email)
    expect(newContact?.name).toBe(contact.name)
    expect(newContact?.phone).toBe(contact.phone)
  })
})

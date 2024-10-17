import { useState, useEffect } from 'react';  // import useEffect
import ContactList from './components/ContactList';
import CompanyList from './components/CompanyList';
import Stats from './components/Stats';
import './App.css';

function App() {
    const [contacts, setContacts] = useState([]);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetch('http://localhost/api/contacts')
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    useEffect(() => {
        fetch('http://localhost/api/companies')
            .then(response => response.json())
            .then(data => setCompanies(data))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div className='page'>
            <h1>Contactor</h1>
            <div className="content">
                <div className="contacts">
                    <h2>Contacts</h2>
                    <ContactList contacts={contacts} setContacts={setContacts} />
                    <p>Click a contact to view associated phone numbers</p>
                </div>
                <div className="companies">
                    <h2>Companies</h2>
                    <CompanyList companies={companies} setCompanies={setCompanies} />
                </div>
            </div>
            <Stats />
        </div>
    );
}

export default App;
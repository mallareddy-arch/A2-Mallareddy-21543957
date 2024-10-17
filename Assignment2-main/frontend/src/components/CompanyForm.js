import React, { useState, useEffect } from 'react';

function CompanyForm({ company, setCompany, refreshCompanies }) {
    const [company_name, setCompanyName] = useState('');
    const [company_address, setCompanyAddress] = useState('');

    useEffect(() => {
        if (company) {
            setCompanyName(company.company_name || '');
            setCompanyAddress(company.company_address || '');
        }
    }, [company]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = company.company_id
            ? `http://localhost/api/companies/${company.company_id}`
            : 'http://localhost/api/companies';

        const options = {
            method: company.company_id ? 'PUT' : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                company_name,
                company_address,
            })
        };

        await fetch(url, options);
        refreshCompanies();
        setCompany(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={company_name} onChange={e => setCompanyName(e.target.value)} placeholder="Company Name" required/>
            <input type="text" value={company_address}onChange={e => setCompanyAddress(e.target.value)} placeholder="Company Address" required />
            <button type="submit">Save</button>
            <button onClick={() => setCompany(null)}>Cancel</button>
        </form>
    );
}

export default CompanyForm;

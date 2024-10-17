import React, { useEffect, useState } from 'react';
import Company from './Company';
import CompanyForm from './CompanyForm';

function CompanyList() {
    const [companies, setCompanies] = useState([]);
    const [currentCompany, setCurrentCompany] = useState(null);

    useEffect(() => {
        fetchCompanies();
    }, []);

    const fetchCompanies = async () => {
        const response = await fetch('http://localhost/api/companies');
        const data = await response.json();
        setCompanies(data);
    };

    const editCompany = company => {
        setCurrentCompany(company);
    };

    const deleteCompany = async id => {
        await fetch(`http://localhost/api/companies/${id}`, { method: 'DELETE' });
        fetchCompanies();
    };

    return (
        <div>
            {currentCompany ? (
                <CompanyForm company={currentCompany} setCompany={setCurrentCompany} refreshCompanies={fetchCompanies} />
            ) : (
                <button onClick={() => setCurrentCompany({})}>Add Company</button>
            )}
            {companies.map(company => (
                <Company key={company.company_id} company={company} onEdit={editCompany} onDelete={deleteCompany} />
            ))}
        </div>
    );
}

export default CompanyList;

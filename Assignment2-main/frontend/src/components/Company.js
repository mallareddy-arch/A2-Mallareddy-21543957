import React from 'react';

function Company({ company, onEdit, onDelete }) {
    return (
        <div className="company-item">
            <h3>{company.company_name}</h3>
            <p>{company.company_address}</p>
            <div>
                <button onClick={() => onEdit(company)}>Edit</button>
                <button onClick={() => onDelete(company.company_id)}>Delete</button>
            </div>
        </div>
    );
}

export default Company;

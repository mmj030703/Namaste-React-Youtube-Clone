import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
function SuggestionItem({ suggestion }) {
    const decodeHTMLEntities = (string) => {
        const elem = document.createElement('textarea');
        elem.innerHTML = string;
        return elem.value;
    };

    return (
        <div className='flex items-center ps-3 pe-2 py-2'>
            <FontAwesomeIcon className='text-slate-400 mr-3' icon={faSearch} />
            <p>{decodeHTMLEntities(suggestion)}</p>
        </div>
    )
}

export default SuggestionItem;
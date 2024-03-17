import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
function SuggestionItem({ suggestion }) {

    return (
        <p className='px-2 py-2'><FontAwesomeIcon className='text-slate-400 mr-3' icon={faSearch} /> {suggestion}</p>
    )
}

export default SuggestionItem;
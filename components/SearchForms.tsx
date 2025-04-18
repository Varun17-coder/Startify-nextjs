import React from 'react'
import Form from 'next/form'
import SearchFromReset from './SearchFormReset'
import { Search } from 'lucide-react'
const SearchForms = ({query}:{query?: string}) => {
    // const query='Test'
  return (
    <Form action="/" scroll={false} className='search-form'>
      <input name="query"
              defaultValue={query}
              className="search-input"
              placeholder='Search Startups'
        />
        <div className='flex gap-2'>
            {query && <SearchFromReset/>}
            <button type='submit' className='search-btn text-white'>
                {/* shadcn element */}
                <Search className='size-5'/> 
            </button>
        </div>
    </Form>
  )
}

export default SearchForms

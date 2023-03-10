import { ChangeEvent } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ 
    className, 
    placeholder, 
    handleChange
}: SearchBoxProps) => (
    <input 
        className={`search-box ${className}`}
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}   
    />
)

export default SearchBox

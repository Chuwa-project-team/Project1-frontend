

import { useSearch } from '../../hooks/useSearchContext';
import {  Input } from 'antd';
import styles from './Searchbar.module.css';
const { Search } = Input;


export default function Searchbar(){
    const {  setSearchText } = useSearch();
    const handleSearchChange = (value) => {
        setSearchText(value);
      };
    return(
        <div className={`${styles.mobileDisplay} ${styles.searchBarContainer}`}>
        <Search placeholder="" onSearch={handleSearchChange} style={{ width: 200, margin:'0px' }} />
    </div>
    )
}
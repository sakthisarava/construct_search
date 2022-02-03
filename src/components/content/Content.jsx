import './content.css';
// import SearchIcon from '@material-ui/icons/Search'

export default function Content() {
    return (
        <div className='main'> 
            <input  className='input' type="search" placeholder='Search 800+ construct libraries'/>
            {/* <SearchIcon className='searchIcon' /> */}
        </div>
    )
}

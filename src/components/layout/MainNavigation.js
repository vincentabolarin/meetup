import { Link } from 'react-router-dom';

const MainNavigation = () => {
    return (
        <header>
            <div>React Meetups</div>
            <nav>
                <ul>
                    <li><Link>Some Link</Link></li>
                </ul>
            </nav>
        </header>
    );
}
 
export default MainNavigation;
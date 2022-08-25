import {useContext} from 'react';
import FavouritesContext from '../store/favourites-context';
import MeetupList from '../components/meetups/MeetupList';

const Favourites = () => {
    const favouritesCtx = useContext(FavouritesContext)

    let content;

    if (favouritesCtx.totalFavourites === 0) {
        content = <p>You do not have any favourites at the moment.</p>
    } else {
        content = <MeetupList meetups={favouritesCtx.favourites} />
    }
    return (
        <section>
            <h1>My Favourites</h1>
            {content}
        </section>
    );
}
 
export default Favourites;
import { Carousel } from "./components/Carousel";
import { ExploreTopBook } from './components/ExploreTopBook';
import { Heros } from './components/Hores';
import { LibraryServices } from './components/LibraryService';


export const HomePage = () => {
    return (
        <>
            <ExploreTopBook/>
            <Carousel/>
            <Heros/>
            <LibraryServices/>
        </>
    );
}
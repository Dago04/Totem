import { musicShirts } from '../data/musicShirts';
import { MusicShirt } from './';


export const ShirtMusicList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            {
                musicShirts.map(shirt => (
                    <MusicShirt key={shirt.id} {...shirt} />
                ))
            }
        </div>
    )
}

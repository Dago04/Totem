import { useMemo } from 'react';
import { camisasMusica } from '../../data/musicShirts';
import { MusicShirt } from '..';


export const ShirtMusicList = ({ shirts }) => {
    const musicShirts = useMemo(() => shirts, [shirts]);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
            {
                musicShirts.lenght === 0
                    ? camisasMusica.map((shirt) => (
                        <MusicShirt key={shirt.id} {...shirt} />
                    ))
                    : musicShirts.map((shirt) => <MusicShirt key={shirt.id} {...shirt} />)

            }
        </div>
    )
}

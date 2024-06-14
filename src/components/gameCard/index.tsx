import { Dispatch, SetStateAction } from 'react';
import { GamesInterface } from '../../interfaces';
import * as S from './styles';

export default function GameCard({ game, onSelect }: { game: GamesInterface, onSelect: Dispatch<SetStateAction<GamesInterface | undefined>> }) {
    const getPlayerRecord = () => {
        const rankStorage = JSON.parse(String(localStorage.getItem(String(game?.id)))) ?? []
        if (!rankStorage[0]) return 'N/A'
        const filteredRank = rankStorage.sort((a: {rawTime: number},b: {rawTime: number}) => new Date(a.rawTime).getTime() - new Date(b.rawTime).getTime())
        const record = new Date (filteredRank[0].rawTime)
        return `${record.getSeconds()}s ${record.getMilliseconds()}ms`;
    }

    return(
        <S.Main>
            <S.Header>
                {game.name}
            </S.Header>

            <S.Body>
                <span>Dificuldade: <span>{`X`.repeat(game.difficulty)}</span></span>
                <span>Seu recorde</span>
                <span>{getPlayerRecord()}</span>
            </S.Body>

            <S.Footer>
                <button className="playButton" onClick={() => onSelect(game)}>JOGAR</button>
            </S.Footer>
        </S.Main>
    )
}
import { Fragment, useState } from 'react'
import * as S from './styles'
import { Table } from '../ui/table';

export default function Ranking({id}: {id: number}) {
    const [ranking] = useState<any[]>(() => {
        var rankStorage = localStorage.getItem(String(id)) ?? '[]'
        return JSON.parse(rankStorage);
    });

    return(
        <S.Main>
            <S.List>
                <Table>
                    <thead>
                        <tr>
                            <th>Posição</th>
                            <th>Tempo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ranking?.sort((a,b) => new Date(a.rawTime).getTime() - new Date(b.rawTime).getTime()).map((item, index: number) => {
                            const date = new Date(item.rawTime);
                            return(
                                <Fragment>
                                    {item &&
                                        <tr key={index}>
                                            <td>{index+1}º</td>
                                            <td>{date.getSeconds()}s {date.getMilliseconds()}ms</td>
                                        </tr>
                                    }
                                </Fragment>
                            )
                        })}
                    </tbody>
                </Table>
                {ranking.length <= 0 && <h2>Nenhum registro disponível.</h2>}
            </S.List>
        </S.Main>
    )
}

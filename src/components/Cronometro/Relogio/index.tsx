import { segundosParaTempo } from '../../../common/utils/time';
import style from './Relogio.module.scss';

interface Props {
    tempo: number | undefined
}

function Relogio({ tempo = 0 }: Props) {
    const [segundos, minutos, horas] = segundosParaTempo(tempo);
    const [minutoDezena, minutoUnidade] = String(minutos + (horas * 60)).padStart(2, "0");
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, "0");

    return (
        <>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}

export default Relogio;
export function tempoParaSegundos(tempo: string) {
    const [horas = "0", minutos = "0", segundos = "0"] = tempo.split(":");

    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;
    
    return horasEmSegundos + minutosEmSegundos + Number(segundos);
}

export function segundosParaTempo(seg: number) {
    const segundos = seg % 60;
    const minutos = (seg - segundos) % 3600 / 60;
    const horas = (seg - segundos - (minutos * 60)) / 3600;

    return [segundos, minutos, horas];
}
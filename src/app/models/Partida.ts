import {Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToMany}
from 'typeorm';
import Jogador from './Jogador';
import Round from './Round';
@Entity('tb_partida')
export default class Partida {
    @PrimaryColumn('int')
    id: number;
    @Column('timestamp')
    inicio: Date;
    @Column('timestamp')
    fim: Date;
    //associação.
    @ManyToOne(type => Jogador)
    @JoinColumn({name: "jogador_nickname", referencedColumnName:
    "nickname"})
    jogador: Jogador;
    //agregacao por composicao
    @OneToMany(() => Round, round => round.partida)
    rounds: Round[];
}
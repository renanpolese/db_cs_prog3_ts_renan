import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity('tb_local')
export default class Local {
    @PrimaryGeneratedColumn()//geracao automatica de chave primaria
    id: number;

    @Column("text")
    nome: string;

    @Column("text")
    latitude: string;

    @Column("text")
    longitude: string;
}

import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm';
import Local from './Local';
@Entity('tb_mapa')
class Mapa {
    @PrimaryGeneratedColumn()//geracao automatica de chave primaria
    id: number;

    @Column("varchar", { length: 100 })
    nome: string;

    @ManyToMany(() => Local)
    @JoinTable({name : "tb_mapa_local", joinColumn: {name:
    "mapa_id", referencedColumnName: "id"}, inverseJoinColumn: {name:
    "local_id", referencedColumnName: "id"}})
    locais: Local[];
}
export default Mapa;

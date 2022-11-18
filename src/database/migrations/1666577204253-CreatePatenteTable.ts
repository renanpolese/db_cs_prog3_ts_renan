import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatePatenteTable1666577204253 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        columns: [
            {
            name: 'id',
            type: 'serial',
            isPrimary: true
            },
            {
            name: 'nome',
            type: 'varchar(100)',
            isNullable: false
            },
            {
            name: 'cor',
            type: 'varchar(100)',
            isNullable: true
            }
            ]
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_patente'); 
    }

}

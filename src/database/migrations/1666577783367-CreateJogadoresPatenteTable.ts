import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateJogadoresPatenteTable1666577783367 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        columns: [
            {
            name: 'jogador_nickname',
            type: 'varchar(10)',
            isPrimary: true,
            isNullable: false
            },
            {
            name: 'patente_id',
            type: 'int',
            isPrimary: true,
            isNullable: false
            }
            ]
        await queryRunner.createForeignKey(
                'tb_jogador_patente',
                new TableForeignKey({
                name: 'fk_jogador_patente_p',
                columnNames: ['patente_id'],
                referencedTableName: 'tb_patente',
                referencedColumnNames: ['id']
                })
            );
            await queryRunner.createForeignKey(
                'tb_jogador_patente',
                new TableForeignKey({
                name: 'fk_jogador_patente_j',
                columnNames: ['jogador_nickname'],
                referencedTableName: 'tb_jogador',
                referencedColumnNames: ['nickname']
                })
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tb_jogador_patente', "fk_jogador_patente_p");
        await queryRunner.dropForeignKey('tb_jogador_patente', "fk_jogador_patente_j");
        await queryRunner.dropTable('tb_jogador_patente');
    }
}

import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Battle {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pokemon, { eager: true })
  winner: Pokemon;

  @ManyToOne(() => Pokemon, { eager: true })
  looser: Pokemon;

  @CreateDateColumn()
  startTime: Date;

  @Column()
  endTime: Date;

  @Column({ type: 'integer' }) // Usar INTEGER para la duración en milisegundos
  duration: number;

  @Column()
  rounds: number;

  @Column()
  winnerHp: number;
}

import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {User} from "./User";

@Entity()
export class Point {
    @PrimaryGeneratedColumn() id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) date: Date;

    @Column() exercise: number;

    @Column() diet: number;

    @Column() alcohol: number;

    @Column() notes: string;

    @ManyToOne(_type => User, user => user.points, { cascade: ["insert"]}) user: User|null;
}
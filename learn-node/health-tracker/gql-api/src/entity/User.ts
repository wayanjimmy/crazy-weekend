import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Point } from "./Point";

@Entity()
export class User {
  @PrimaryColumn() id: string;

  @Column() firstName: string;

  @Column() lastName: string;

  @OneToMany(_type => Point, points => points.user)
  points: Point[];
}

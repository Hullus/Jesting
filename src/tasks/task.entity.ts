import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { taskStatus } from "./tasks-status";

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title:string;

  @Column()
  description: string;

  @Column()
  status: taskStatus;
}
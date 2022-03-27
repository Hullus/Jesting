import { Injectable, NotFoundException } from "@nestjs/common";
import { taskStatus } from "./tasks-status";
import { v4 as uuid } from "uuid";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { TasksRepository } from "./tasks.repository";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository
  ) {
  }

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  //
  // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //
  //   if (status) {
  //     tasks = tasks.filter((tasks) => tasks.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((tasks) => {
  //       (tasks.title.includes(search) || tasks.description.includes(search));
  //     });
  //   }
  //
  //   return tasks;
  // }
  //
  // getOneTask(id): Task {
  //   const found = this.tasks.find(item => item.id === id);
  //   if (!found){
  //     throw new NotFoundException(`Item with ID of ${id} was not found`);
  //   }
  //   return found;
  // }
  //
  // createTask(createTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: taskStatus.OPEN
  //   };
  //
  //   this.tasks.push(task);
  //   return task;
  // }
  //
  // updateTaskStatus(id: string, status: taskStatus): void {
  //   const task = this.tasks.find(item => item.id === id);
  //   task.status = status;
  // }
  //
  // deleteTask(id): void {
  //   const index = this.tasks.findIndex(item => item.id === id);
  //   if (!index){
  //     throw new NotFoundException(`Item with ID of ${id} was not found`)
  //   }
  //   this.tasks.splice(index, 1);
  // }
}


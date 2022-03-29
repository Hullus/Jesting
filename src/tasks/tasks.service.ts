import { Injectable, NotFoundException } from "@nestjs/common";
import { TaskStatus } from "./tasks-status";
import { v4 as uuid } from "uuid";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { TasksRepository } from "./tasks.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository
  ) {}

  async getTaskById(id: string): Promise<Task>{
    const found = await this.tasksRepository.findOne(id);

    if(!found){
      throw new NotFoundException(`Task with ID "${id}" not found`)
    }

    return found
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return  this.tasksRepository.createTask(createTaskDto);
  }

  async deleteTask(id): Promise<void> {
    await this.tasksRepository.delete(id)
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

  // updateTaskStatus(id: string, status: taskStatus): void {
  //   const task = this.tasks.find(item => item.id === id);
  //   task.status = status;
  // }
}


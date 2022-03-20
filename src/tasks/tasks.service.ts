import { Injectable } from "@nestjs/common";
import { Task, taskStatus } from "./tasks.model";
import { v4 as uuid } from "uuid";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;
    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((tasks) => tasks.status === status);
    }
    if (search) {
      tasks = tasks.filter((tasks) => {
        (tasks.title.includes(search) || tasks.description.includes(search));
      });
    }

    return tasks;
  }

  getOneTask(id): Task {
    return this.tasks.find(item => item.id === id);
  }

  createTask(createTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: taskStatus.OPEN
    };

    this.tasks.push(task);
    return task;
  }

  updateTaskStatus(id: string, status: taskStatus): void {
    const task = this.tasks.find(item => item.id === id);
    task.status = status;
  }

  deleteTask(id): void {
    const index = this.tasks.findIndex(item => item.id === id);
    this.tasks.splice(index, 1);
  }
}


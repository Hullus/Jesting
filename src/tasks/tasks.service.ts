import { Injectable } from "@nestjs/common";
import { Task, taskStatus } from "./tasks.model";
import { v4 as uuid } from "uuid";

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
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

  updateTask(id, status): Task{
    const task = this.tasks.find(item => item.id === id);
    task.status = status;
    // if ()
    return task;
  }

  deleteTask(id): void {
    const index = this.tasks.findIndex(item => item.id === id);
    this.tasks.splice(index, 1);
  }
}


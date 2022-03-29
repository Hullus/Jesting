import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { TaskStatus } from "./tasks-status";
import { CreateTaskDto } from "./dto/create-task.dto";
import { stat } from "fs";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { Task } from "./task.entity";

@Controller("tasks")
export class TasksController {
  constructor(private tasksService: TasksService) {
  }

  @Get(":id")
  getOneTask(@Param("id") id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete(":id")
  deleteTask(@Param("id") id: string): Promise<void> {
    return this.tasksService.deleteTask(id);
  }
}

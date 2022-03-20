import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Task } from "./tasks.model";
import { CreateTaskDto } from "./dto/create-task.dto";
import { stat } from "fs";

@Controller("tasks")
export class TasksController {
  constructor(private tasksService: TasksService) {
  }

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get(":id")
  getOneTask(@Param("id") id: string): Task {
    return this.tasksService.getOneTask(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Patch("/:id/status")
  updateTask(
    @Param("id") id: string,
    @Body("status") status: string
  ): Task {
    console.log("rame rume");
    return this.tasksService.updateTask(id, status);
  }

  @Delete(":id")
  deleteTask(@Param("id") id: string): void {
    this.tasksService.deleteTask(id);
  }
}

import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { taskStatus } from "./tasks-status";
import { CreateTaskDto } from "./dto/create-task.dto";
import { stat } from "fs";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";

@Controller("tasks")
export class TasksController {
  constructor(private tasksService: TasksService) {
  }

  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDto) {
  //   if(Object.keys(filterDto).length){
  //
  //   }else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }
  //
  // @Get(":id")
  // getOneTask(@Param("id") id: string): Task {
  //   return this.tasksService.getOneTask(id);
  // }
  //
  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //   return this.tasksService.createTask(createTaskDto);
  // }
  //
  // @Patch("/:id/status")
  // updateTask(
  //   @Param("id") id: string,
  //   @Body("status") status: taskStatus
  // ): void {
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
  //
  // @Delete(":id")
  // deleteTask(@Param("id") id: string): void {
  //   this.tasksService.deleteTask(id);
  // }
}

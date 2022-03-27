import { taskStatus } from "../tasks-status";

export class GetTasksFilterDto{
  status?: taskStatus;
  search?: string;
}
import { TaskStatus } from "../tasks-status";

export class GetTasksFilterDto{
  status?: TaskStatus;
  search?: string;
}
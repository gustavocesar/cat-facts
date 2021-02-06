import { Status } from './Status';

export interface Fact {
  status: Status;
  type: string;
  deleted: boolean;
  _id: string;
  user: string;
  text: string;
  __v: number;
  source: string;
  updatedAt: string;
  createdAt: string;
  used: boolean;
}

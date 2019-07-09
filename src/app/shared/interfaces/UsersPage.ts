import { IUser } from './User';

export interface IUsersPage {
  "page": string,
  "per_page": string,
  "total": string,
  "total_pages": string,
  "data": [ IUser, IUser, IUser ]
}
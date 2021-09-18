export interface UserInterface {
  id: string;
  username:string;
  password: string;
  email: string;
  profilePic: string;
  isActive: boolean;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

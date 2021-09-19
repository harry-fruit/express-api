import { UserRepository } from "@/src/database/repositories/index";
import { UserInterface } from "@/src/modules/user/core/interfaces/user.interface";

let userRepository: UserRepository = new UserRepository();

export const createUserHandler = async (payload: UserInterface) => {
  const user = await userRepository.create(payload);
  return user;
};

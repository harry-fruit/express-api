import { FindAllFilterInterface } from "@/src/modules/core/interfaces/findAllFilter.interface";
import { UserRepository } from "@/src/database/repositories/index";
import { UserInterface } from "@/src/modules/user/core/interfaces/user.interface";

let userRepository: UserRepository = new UserRepository();

export const findOneUserHandler = async () => {};

export const findAllUsersHandler = async (
  FindFilters: FindAllFilterInterface
): Promise<UserInterface[]> => {
  const users: UserInterface[] = await userRepository.findAll(FindFilters);
  return users;
};

import { UserRepository } from "@/src/database/repositories/index";
import { UserInterface } from "@/src/modules/user/core/interfaces/user.interface";

const userRepository: UserRepository = new UserRepository();

export const createUserHandler = async (payload: UserInterface): Promise<UserInterface> => {
	const user = await userRepository.create(payload);
	return user;
};

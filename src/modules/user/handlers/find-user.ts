import { FindAllFilterInterface } from "@/src/modules/core/interfaces/findAllFilter.interface";
import { UserRepository } from "@/src/database/repositories/index";
import { UserInterface } from "@/src/modules/user/core/interfaces/user.interface";
import { ErrorHandler } from "@/src/utils/errorHandler";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const userRepository: UserRepository = new UserRepository();

export const findUserHandler = async (id: string): Promise<UserInterface> => {
	try {
		const user: UserInterface = await userRepository.findOneById(id);
		return user;
	} catch (error) {
		throw new ErrorHandler(StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR);
	}
};

export const findAllUsersHandler = async (
	FindFilters: FindAllFilterInterface
): Promise<UserInterface[]> => {
	try {
		const users: UserInterface[] = await userRepository.findAll(FindFilters);
		return users;
	} catch (error) {
		throw new ErrorHandler(StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR);
	}
};

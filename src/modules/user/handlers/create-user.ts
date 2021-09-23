import { UserRepository } from "@/src/database/repositories/index";
import { UserInterface } from "@/src/modules/user/core/interfaces/user.interface";
import { ErrorHandler } from "@/src/utils/errorHandler";
import { HttpResponse } from "@/src/utils/http-response";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { UserDto } from "../core/dtos/user.dto";

const userRepository: UserRepository = new UserRepository();

export const createUserHandler = async (payload: UserDto): Promise<HttpResponse<UserInterface | string>> => {
	try {
		const createdUser = await userRepository.create(payload) ;

		if (!createdUser) {
			const httpResponse: HttpResponse <string> = new HttpResponse(StatusCodes.NOT_ACCEPTABLE, ReasonPhrases.NOT_ACCEPTABLE, "Usuário já existe");
			return httpResponse;
		}
		const httpResponse = new HttpResponse(StatusCodes.CREATED, ReasonPhrases.CREATED, createdUser as UserInterface);
		return httpResponse;
	} catch (error){
		throw new ErrorHandler(StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR);
	}
};

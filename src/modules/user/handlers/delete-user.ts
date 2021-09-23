import { UserRepository } from "@/src/database/repositories";
import { HttpResponse } from "@/src/utils/http-response";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const userRepository: UserRepository = new UserRepository();

export const deleteUserHandler = async (id: string): Promise<HttpResponse<string>> => {
    let httpResponse: HttpResponse<string>;
    const isDeleted: boolean = await userRepository.delete(id);

    if(!isDeleted){
		httpResponse = new HttpResponse(StatusCodes.BAD_REQUEST, ReasonPhrases.BAD_REQUEST, "Usuário NÃO deletado.");
        return httpResponse;
	}

	httpResponse = new HttpResponse(StatusCodes.OK, ReasonPhrases.OK, "Usuário Deletado com sucesso.");
    return httpResponse;
};
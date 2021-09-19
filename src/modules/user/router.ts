import { FindAllFilterInterface } from "@/src/modules/core/interfaces/findAllFilter.interface";
import express, { Request, Response } from "express";
import { UserInterface } from "@/src/modules/user/core/interfaces/user.interface";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import {
	createUserHandler,
	findAllUsersHandler,
	findUserHandler,
} from "@/src/modules/user/handlers/index";
import { HttpResponse } from "@/src/utils/http-response";
import { ErrorHandler } from "@/src/utils/errorHandler";

export const userRouter = express.Router();

userRouter.get("/", async (request: Request, response: Response) => {
	try {
		const currentPage = request.query.currentPage as unknown as number;
		const limit: number = (request.query.limit as unknown as number) || 10;

		const findFilters: FindAllFilterInterface = {
			limit: limit,
			currentPage: currentPage,
		};
		const users: UserInterface[] = await findAllUsersHandler(findFilters);
		const httpResponse = new HttpResponse(StatusCodes.OK, ReasonPhrases.OK, users);

		response.send(httpResponse);
	} catch (error) {
		throw new ErrorHandler(StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR);
	}
});

userRouter.get("/:id", async (request: Request, response: Response) => {
	try{
		const { id } = request.params;
		const user: UserInterface = await findUserHandler(id) as unknown as UserInterface;
		response.send(user);
	} catch (error) {
		throw new ErrorHandler(StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR);
	}
});

userRouter.post("/", async (request: Request, response: Response) => {
	const payload: UserInterface = await request.body;
	const user = await createUserHandler(payload);
	response.send(user);
});

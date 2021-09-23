import { User } from "@/src/modules/user/core/entities/user.entity";
import { UserInterface } from "@/src/modules/user/core/interfaces/user.interface";
import { FindAllFilterInterface } from "@/src/modules/core/interfaces/findAllFilter.interface";
import { ErrorHandler } from "@/src/utils/errorHandler";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { Op } from "sequelize";

export class UserRepository {
	public async findOneById(id: string):Promise<UserInterface> {
		try{
			const user: UserInterface = (await User.findOne({
				where: { id },
			})) as unknown as UserInterface;
			return user;
		} catch(error) {
			throw new ErrorHandler(StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR, error);
		}
	}

	public async findAll(
		FindFilters: FindAllFilterInterface
	): Promise<UserInterface[]> {
		const { limit, currentPage } = FindFilters;

		const users: UserInterface[] = (await User.findAll({
			limit: limit || 10,
			offset: limit * (currentPage - 1),
		})) as unknown as UserInterface[];

		return users;
	}

	public async create(payload: UserInterface): Promise<UserInterface | boolean> {
		try {
			const { username, email } = payload;
			const userExists = await User.findOne({ where: {
				[Op.or]: [{ username }, { email }]
			}}) as unknown as UserInterface | null;
			if (userExists) {
				return false;
			}
			const user: UserInterface = await User.create(payload) as unknown as UserInterface;
			return user;

		} catch (error) {
			throw new ErrorHandler(StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR);
		}
	}

	public async delete(id: string): Promise<boolean> {
		const response: boolean = await User.destroy({ where: { id } }) as unknown as boolean;
		return response;
	}
}

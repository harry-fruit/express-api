import { User } from "@/src/modules/user/core/entities/user.entity";
import { UserInterface } from "@/src/modules/user/core/interfaces/user.interface";
import { FindAllFilterInterface } from "@/src/modules/core/interfaces/findAllFilter.interface";

export class UserRepository {
	public async findOneById(id: string):Promise<UserInterface> {
		const user: UserInterface = (await User.findOne({
			where: { id },
		})) as unknown as UserInterface;
		return user;
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

	public async create(payload: UserInterface): Promise<UserInterface> {
		const user: UserInterface = await User.create(payload) as unknown as UserInterface;
		return user;
	}
}

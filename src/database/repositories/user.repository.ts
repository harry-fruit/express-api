import { User } from "@/src/modules/user/core/entities/user.entity";
import { UserInterface } from "@/src/modules/user/core/interfaces/user.interface";
import { FindAllFilterInterface } from "@/src/modules/core/interfaces/findAllFilter.interface";

export class UserRepository {
  public async findOneById(id: string) {
    const user: UserInterface = (await User.findOne({
      where: { id },
    })) as unknown as UserInterface;
    return user.id;
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

  public async create(payload: UserInterface) {
    const user = await User.create(payload);
    return user;
  }
}

import { User } from "@/src/modules/users/core/entities/user.entity";
import { UserInterface } from "@/src/modules/users/core/interface/user.interface";

export class UserRepository {
  constructor() {}

  public async findOneById(id: string) {
    const user: UserInterface = (await User.findOne({ where: { id } })) as any;
    return user.id;
  }
}

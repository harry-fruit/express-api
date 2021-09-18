import { UserRepository } from "@/src/database/repositories/user.repository"

let userRepository: UserRepository = new UserRepository;

export const createUser = async () => {}
export const findUser = () => {
    return userRepository.findOneById('2c931cff-53a7-4c7b-a887-053c8c1c6dad')
}
import { User } from "@/src/database/models/users.entity"

export const createUser = async () => {
    User.create()
}
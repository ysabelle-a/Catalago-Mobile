import AsyncStorage from '@react-native-async-storage/async-storage'

const USER_KEY = '@dummyshop:user'

export interface User {
    email: string
    password: string
}

export const saveUser = async (user: User) => {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const getUser = async (): Promise<User | null> => {
    const data = await AsyncStorage.getItem(USER_KEY)

    if (!data) {
        return null
    }

    return JSON.parse(data)
}

export const logout = async () => {
    await AsyncStorage.removeItem(USER_KEY)
}
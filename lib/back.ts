import { RegisterRequest, LoginRequest } from './types'

export const BE_URL = process.env.BE_URL || 'http://localhost:3001';

export async function registerUserService(userData: RegisterRequest) {
    const url = `${BE_URL}/api/auth/register`

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })

        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error('Error registering user:', error)
        throw error
    }
}


export async function loginUserService(userData: LoginRequest) {
    const url = `${BE_URL}/api/auth/login`

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })

        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error('Error login user:', error)
        throw error
    }
}
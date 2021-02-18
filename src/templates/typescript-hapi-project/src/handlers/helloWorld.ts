import { IResponseObject } from '../types/types'

export const helloWorld = (): IResponseObject<string> => ({ data: 'Hello World!', status: "SUCCESS", errors: {}});



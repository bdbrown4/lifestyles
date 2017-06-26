export interface ListResult<T> { //extension, generic object, interface
    key: string
    values: T[]
    total: number
}
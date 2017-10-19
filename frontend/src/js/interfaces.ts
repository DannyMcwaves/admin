interface likes {
    [index:number]: string   
}

interface CachedUser {
    _id?: string,
    name?: string,
    profileUrl?: string,
    age?: number,
    position?: string,
    yearStarted?: number,
    maritalStatus?: string,
    kids?: boolean,
    likes?: likes,
    motivation?: string
}

interface loadedUser {
    _id?: string,
    name?: string,
    age?: number,
    position?: string
}

interface User {
    [index:number]: CachedUser
}


// this is the interface of the actions to tbe dispatched.
interface LoadAction {
    type: string
}

interface UserAction {
    type: string,
    _id?: number,
    data?: object
}

interface useAction {
    type: string,
    data: object
}

interface usersReducer {
    // this suggests that the interface is a function 
    (state: User[], action: UserAction): User
}

interface userReducer{
    (state: object, action: useAction): object
}

interface loadReducer {
    (state: string, action: LoadAction): string
}

interface Store {
    readonly loadState: string,
    readonly user: object,
    readonly users: User[]
}


export {LoadAction, loadReducer, usersReducer, Store, User, UserAction, userReducer};

let subs: number | string = 23 // union type
subs = 'shubham' // fine

// here use of any type is not recommended because it can lead to unexpected behavior and make the code less type-safe. Instead, using union types like `number | string` allows for more flexibility while still maintaining type safety.

// api response
let applicationresuest: 'pending' | 'success' | 'error' = 'pending' // union type
applicationresuest = 'success' // fine
applicationresuest = 'error' // fine
// applicationresuest = 'failed' // error -- type error

let apiResponse: any = {
    status: 200,
    data: { 
        message: applicationresuest,
        user: {
            id: 1,
            name: 'shubham'
        }   
    }
}
apiResponse = 'error' // fine but not recommended

const orders: (string | number)[] = [12,4,5,78,23,'shubham'] // union type

for (const order of orders) {
    if (typeof order === 'number') {
        console.log(`order is number ${order}`)
    } else {
        console.log(`order is string ${order}`)
    }
}

// any 

let arrData: any[] = [1, 'shubham', true, { name: 'shubham' }, [1, 2, 3]] // any type array

// any type is useful when you want to store values of different types in a single variable or array, but it should be used sparingly and with caution. It can lead to unexpected behavior and make the code less type-safe.

for (const data of arrData) {
    console.log(`data is ${data}`)
}










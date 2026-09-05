function getName(kind: string | number) {
    if (typeof kind === 'string') {
        return kind;
    }
    return kind.toString();
}

getName('shubham') // fine
getName(23) // fine
getName(true) // error -- type error


// new 
function getName1(mess: string) {
    if (typeof mess === 'string') {
        return mess;
    }
    return mess.toString();
}

getName1('shubham') // fine
getName1(23) // error -- type error
getName1(true) // error -- type error

// asosting func

function getName2(size: 'small' | 'medium' | 'large' | number) {
    if (size === 'small') {
        return 'size is small';
    }
    if ( size === 'medium') {
        return 'size is medium';
    }
    if (size === 'large') {
        return 'size is large';
    }
    return size.toString();
}

getName2('small') // fine
getName2('medium') // fine
getName2('large') // fine
getName2(23) // fine
getName2('extra-large') // error -- type error



// type safe 
class PersonData {
    pName(){
        return 'shubham'
    }
}

class PersonData1 {
    pName1(){
        return 'shubham'
    }
}

function getPersonData(person: PersonData | PersonData1) {
    if (person instanceof PersonData) {
        return person.pName();
    }
    return person.pName1();
}

getPersonData(new PersonData()) // fine
getPersonData(new PersonData1()) // fine
getPersonData('shubham') // error -- type error

// type safe with interface

type ChaiOrder = {
    type: string,
    size: 'small' | 'medium' | 'large',
    sugar: boolean,
    milk: boolean
}

function getChaiOrder(order: any): order is ChaiOrder {
 return (
    
    order && typeof order === 'object' && 'type' in order && 'size' in order && 'sugar' in order && 'milk' in order

 );

}

function serveChai(order: any) {
    if (getChaiOrder(order)) {
        console.log(`Serving ${order.size} ${order.type} chai with ${order.sugar ? 'sugar' : 'no sugar'} and ${order.milk ? 'milk' : 'no milk'}`);
    } else {
        console.log('Invalid order');
    }
}

serveChai({ type: 'masala', size: 'medium', sugar: true, milk: true });



// production frendaley typescript 



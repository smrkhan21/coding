// 27. Reverse a linked list.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data)
        if(!this.head) {
            this.head = newNode;
            return
        }

        let current = this.head;
        while(current.next) {
            current = current.next
        }
        
        current.next = newNode;
    }

    reverse() {
        let current = this.head;
        let previous = null;

        while(current !== null) {
            let temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }
        
        return previous;
        
    }
}

let myList = new LinkedList()
myList.append(1)
myList.append(2)
myList.append(3)
myList.append(4)

console.log(myList.reverse())
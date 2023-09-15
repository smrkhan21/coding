// Problem: Find Middle Element of the list

class Node {
    constructor(data) {
        this.data =  data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    append(data) {
        let newNode = new Node(data)
        if(!this.head) {
            this.head = newNode
            return;
        }

        let myNode = this.head
        while(myNode.next) {
            myNode = myNode.next
        }
        myNode.next = newNode
    }

    middleElemet() {
        if(!this.head) return false

        let slowPointer = this.head
        let fastPointer = this.head

        while(fastPointer && fastPointer.next) {
            slowPointer = slowPointer.next
            fastPointer = fastPointer.next.next
        }

        return slowPointer
    }
}



let newList = new LinkedList();
newList.append(1)
newList.append(2)
newList.append(3)
newList.append(4)
newList.append(5)
newList.append(6)
newList.append(7)


console.log(newList.middleElemet().data)
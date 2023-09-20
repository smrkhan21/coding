// 34. Remove Nth node from the end of a linked list.

class Node {
    constructor(data) {
        this.val = data
        this.next = null
    }
}

function removeNthElement(head, itemIndex) {
    let newList = new Node(0)
    let curr = newList

    let current = head
    let count = 1
    while(current) {
        if(count !== itemIndex) {
            curr.next = new Node(current.val)
            curr = curr.next
        }
        current = current.next
        count++;
    }

    return newList.next
}

let node1 = new Node(1)
node1.next = new Node(2)
node1.next.next = new Node(2)
node1.next.next.next = new Node(1)

console.log(removeNthElement(node1, 3))
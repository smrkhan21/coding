// 31. Implement a function to remove duplicates from a sorted linked list.

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

function removeDuplicates(head) {
    let current = head;
    while (current !== null && current.next !== null) {
        if(current.data === current.next.data) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    return head
}

function linkedListToArray(head) {
    const result = [];
    let current = head;
    while(current !== null) {
        result.push(current.data)
        current = current.next
    }
    return result;
}
let node1 = new Node(1)
node1.next = new Node(2)
node1.next.next = new Node(2)
node1.next.next.next = new Node(3)
node1.next.next.next.next = new Node(4)
node1.next.next.next.next.next = new Node(4)

console.log(linkedListToArray(removeDuplicates(node1)))
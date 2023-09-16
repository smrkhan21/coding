// 28. Detect if a linked list has a cycle.


class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

function hasCycle(head) {
    let slow = head
    let fast = head

    while(fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next

        if(slow === fast) {
            return true
        }
    }
    return false
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node1

console.log(hasCycle(node1))
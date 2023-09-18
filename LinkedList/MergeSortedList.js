// 30. Merge two sorted linked lists into a single sorted list.

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

function mergeSortedList(list1, list2) {
    let resultList = new Node(0); //0->1->2-2->3-4->4->6->8->10
    let current = resultList;
    while(list1 != null && list2 != null) {
        if(list1.data < list2.data) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }

        current = current.next
    }

    if(list1 != null) {
        current.next = list1
    }

    if(list2 != null) {
        current.next = list2
    }

    return resultList.next
}

let node1 = new Node(1)
node1.next = new Node(2)
node1.next.next = new Node(3)
node1.next.next.next = new Node(4)

let node2 = new Node(2)
node2.next = new Node(4)
node2.next.next = new Node(6)
node2.next.next.next = new Node(8)
node2.next.next.next.next = new Node(10)


function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

console.log(linkedListToArray(mergeSortedList(node1, node2)))
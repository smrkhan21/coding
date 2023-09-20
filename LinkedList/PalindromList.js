// 33. Check if a linked list is a palindrome.

class Node {
    constructor(data) {
        this.val = data
        this.next = null
    }
}

function isPalindrom(list) {
   const listArray = []

   while(list) {
    listArray.push(list.val)
    list = list.next
   }

   for(let i = 0, j = listArray.length -1; i<j; i++, j--) {
    if(listArray[i] !== listArray[j]) return false
   }
   return true
}



let node1 = new Node(1)
node1.next = new Node(2)
node1.next.next = new Node(2)
node1.next.next.next = new Node(1)

console.log(isPalindrom(node1))

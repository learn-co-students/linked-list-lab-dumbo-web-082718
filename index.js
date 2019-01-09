// returns the name of the node passed through
function getName(node) {
  return node.name
}

// return head node of the linked list
function headNode (linkedList, collection) {
  return collection[linkedList]
}

// return the following node every time it is called
function next (node, collection) {
  let nextAddress = node.next
  return collection[`${nextAddress}`]
}

// return the node at the provided index
function nodeAt (index, linkedList, collection) {
  let currentNode = headNode(linkedList, collection)
  for (let i = 0; i < index; i++) {
    currentNode = next(currentNode, collection)
  }
  return currentNode
}

// return the address of the node at the address
function addressAt (index, linkedList, collection) {
  if (index === 0){
    return linkedList
  } else {
    let node = nodeAt(index - 1, linkedList, collection)
    return node.next
  }
}

// return the index of the provided node
function indexAt (node, collection, linkedList) {
  let currentNode = headNode(linkedList, collection)
  let index = 0
  while(currentNode !== node) {
    ++index
    currentNode = next(currentNode, collection)
  }
  return index
}

// set the next property of the inserted node
// set the next property of the node previous to the inserted node
// should insert the node at the provided index, while maintaining order of all the other nodes
function insertNodeAt (index, address, linkedList, collection) {
  let previousNode = nodeAt(index - 1, linkedList, collection)
  let nextNode = nodeAt(index, linkedList, collection)

  let previousNodeIndex = indexAt(previousNode, collection, linkedList)
  let nextNodeIndex = indexAt(nextNode, collection, linkedList)

  let previousNodeAddress = addressAt(previousNode, linkedList, collection)
  let nextNodeAddress = addressAt(nextNode, linkedList, collection)

  previousNode.next = address
  let newNode = collection[address]
  newNode.next = nextNodeAddress
}

// should set the next property of the node previous to the deleted node
// should delete the node at the provided index, while maintaining order of all the other nodes
function deleteNodeAt (index, linkedList, collection) {
  let previousNode
  let currentNode = headNode(linkedList, collection)
  for(let i = 0; i < index; i++) {
    previousNode = currentNode
    currentNode = next(currentNode, collection)
  }
  previousNode.next = currentNode.next
}

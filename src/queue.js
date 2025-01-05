const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // Указатель на начало очереди (первый элемент)
    this.tail = null; // Указатель на конец очереди (последний элемент)
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      // Если очередь пуста, новый узел становится и головой, и хвостом
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Добавляем новый узел в конец очереди
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return null; // Если очередь пуста, возвращаем null
    }
    const dequeuedValue = this.head.value; // Запоминаем значение головы
    this.head = this.head.next; // Перемещаем голову на следующий элемент
    if (!this.head) {
      this.tail = null; // Если очередь стала пустой, сбрасываем хвост
    }
    return dequeuedValue; // Возвращаем значение, которое было в голове
  }

  getUnderlyingList() {
    // Возвращаем связный список, начиная с головы
    return this.head;
  }
}
module.exports = {
  Queue
};
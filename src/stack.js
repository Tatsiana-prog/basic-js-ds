const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = []; // Массив для хранения элементов стека
  }

  push(element) {
    this.items.push(element); // Добавляем элемент в конец массива
  }

  pop() {
    if (this.isEmpty()) {
      return null; // Если стек пуст, возвращаем null
    }
    return this.items.pop(); // Удаляем и возвращаем последний элемент массива
  }

  peek() {
    if (this.isEmpty()) {
      return null; // Если стек пуст, возвращаем null
    }
    return this.items[this.items.length - 1]; // Возвращаем последний элемент массива без удаления
  }

  isEmpty() {
    return this.items.length === 0; // Проверяем, пуст ли стек
  }
}

module.exports = {
  Stack
};

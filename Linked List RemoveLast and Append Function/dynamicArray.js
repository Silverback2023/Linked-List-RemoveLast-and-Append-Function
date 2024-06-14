class DynamicArray {
    constructor() {
        this.array = [];
    }

    append(element) {
        this.array.push(element);
    }

    removeLast() {
        return this.array.pop();
    }

    printArray() {
        for (let i = 0; i < this.array.length; i++) {
            console.log(this.array[i]);
        }
    }

    insertAt(index, element) {
        this.array.splice(index, 0, element);
    }

    deleteAt(index) {
        this.array.splice(index, 1);
    }

    search(element) {
        return this.array.find((el) => el === element);
    }

    update(index, element) {
        this.array[index] = element;
    }
}

// Testing the DynamicArray class
let dynamicArray = new DynamicArray();

let initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < initialArray.length; i++) {
    dynamicArray.append(initialArray[i]);
}

console.log("Initial Array:");
dynamicArray.printArray(); // O(n)

dynamicArray.insertAt(6, 6.5); // O(n)
console.log("\nArray after insertion at index 6:");
dynamicArray.printArray(); // O(n)

dynamicArray.deleteAt(6); // O(n)
console.log("\nArray after deletion at index 6:");
dynamicArray.printArray(); // O(n)

const searchedElement = dynamicArray.search(5); // O(n)
console.log(`\nSearch for 5: ${searchedElement !== undefined ? 'Found' : 'Not Found'}`); // O(n)

dynamicArray.update(6, 6.5); // O(1)
console.log("\nArray after update at index 6:");
dynamicArray.printArray(); // O(n)

dynamicArray.removeLast(); // O(1)
console.log("\nArray after removing the last element:");
dynamicArray.printArray(); // O(n)

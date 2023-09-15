# Simple Data Structures Library (TypeScript)

![GitHub license](https://img.shields.io/github/license/fabryscript/alchemical)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/fabryscript/alchemical)
![GitHub last commit](https://img.shields.io/github/last-commit/fabryscript/alchemical)

A TypeScript library that provides a collection of simple data structures, designed to help you work with common data organization and manipulation tasks.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available Data Structures](#available-data-structures)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Easy-to-Use:** The library offers straightforward APIs for working with data structures.
- **Type-Safe:** Written in TypeScript, ensuring type safety in your code.
- **Well-Documented:** Includes detailed documentation and usage examples.
- **Open Source:** You can use, modify, and contribute to this library freely.

## Installation

You can install this library via your package manager of choice:

```bash
npm install @fabryscript/data-structures
# or
yarn add @fabryscript/data-structures
# or
pnpm install @fabryscript/data-structures
# or
bun install @fabryscript/data-structures
```

## Usage

```typescript
import { Stack, Queue, HashTable } from '@fabryscript/data-structures';

// Create instances of data structures
const stack = new Stack();
const queue = new Queue();
const hashTable = new HashTable<number>();

// Use the data structures
stack.push(42);
queue.push('Hello, World!');
hashTable.add('John', 25);
```
## Available Data Structures
### Stack
A simple implementation of a stack data structure.

- `push(item: any)`: Pushes an item onto the stack.
- `pop(): any | undefined`: Pops an item from the stack.
- `peek(): any | undefined`: Retrieves the top item without removing it.
- `isEmpty(): boolean`: Checks if the stack is empty.
- `length(): number`: Returns the current length of the stack.

### Queue
A simple implementation of a queue data structure.

- `push(item: any)`: Adds an item to the back of the queue.
- `pop(): any | undefined`: Removes an item from the front of the queue.
- `peek(): any | undefined`: Retrieves the front item without removing it.
- `isEmpty(): boolean`: Checks if the queue is empty.
- `length(): number`: Returns the current length of the queue.
### HashTable

A simple implementation of a hash table data structure.

- `add(key: string, data: T): void`: Adds data to the hash table.
- `get(key: string): BucketData<T>[]`: Retrieves data associated with a key.
- `delete(key: string): void`: Deletes data associated with a key.
## Contributing
Contributions are welcome! If you have ideas for improvements or new features, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
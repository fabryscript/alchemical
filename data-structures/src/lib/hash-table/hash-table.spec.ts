import { HashTable } from './index';

describe('HashTable', () => {
  let hashTable: HashTable<number>;

  beforeEach(() => {
    hashTable = new HashTable<number>();
  });

  it('should add data to the hash table', () => {
    hashTable.add('John', 25);
    hashTable.add('Alice', 30);

    const johnData = hashTable.get('John');
    const aliceData = hashTable.get('Alice');

    expect(johnData).toEqual([{ originalKey: 'John', data: 25 }]);
    expect(aliceData).toEqual([{ originalKey: 'Alice', data: 30 }]);
  });

  it('should retrieve data from the hash table', () => {
    hashTable.add('John', 25);

    const johnData = hashTable.get('John');

    expect(johnData).toEqual([{ originalKey: 'John', data: 25 }]);
  });

  it('should delete data from the hash table', () => {
    hashTable.add('John', 25);

    let johnData = hashTable.get('John');
    expect(johnData).toEqual([{ originalKey: 'John', data: 25 }]);

    hashTable.delete('John');

    johnData = hashTable.get('John');
    expect(johnData).toEqual([]);
  });

  it('should handle collisions correctly', () => {
    // Force a collision by setting a small hash table size
    const smallHashTable = new HashTable<number>(2);
    
    smallHashTable.add('John', 25);
    smallHashTable.add('Alice', 30);

    const johnData = smallHashTable.get('John');
    const aliceData = smallHashTable.get('Alice');

    expect(johnData).toEqual([{ originalKey: 'John', data: 25 }]);
    expect(aliceData).toEqual([{ originalKey: 'Alice', data: 30 }]);
  });

  it('should handle empty keys', () => {
    hashTable.add('', 42);

    const emptyKeyData = hashTable.get('');

    expect(emptyKeyData).toEqual([{ originalKey: '', data: 42 }]);
  });
});

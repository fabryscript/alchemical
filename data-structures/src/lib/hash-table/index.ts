/**
 * Represents data stored in a bucket.
 * @template T - The type of data stored in the bucket.
 */
interface BucketData<T> {
  originalKey: string; // The original key associated with the data.
  data: T; // The data stored in the bucket.
}

const DEFAULT_HASH_TABLE_SIZE = 32;

/**
 * Represents a hash table data structure.
 * @template T - The type of data to be stored in the hash table.
 */
export class HashTable<T> {
  private buckets: BucketData<T>[][] = [];

  /**
   * Creates a new HashTable instance.
   * @param {number} size - The size of the hash table (default is 32).
   */
  constructor(size: number = DEFAULT_HASH_TABLE_SIZE) {
    // Initialize the buckets array with empty arrays.
    this.buckets = Array(size)
      .fill(null)
      .map(() => new Array<BucketData<T>>());
  }

  /**
   * Hashes a key to determine the bucket index.
   * @param {string} key - The key to be hashed.
   * @returns {number} - The index of the bucket where the key belongs.
   */
  private hash(key: string): number {
    const hash = Array.from(key).reduce(
      (acc, currentKey) => acc + currentKey.charCodeAt(0),
      0
    );

    return hash % this.buckets.length;
  }

  /**
   * Adds data to the hash table.
   * @param {string} key - The key associated with the data.
   * @param {T} data - The data to be stored in the hash table.
   * @example
   * const hashTable = new HashTable<number>();
   * hashTable.add("John", 25);
   */
  public add(key: string, data: T) {
    const hashedKey = this.hash(key);
    this.buckets[hashedKey].push({
      originalKey: key,
      data,
    });
  }

  /**
   * Retrieves data from the hash table based on the key.
   * @param {string} key - The key used to retrieve data.
   * @returns {BucketData<T>[]} - An array of data associated with the key (can be empty).
   * @example
   * const hashTable = new HashTable<number>();
   * hashTable.add("John", 25);
   * const johnData = hashTable.get("John");
   * // johnData will contain [{ originalKey: "John", data: 25 }]
   */
  public get(key: string): BucketData<T>[] {
    const hashedKey = this.hash(key);
    return this.buckets[hashedKey];
  }

  /**
   * Deletes data associated with the key from the hash table.
   * @param {string} key - The key used to delete data.
   * @example
   * const hashTable = new HashTable<number>();
   * hashTable.add("John", 25);
   * hashTable.delete("John");
   * const johnData = hashTable.get("John");
   * // johnData will be an empty array []
   */
  public delete(key: string) {
    const hashedKey = this.hash(key);
    this.buckets[hashedKey] = [];
  }
}

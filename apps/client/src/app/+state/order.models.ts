/**
 * Interface for the 'Order' data
 */
export interface Order {
  coffeeType: CoffeeType
}

export type CoffeeType = 'cappuchino' | 'raf' | 'latte';

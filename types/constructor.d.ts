/**
 * Constructor - a Class
 */
type Constructor = Partial<new (...args: any[]) => any>

interface Constructable {
  constuctor: Function
}

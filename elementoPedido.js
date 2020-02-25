import Producto from "./producto.js"
import Precios from "./precio.js"
export default class ElementoPedido{
    /**
     * 
     * @param {Producto} producto 
     * @param {number} cantidad 
     */
    constructor(producto, cantidad){
        this.producto = producto
        this.cantidad = cantidad
    }
    getDescripcion(){
        return `${this.cantidad} x ${this.producto.nombre} ${(this.producto.precio).getPrecios()}`
    }
}
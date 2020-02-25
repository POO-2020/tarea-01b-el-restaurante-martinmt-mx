import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Direccion from "./dirección.js"
import Precio from "./precio.js"
import Producto from "./producto.js"
class Main{
    probarFecha(){
        let fecha1 = new Fecha(12,4,2022)
        console.log(fecha1.getAños())
        console.log(fecha1.getMeses())
        console.log(fecha1.getSemanas())
        console.log(fecha1.getDias())
        console.log(fecha1.getFecha())
        console.log(fecha1.getDiaFecha())
    }
    probarTiempo(){
        let tiempo = new Tiempo(11, 32, "pm")
        console.log(tiempo.getFormato12())
        console.log(tiempo.getFormato24())
    }
    probarDireccion(){
        let direc1 = new Direccion("Benito Juarez", 152, 0, "Centro", 22442, "Colima", "Colima")
        let direc2 = new Direccion("Benito Juarez", 152, 253, "Centro", 22442, "Colima", "Colima")
        console.log(direc1.getFormatoCorto())
        console.log(direc1.getFormatoExtendidio())
        console.log(direc2.getFormatoCorto())
        console.log(direc2.getFormatoExtendidio())
    }
    probarPrecios(){
        let precio1 = new Precio(1442.32)
        console.log(precio1.getPrecios())
    }
    probarProducto(){
        let producto1 = new Producto("Pizza Hawaiana", new Precio(2398.41))
        console.log(producto1.getDescripcion())
    }
}
let app = new Main()
app.probarFecha()
app.probarTiempo()
app.probarDireccion()
app.probarPrecios()
app.probarProducto()
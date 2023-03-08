// Array Usuarios

const usuarios = [
    {id: 1, nombre: "Maria", apellido: "Ruiz", edad: 25, tel: 634563, dni: 12312312},
    {id: 2, nombre: "Javier", apellido: "Mariscal", edad: 35, tel: 123456, dni: 23435345},
    {id: 3,  nombre: "Octavio", apellido: "Timtin", edad: 18, tel: 645645, dni: 1231234523},
    {id: 4, nombre: "Mariano", apellido: "Josefiscal", edad: 50, tel: 865785, dni: 4441231},
    ]

    class UsuarioConstructor{
        constructor(nombre, apellido, edad, tel, dni){
            this.id = usuarios.length + 1;
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.tel = tel;
            this.dni = dni;
    }
}
        const usuariosClientes = [];

    const stock = [
        {id: 1, nombreProducto: "collar", precioProducto: 1500, stockTotal: 10},
        {id: 2, nombreProducto: "aretes", precioProducto: 2000, stockTotal: 5},  
        {id: 3, nombreProducto: "pulsera", precioProducto: 1000, stockTotal: 6},
        {id: 4, nombreProducto: "tobillera", precioProducto: 900, stockTotal: 2},
        {id: 5, nombreProducto: "anillos", precioProducto: 1250, stockTotal: 8},
        {id: 6, nombreProducto: "pendientes", precioProducto: 1350, stockTotal: 100},
    ];
    const carrito = [];
    const nombresStock = [];
    
    stock.forEach(item => nombresStock.push(item.nombreProducto));
 


         class Cliente {
        constructor(dniUsuarioBuscado){
            this.nombre = dniUsuarioBuscado.nombre;
            this.apellido = dniUsuarioBuscado.apellido;
            this.edad = dniUsuarioBuscado.edad;
            this.tel = dniUsuarioBuscado.tel;
            this.dni = dniUsuarioBuscado.dni;
        } 
    } 
    class Producto {
        constructor(nombreProducto, precioProducto, stockTotal){
            this.idProducto = stock.length + 1;
            this.nombreProducto = nombreProducto;
            this.precioProducto = precioProducto;
            this.stockTotal = stockTotal;
        } 
    }
    
    verificarOAgregarProducto = () => {
        let buscadorNombre = prompt(`Que producto desea verificar de su registro: / ${concatenados}`);
        let productoEncontrado = stock.find(item => item.nombreProducto === buscadorNombre);
    
        if (productoEncontrado){
            alert("El producto ya existe en la base de datos")
            let sumarStockPregunta = prompt("Prefiere sumarle cantidad al stock? Responder con *si* o *no*");
            if(sumarStockPregunta.toLowerCase() == "si"){
                let sumarStockCantidad = parseInt(prompt("Cuantas unidades de stock desea agregar?"));
                productoEncontrado.stockTotal += sumarStockCantidad;
                    let mensaje = 
                    `
                    ID: ${productoEncontrado.id}
                    Nombre: ${productoEncontrado.nombreProducto}
                    Precio: ${productoEncontrado.precioProducto}
                    Stock: ${productoEncontrado.stockTotal}
                    `
                    alert(mensaje);
            
            }
        }
        else {
            let siONo = prompt("El producto no esta en nuestra base de datos, quieres agregarla?");
                if (siONo.toLowerCase() === "si"){
                    let nombreProducto = prompt("Ingrese el nombre del nuevo producto");
                     let precioProducto = parseInt(prompt("Ingrese el precio del nuevo producto"));
                     let stockTotal = parseInt(prompt("Ingrese la cantidad de stock del nuevo producto"));  
                  
                     stock.push(new Producto(nombreProducto, precioProducto, stockTotal));
                } 
                
                else {
                    alert("Operacion Cancelada")
                }
            }
    }
aumentarStock = () => {
    let sumarStock = prompt("Que producto quieres agregarle stock? " + concatenados);
    let producto = stock.find(i => i.nombreProducto === sumarStock);
    let cantidad = parseInt(prompt("Cuanta cantidad le quiere agregar?"));
        producto.stockTotal = producto.stockTotal + cantidad;
        alert(`A ${sumarStock} se le añadieron ${cantidad} quedando con un total de ${producto.stockTotal}`);
}
    
    /* OPERACIONES CLIENTES */
comprar = () => {
    let productoAComprar = prompt("Que producto desea comprar? / " + concatenados);
        
        productoAComprarEncontrado = stock.find(item => item.nombreProducto === productoAComprar);
    
    if (productoAComprarEncontrado){
            
            let dniUsuario = prompt("Ingrese su numero de DNI para su correcto reconocimiento");
            let dniUsuarioBuscado = usuarios.find(item => item.dni === dniUsuario);
    
            alert(`Usted es ${dniUsuarioBuscado.nombre} ${dniUsuarioBuscado.apellido} y oficialmente es un cliente comprando su primer producto; un ${productoAComprar} :) Bienvenido`);
    
            productoAComprarEncontrado.stockTotal -= 1; 
    
            usuariosClientes.push(new Cliente(dniUsuarioBuscado));
            console.log(usuariosClientes);
    }
}
    
verStock = () => {
    alert(concatenados);
}

saludarAlDueño = () => {
    alert("Le enviaremos tus saludos a Thaiel :)")
}

filtrado = (menor) => {
        let filtrado = stock.filter(item => item.precioProducto >= menor);
        filtrado.forEach((item) => {
            let mensaje = `
        Nombre: ${item.nombreProducto}
        Precio: ${item.precioProducto}
        `
        alert(mensaje);
        })
}


    
    /*              INICIO PROGRAMA                 */
    
    const concatenados = nombresStock.join(" / ");
    
    
    
     let identificador = prompt("Quien eres? Cliente o Administrador?");
    
    if(identificador.toLowerCase() === "administrador"){

        let operacion = prompt("Que operacion va a realizar?: 1. VERIFICAR O AGREGAR PRODUCTO - 2. AUMENTAR STOCK");
        switch (operacion.toLowerCase()){
            case "1":
                verificarOAgregarProducto();
                break;
            case "2":
                aumentarStock();
                break;
            default:
            alert("Operacion cancelada")
            break;
        }
    } else if(identificador.toLowerCase() === "cliente"){
        let nombre = prompt("Ingresa tu nombre");
        let apellido = prompt("Ingresa tu apellido");
        let edad = prompt("Ingresa tu edad")
        let tel = prompt("Ingresa tu numero de telefono"); 
        let dni = prompt("Ingrese su DNI para reconocerlo automaticamente");
        
        usuarios.push(new UsuarioConstructor(nombre, apellido, edad, tel, dni)); 
                
        let operacion = prompt("Que operacion va a realizar?: 1. COMPRAR - 2. VER STOCK - 3. SALUDAR AL DUEÑO - 4. BUSCAR PRODUCTOS MEDIANTE PRECIO");
        switch(operacion.toLowerCase()){
            case "1":
                comprar();
                break;
            case "2":
                verStock();
                break;
            case "3":
                saludarAlDueño();
                break;
            case "4": 
                let menor = prompt("Ingrese el monto minimo para hacer el filtrado");
                filtrado(menor);
            break;
            default: 
                alert("Operacion cancelada");
                break;
        }
    }
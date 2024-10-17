// tipos avanzados(tipos de unio,)
 
 interface microtareas{
    id: number;
    nombre: string;
    tiempo:number;
    status: 'pendiente'|'en progreso'|'completado';
    permisos: string[];
 }
 interface macrotareas {

    id: number;
    nombre: string;
    status: 'pendiente'| 'en_progreso'| 'completado';

 }
// union de tipos  
type  tarea = microtareas|macrotareas;

// tipos genericos para la creacion de clases y funciones
type faces1<T>={
}
//function PriorizacionTareas<T>(Priorizar:microtareas<T>){
//}
// funcion sobre la priorizacion de tareas de micro y macro
function priorizarTareas(Tarea:tarea): void {
    console.log('gestionTarea: ${Tarea.tarea.nombre}');
    if (Tarea.status==='completado')
        console.log('priorizar: microtarea');
        console.log(' Permisos: ${Tarea.permisos.join(', ')}');
} else if (Tarea.status==='en_progreso'){
    //console.log(`Rol: Usuario regular`);
    //console.log(`Correo: ${user.email}`);
}

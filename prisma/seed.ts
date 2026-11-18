import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    // =====================================
    // SEED: PROYECTOS
    // =====================================

    await prisma.proyecto.createMany({
        data: [
            {
                titulo: 'Sistema de Gestión Académica',
                descripcion: 'Aplicación web para administrar estudiantes, asignaturas y calificaciones.',
                asignatura: 'Arquitectura de Software',
                url: 'https://github.com/demo/gestion-academica',
                publicado: true
            },
            {
                titulo: 'Plataforma de Cursos Online',
                descripcion: 'Plataforma para publicar cursos y gestionar contenidos.',
                asignatura: 'Programación Web',
                url: 'https://github.com/demo/cursos-online',
                publicado: true
            },
            {
                titulo: 'Aplicación de Control de Inventario',
                descripcion: 'Sistema para registrar productos y controlar existencias.',
                asignatura: 'Bases de Datos',
                url: 'https://github.com/demo/inventario',
                publicado: true
            },
            {
                titulo: 'Red Social Universitaria',
                descripcion: 'Aplicación para compartir publicaciones entre estudiantes.',
                asignatura: 'Programación Web',
                url: 'https://github.com/demo/red-universitaria',
                publicado: false
            },
            {
                titulo: 'Sistema de Reservas',
                descripcion: 'Aplicación para gestionar reservas de espacios universitarios.',
                asignatura: 'Arquitectura de Software',
                url: 'https://github.com/demo/reservas',
                publicado: false
            }
        ]
    });

    // =====================================
    // SEED: TAREAS
    // =====================================

    await prisma.tarea.createMany({
        data: [
            {
                titulo: 'Diseñar el modelo de datos',
                descripcion: 'Construir el modelo entidad relación.',
                prioridad: 'ALTA',
                estado: 'COMPLETADA'
            },
            {
                titulo: 'Implementar autenticación',
                descripcion: 'Desarrollar el inicio de sesión y validación de credenciales.',
                prioridad: 'ALTA',
                estado: 'PROCESO'
            },
            {
                titulo: 'Diseñar interfaz del dashboard',
                descripcion: 'Construir la interfaz principal con indicadores y estadísticas.',
                prioridad: 'MEDIA',
                estado: 'PROCESO'
            },
            {
                titulo: 'Documentar endpoints',
                descripcion: 'Documentar los servicios REST utilizando Swagger.',
                prioridad: 'MEDIA',
                estado: 'PENDIENTE'
            },
            {
                titulo: 'Implementar CRUD de productos',
                descripcion: 'Desarrollar las operaciones CRUD de productos.',
                prioridad: 'ALTA',
                estado: 'PENDIENTE'
            },
            {
                titulo: 'Realizar pruebas unitarias',
                descripcion: 'Implementar pruebas unitarias para validar los servicios.',
                prioridad: 'BAJA',
                estado: 'PENDIENTE'
            },
            {
                titulo: 'Configurar despliegue',
                descripcion: 'Preparar el entorno de producción.',
                prioridad: 'MEDIA',
                estado: 'COMPLETADA'
            },
            {
                titulo: 'Optimizar consultas SQL',
                descripcion: 'Revisar y optimizar las consultas para mejorar el rendimiento.',
                prioridad: 'BAJA',
                estado: 'PROCESO'
            }
        ]
    });

    console.log('Seed ejecutado correctamente.');
}

main()
    .catch((error) => {
        console.error('Error ejecutando el seed:', error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
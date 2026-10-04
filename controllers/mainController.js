const projects = [
    {
        title: 'Netchb',
        category: 'Facturación ISP',
        description: 'Aplicación para el manejo de facturación de proveedores de servicios de internet (ISP).',
        focus: 'Gestión de facturación'
    },
    {
        title: 'GestionAppChb',
        category: 'Gestión de accesos',
        description: 'Software para gestionar aplicaciones, usuarios y permisos desde un mismo lugar.',
        focus: 'Aplicaciones · usuarios · permisos'
    }
]; // Mediante este array simulamos los datos que podriamos obtener de una base de datos.

const home = (req, res) => res.render('index');

const getProjects = (req, res) => res.render('projects', { projects });

export default { home, getProjects };


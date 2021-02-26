export default [
	{
        name: 'Dashboard',
        icon: 'fa fa-tachometer-alt',
        path: '/user/dashboard'
    },
	{
        name: 'PESSOAS',
        icon: 'fa fa-user',
        children: [

            {
                name: 'Pesquisar pessoas',
                path: '/admin/pessoal/pesquisar',
            },
            {
                name: 'Cadastrar pessoas',
                path: '/admin/pessoal/registrar'
            },

        ]
    },
	{
        name: 'FUNCIONAIS',
        icon: 'fa fa-envelope',
        path: '/admin/funcional/registrar'
    },
]

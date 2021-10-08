/* eslint-disable consistent-return */
import {
    createServer,
    Model,
    hasMany,
    belongsTo,
    RestSerializer,
} from 'miragejs';

createServer({
    models: {
        user: Model.extend({
            pokemonsUsers: hasMany(),
        }),

        pokemonsUser: Model.extend({
            user: belongsTo(),
        }),
    },

    serializers: {
        pokemonsUser: RestSerializer.extend({
            include: ['user'],
            embed: true,
        }),
    },

    seeds(server) {
        const Jonh = server.create('user', {
            id: '1',
            name: 'Jonh Doe',
            email: 'test@email.com',
            password: '123456',
        });
        const Maria = server.create('user', {
            id: '2',
            name: 'Maria',
            email: 'marian@email.com',
            password: '123456',
        });
        server.create('pokemonsUser', {
            id: '1',
            user: Jonh,
            pokemonId: '56',
        });
        server.create('pokemonsUser', {
            id: '2',
            user: Maria,
            pokemonId: '80',
        });
        server.create('pokemonsUser', {
            id: '3',
            user: Maria,
            pokemonId: '85',
        });
    },

    routes() {
        this.passthrough('https://pokeapi.co/api/v2/**');
        this.namespace = 'api';

        this.get('/user', () => {
            return this.schema.all('user');
        });

        this.get('/pokemonsUser/:id', (schema, request) => {
            const data = this.schema.all('pokemonsUser');
            const arr: any = [];

            // eslint-disable-next-line array-callback-return
            Object.values(data.models).map((obj) => {
                if (obj.attrs.userId === request.params.id) {
                    arr.push(obj);
                }
            });

            return arr;
        });

        this.post('/auth', async (schema, request) => {
            const dataInput = JSON.parse(request.requestBody);

            const dataUsers: any = await this.schema.all('user');
            let user: any = [];

            // eslint-disable-next-line array-callback-return
            await dataUsers.models.map((obj: any): string | any => {
                if (obj.attrs.email === dataInput.email) {
                    if (obj.attrs.password === dataInput.password) {
                        user = obj.attrs;
                    }
                }
            });
            return user;
        });

        this.post('/user', (schema, request) => {
            const data = JSON.parse(request.requestBody);
            return schema.create('users', data);
        });

        this.post('/pokemonsUser', (schema, request) => {
            const data = JSON.parse(request.requestBody);
            return schema.create('pokemonsUsers', data);
        });
    },
});

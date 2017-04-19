exports.seed = function(knex, Promise) {
    return knex('songs').del()
    .then(function () {
        return Promise.all([
            knex('songs').insert({
                title: 'DUCKWORTH',
                album: 'DAMN.',
                artist: 'Kendrick Lamar',
                genre: 'Hip/Hop Rap'
            }),
            knex('songs').insert({
                title: 'Illusionist',
                album: 'Tomorrow We Die Alive',
                artist: 'Born of Osiris',
                genre: 'Heavy Metal'
            }),
            knex('songs').insert({
                title: 'Glitter Bomb',
                album: '8',
                artist: 'Incubus',
                genre: 'Alternative'
            }),
            knex('songs').insert({
                title: 'Rolling',
                album: 'Hits: Deluxe Version',
                artist: 'Seal',
                genre: 'Pop'
            }),
            knex('songs').insert({
                title: 'Deadbolt',
                album: 'Manhattan',
                artist: 'SKATERS',
                genre: 'Alternative'
            })
        ])
    })
}
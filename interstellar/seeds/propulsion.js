
exports.seed = function(knex, Promise) {
    return knex('propulsion').del()
    .then(function(){
      return Promise.all([
        //knex('propulsion').insert({title:'', description:'', image:''}),
        knex('propulsion').insert({title:'alcubierre drive', description:'based on a solution of Einsteins field equations in general relativity, by which a spacecraft could achieve apparent faster-than-light travel if a configurable energy-density field lower than that of vacuum (that is, negative mass) could be created.', image:'https://i.kinja-img.com/gawker-media/image/upload/s--VnIlJN8N--/c_fit,fl_progressive,q_80,w_636/186icholf7galjpg.jpg'}),
        knex('propulsion').insert({title:'Solar Sail', description:'uses solar waves to push the craft like a solar wind', image:'https://cdn1.vox-cdn.com/thumbor/iHT_e1ajDkfTET08-Eq-wC7lBoc=/cdn0.vox-cdn.com/uploads/chorus_asset/file/3709290/solar_sail.0.gif'}),
        knex('propulsion').insert({title:'Nucear propulsion', description:'Uses controlled explosion to thrust', image:'https://ryan59479.files.wordpress.com/2014/04/orion1_48.jpg'}),
        knex('propulsion').insert({title:'Ion Drive', description:'Emits Ions to slowly build speed', image:'http://astronomy.nmsu.edu/tharriso/ast110/1322_s505_p.jpg'})
      ])
    });
};

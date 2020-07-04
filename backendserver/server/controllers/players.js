var Players = module.exports
const axios = require('axios')

function normalize(response) {
    return response.results.bindings.map(obj =>
        Object.entries(obj)
            .reduce((new_obj, [k,v]) => (new_obj[k] = v.value, new_obj),
                    new Object()));
}

function myNormalize(r){
    return r.results.bindings.map(o => {
        var novo = {}
        for (let [k, v] of Object.entries(o)) {
            novo[k] = v.value
          }
        return novo  
    })
}

var prefixes = `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX noInferences: <http://www.ontotext.com/explicit>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX : <http://www.di.uminho.pt/prc2020/2020/1/fut#>
`

var getLink = "http://45.76.32.59:7200/repositories/repo-test-1" + "?query=" 


Players.getLista = async function(){
    var query = `select ?club where {
        :Ronaldo-IconBase :hasClub  ?club.
    } limit 100  `
    var encoded = encodeURIComponent(prefixes + query)
    console.log("here")
    try{
	console.log(getLink+encoded)
        var response = await axios.get(getLink + encoded)
        console.log(response.data)
        return normalize(response.data)
    }
    catch(e){
        throw(e)
    }
}

Players.getSimple = async function(){
    var query = `select ?player ?name ?age ?birth ?club ?position ?foot ?nationality ?quality ?overall where { 
        ?player a :Player.
        OPTIONAL {?player  :age ?age}.
        OPTIONAL {?player  :birth_date ?birth}.
        OPTIONAL {?player  :hasClub ?club}.
        OPTIONAL {?player  :hasPosition ?position}.
        OPTIONAL {?player  :hasFoot ?foot}.
        OPTIONAL {?player  :hasNationality ?nationality}.
        OPTIONAL {?player  :hasQuality ?quality}.
        ?player  :name ?name.
        OPTIONAL { ?player  :overall ?overall}.
    } LIMIT 10000`
    var encoded = encodeURIComponent(prefixes + query)
    console.log("here")
    try{
	console.log(getLink+encoded)
        var response = await axios.get(getLink + encoded)
        console.log(JSON.stringify(normalize(response.data)))
        //for (let index = 0; index < JSON.stringify(normalize(response.data)).length; index++) {
            //console.log("dentro")
            //console.log(JSON.stringify(normalize(response.data))[index].position)
            //JSON.stringify(normalize(response.data))[index].position.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
        //}
        let r=normalize(response.data)
        r.map(jogador=> {
            jogador.player      = jogador.player.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.club        = jogador.club.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.position    = jogador.position.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.nationality = jogador.nationality.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.quality     = jogador.quality.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.foot        = jogador.foot.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
        }
        )
        const uniqueag = r.reduce((acc, current) => {
            const x = acc.find(item => item.player === current.player);
            if (!x) {
              return acc.concat([current]);
            } else {
              return acc;
            }
          }, []);
          console.log(uniqueag)
        return uniqueag
    }
    catch(e){
        throw(e)
    }
}

Players.getSimpleName = async function(name){
    var query = `select ?player ?name ?age ?birth ?club ?position ?foot ?nationality ?quality ?overall where { 
        ?player a :Player.
        FILTER (?player = :`+name+`).
        ?player  :age ?age.
        ?player  :birth_date ?birth.
        ?player  :hasClub ?club.
        ?player  :hasPosition ?position.
        ?player  :hasFoot ?foot.
        ?player  :hasNationality ?nationality.
        ?player  :hasQuality ?quality.
        ?player  :name ?name.
        ?player  :overall ?overall.
    } limit 1000`
    var encoded = encodeURIComponent(prefixes + query)
    console.log("here")
    try{
	console.log(getLink+encoded)
        var response = await axios.get(getLink + encoded)
        console.log(JSON.stringify(normalize(response.data)))
        //for (let index = 0; index < JSON.stringify(normalize(response.data)).length; index++) {
            //console.log("dentro")
            //console.log(JSON.stringify(normalize(response.data))[index].position)
            //JSON.stringify(normalize(response.data))[index].position.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
        //}
        let r=normalize(response.data)
        r.map(jogador=> {
            jogador.player      = jogador.player.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.club        = jogador.club.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.position    = jogador.position.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.nationality = jogador.nationality.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.quality     = jogador.quality.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.foot        = jogador.foot.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
        }
        )
        const uniqueag = r.reduce((acc, current) => {
            const x = acc.find(item => item.player === current.player);
            if (!x) {
              return acc.concat([current]);
            } else {
              return acc;
            }
          }, []);
          console.log(uniqueag)
        return uniqueag
    }
    catch(e){
        throw(e)
    }
}

Players.getCardInfo = async function(name){
    console.log(name)
    var query = `select ?player ?features ?name ?age ?birth ?club ?position ?foot ?nationality ?quality ?overall ?pac ?shot ?pass ?drib ?def ?phys
	where { 
        ?player a :Player.
        FILTER (?player = :`+name+`).
        ?player   :features ?features.
        ?player   :age ?age.
        ?player   :birth_date ?birth.
        ?player   :hasClub ?club.
        ?player   :hasPosition ?position.
        ?player   :hasFoot ?foot.
        ?player   :hasNationality ?nationality.
        ?player   :hasQuality ?quality.
        ?player   :name ?name.
        ?player   :overall ?overall.
        ?player   :hasPace ?pac_aux.
        ?pac_aux  :overall ?pac.
        ?player   :hasShooting ?shot_aux.
        ?shot_aux :overall ?shot.
        ?player	  :hasPassing ?pass_aux.
        ?pass_aux :overall ?pass.
        ?player   :hasDribbling ?drib_aux.
        ?drib_aux :overall ?drib.
        ?player   :hasDefending ?def_aux.
        ?def_aux  :overall ?def.
        ?player   :hasPhysical ?phys_aux.
        ?phys_aux :overall ?phys.
	}
LIMIT 1`
    var encoded = encodeURIComponent(prefixes + query)
    try{
	console.log(getLink+encoded)
        var response = await axios.get(getLink + encoded)
        console.log("cards")
        let r=normalize(response.data)
        r.map(jogador=> {
            jogador.player      = jogador.player.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.club        = jogador.club.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.position    = jogador.position.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.nationality = jogador.nationality.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.quality     = jogador.quality.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.foot        = jogador.foot.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
        }
        )
        const uniqueag = r.reduce((acc, current) => {
            const x = acc.find(item => item.player === current.player);
            if (!x) {
              return acc.concat([current]);
            } else {
              return acc;
            }
          }, []);
          console.log(uniqueag)
        return uniqueag
    }
    catch(e){
        throw(e)
    }
}

Players.getCompleteInfo = async function(name){
    console.log(name)
    var query = `select ?player ?name ?age ?birth ?club ?position ?foot ?nationality ?quality ?overall ?pac ?shot ?pass ?drib ?def ?phys ?features ?cb ?lwb ?lm ?lf ?cdm ?rwb ?cam ?lw ?lb ?cm ?cf ?rw ?rb ?rm ?rf ?st ?acce ?sprint ?finish ?penalties ?pos_shoot ?power_shoot ?volleys_shoot ?crossing_pass ?free_pass ?curve_pass ?long_pass ?short_pass ?vision_pass ?agility_drib ?balance_drib ?control_drib ?composure_drib ?drib_drib ?reactions_drib ?heading_def ?intercept_def ?marking_def ?slid_def ?std_def ?agres_phys ?jumping_phys ?stamina_phys ?strength_phys ?skill  ?pc_last ?pc_max ?pc_min ?ps_last ?ps_max ?ps_min ?xbox_last ?xbox_max ?xbox_min ?height ?weight ?long_shot
	where { 
        ?player a :Player.
        FILTER (?player = :`+name+`).
        ?player   :age ?age.
        ?player   :height ?height.
        ?player   :weight ?weight.
    	?player	  :features ?features.
        ?player   :birth_date ?birth.
        ?player   :hasClub ?club.
        ?player   :hasPosition ?position.
        ?player   :hasFoot ?foot.
        ?player   :hasNationality ?nationality.
        ?player   :hasQuality ?quality.
        ?player   :name ?name.
        ?player   :overall ?overall.
    
        ?player   :hasPace ?pac_aux.
        ?pac_aux  :overall ?pac.
        ?pac_aux  :pace_acceleration ?acce.
    	?pac_aux  :pace_sprint_speed ?sprint.
    
        ?player   :hasShooting ?shot_aux.
        ?shot_aux :overall ?shot.
		?shot_aux :shoot_finishing ?finish.
    	?shot_aux :shoot_long_shots ?long_shot.
    	?shot_aux :shoot_penalties ?penalties.
    	?shot_aux :shoot_positioning ?pos_shoot.
    	?shot_aux :shoot_shot_power ?power_shoot.
	    ?shot_aux :shoot_volleys ?volleys_shoot.
    
        ?player	  :hasPassing ?pass_aux.
        ?pass_aux :overall ?pass.
    	?pass_aux :pass_crossing ?crossing_pass.
    	?pass_aux :pass_curve ?curve_pass.
    	?pass_aux :pass_free_kick ?free_pass.
    	?pass_aux :pass_long ?long_pass.
    	?pass_aux :pass_short ?short_pass.
    	?pass_aux :pass_vision ?vision_pass.
    	
        ?player   :hasDribbling ?drib_aux.
        ?drib_aux :overall ?drib.
    	?drib_aux :drib_agility ?agility_drib.
    	?drib_aux :drib_balance ?balance_drib.
    	?drib_aux :drib_ball_control ?control_drib.
	    ?drib_aux :drib_composure ?composure_drib.
    	?drib_aux :drib_dribbling ?drib_drib.
    	?drib_aux :drib_reactions ?reactions_drib.
    
        ?player   :hasDefending ?def_aux.
        ?def_aux  :overall ?def.
    	?player   :def_heading ?heading_def.
    	?player   :def_interceptions ?intercept_def.
    	?player   :def_marking ?marking_def.
    	?player   :def_slid_tackle ?slid_def.
    	?player   :def_stand_tackle ?std_def.
    
        ?player   :hasPhysical ?phys_aux.
        ?phys_aux :overall ?phys.
    	?phys_aux :phys_aggression ?agres_phys.
    	?phys_aux :phys_jumping ?jumping_phys.
	    ?phys_aux :phys_stamina ?stamina_phys.
    	?phys_aux :phys_strength ?strength_phys.
    	
    	?player :hasSkillMove ?skill_aux.
    	?skill_aux :value ?skill.
    
    	?player :hasPrice ?price_aux.
    	?price_aux :pc_price_last ?pc_last.
        ?price_aux :pc_price_max ?pc_max.
        ?price_aux :pc_price_min ?pc_min.
    	?price_aux :ps_price_last ?ps_last.
        ?price_aux :ps_price_max ?ps_max.
        ?price_aux :ps_price_min ?ps_min.
    	?price_aux :xbox_price_last ?xbox_last.
        ?price_aux :xbox_price_max ?xbox_max.
        ?price_aux :xbox_price_min ?xbox_min.
    
    	OPTIONAL {?player	  :cb	   ?cb}.
    	OPTIONAL {?player	  :lwb	   ?lwb}.
    	OPTIONAL {?player	  :lm	   ?lm}.
	    OPTIONAL {?player	  :lf	   ?lf}.
    	OPTIONAL {?player	  :cdm	   ?cdm}.
    	OPTIONAL {?player	  :rwb	   ?rwb}.
    	OPTIONAL {?player	  :cam	   ?cam}.
	    OPTIONAL {?player	  :lw	   ?lw}.
	    OPTIONAL {?player	  :lb	   ?lb}.
	    OPTIONAL {?player	  :cm	   ?cm}.
    	OPTIONAL {?player	  :cf	   ?cf}.
	    OPTIONAL {?player	  :rw	   ?rw}.
	    OPTIONAL {?player	  :rb	   ?rb}.
	    OPTIONAL {?player	  :rm	   ?rm}.
	    OPTIONAL {?player	  :rf	   ?rf}.
    	OPTIONAL {?player	  :st	   ?st}.
	}
LIMIT 1`
    var encoded = encodeURIComponent(prefixes + query)
    try{
	console.log(getLink+encoded)
        var response = await axios.get(getLink + encoded)
        console.log("cards")
        let r=normalize(response.data)
        r.map(jogador=> {
            jogador.player      = jogador.player.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.club        = jogador.club.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.position    = jogador.position.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.nationality = jogador.nationality.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.quality     = jogador.quality.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
            jogador.foot        = jogador.foot.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
        }
        )
        const uniqueag = r.reduce((acc, current) => {
            const x = acc.find(item => item.player === current.player);
            if (!x) {
              return acc.concat([current]);
            } else {
              return acc;
            }
          }, []);
          console.log(uniqueag)
        return uniqueag
    }
    catch(e){
        throw(e)
    }
}

Players.Searchxbox = async function(name){
    var query = `select ?player ?price ?drib ?def ?shot ?pass ?pac ?phys
	where { 
        ?player a :Player.
        ?player   :name ?name.
        ?player	:hasPrice ?ps.
        ?ps	:xbox_price_last ?price.
        ?player   :hasDribbling ?drib_aux.
        ?drib_aux :overall ?drib.
        
    
    	?player   :hasDefending ?def_aux.
        ?def_aux  :overall ?def.
    	
    	?player   :hasPhysical ?phys_aux.
        ?phys_aux :overall ?phys.
    	
    	?player	  :hasPassing ?pass_aux.
        ?pass_aux :overall ?pass.
    	
    	?player   :hasShooting ?shot_aux.
        ?shot_aux :overall ?shot.
    	
    	?player   :hasPace ?pac_aux.
        ?pac_aux  :overall ?pac.
    	FILTER regex (str(?name), "`+name+`","i"). 
	} `
    var encoded = encodeURIComponent(prefixes + query)
    console.log("here")
    try{
	console.log(getLink+encoded)
        var response = await axios.get(getLink + encoded)
        console.log(response.data)
        let r = normalize(response.data)
        r.map(jogador=> {
            jogador.player      = jogador.player.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
        }
        )
        return r
    }
    catch(e){
        throw(e)
    }
}

Players.Searchpc = async function(name){
    var query = `select ?player ?price ?drib ?def ?shot ?pass ?pac ?phys
	where { 
        ?player a :Player.
        ?player   :name ?name.
        ?player	:hasPrice ?ps.
        ?ps	:pc_price_last ?price.
        ?player   :hasDribbling ?drib_aux.
        ?drib_aux :overall ?drib.
        
    
    	?player   :hasDefending ?def_aux.
        ?def_aux  :overall ?def.
    	
    	?player   :hasPhysical ?phys_aux.
        ?phys_aux :overall ?phys.
    	
    	?player	  :hasPassing ?pass_aux.
        ?pass_aux :overall ?pass.
    	
    	?player   :hasShooting ?shot_aux.
        ?shot_aux :overall ?shot.
    	
    	?player   :hasPace ?pac_aux.
        ?pac_aux  :overall ?pac.
    	FILTER regex (str(?name), "`+name+`","i"). 
	} `
    var encoded = encodeURIComponent(prefixes + query)
    console.log("here")
    try{
	console.log(getLink+encoded)
        var response = await axios.get(getLink + encoded)
        console.log(response.data)
        let r = normalize(response.data)
        r.map(jogador=> {
            jogador.player      = jogador.player.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
        }
        )
        return r
    }
    catch(e){
        throw(e)
    }
}

Players.Searchps = async function(name){
    var query = `select ?player ?price ?drib ?def ?shot ?pass ?pac ?phys
	where { 
        ?player a :Player.
        ?player   :name ?name.
        ?player	:hasPrice ?ps.
        ?ps	:ps_price_last ?price.
        ?player   :hasDribbling ?drib_aux.
        ?drib_aux :overall ?drib.
        
    
    	?player   :hasDefending ?def_aux.
        ?def_aux  :overall ?def.
    	
    	?player   :hasPhysical ?phys_aux.
        ?phys_aux :overall ?phys.
    	
    	?player	  :hasPassing ?pass_aux.
        ?pass_aux :overall ?pass.
    	
    	?player   :hasShooting ?shot_aux.
        ?shot_aux :overall ?shot.
    	
    	?player   :hasPace ?pac_aux.
        ?pac_aux  :overall ?pac.
    	FILTER regex (str(?name), "`+name+`","i"). 
	} `
    var encoded = encodeURIComponent(prefixes + query)
    console.log("here")
    try{
	console.log(getLink+encoded)
        var response = await axios.get(getLink + encoded)
        console.log(response.data)
        let r = normalize(response.data)
        r.map(jogador=> {
            jogador.player      = jogador.player.replace("http://www.di.uminho.pt/prc2020/2020/1/fut#","")
        }
        )
        return r
    }
    catch(e){
        throw(e)
    }
}






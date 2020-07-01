<template>
    <v-container>
        <v-row>
            <v-col>
                <div 
                    :id = "id"
                    class = "board"
                    @dragover.prevent
                    @drop.prevent="drop"
                >
                <img v-bind:src="'https://upload.wikimedia.org/wikipedia/commons/8/82/Soccer_Field_Transparant.svg'" /> 
                </div>
            </v-col>
            <v-col>
                <ul>
                    <li><Chip id="card-1" draggable="true"/>
                    </li><li><Chip id="card-2" draggable="true"/>
                    </li><li><Chip id="card-3" draggable="true"/>
                    </li><li><Chip id="card-4" draggable="true"/>
                    </li>
                </ul>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    methods: {
        drop: e => {
            const card_id = e.dadtaTransfer.getData('card_id')

            const card = document.getElementById(card_id);
            card.style.display="block"
            e.target.appendChild(card);
        }
    }
}
</script>

<style scoped>
.flexbox {
    display: flex;
    justify-content: space-between;
    width:100%;
    overflow: hidden;
    
}

.flexbox {
    display: flex;
    justify-content: space-between;
    width:100%;
    
    
}

.flexbox .board{
    display: flex;
    justify-content: space-between;
    width:100%;
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/8/82/Soccer_Field_Transparant.svg");
    height: 100vh;
}
</style>
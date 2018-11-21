<template>
    <div class="columns">
        <div v-for="lane in board.lanes" :key="lane.id">
            <draggable v-model="lane.cards" :options="{group: 'cards'}">
                <transition-group type="transition" class="groupRoot">
                    <li class="draggable" v-for="card in lane.cards" :key="card.id">
                        {{card.name}}
                    </li>
                </transition-group>
            </draggable>
        </div>
    </div>
</template>

<script>
    import draggable from "vuedraggable"
    import BoardFetcher from "../services/BoardFetcher"
    export default {
        name: "Swimlanes",
        components: {
            draggable,
        },
        mounted: () => {
            BoardFetcher
                .fetchBoards()
                .then(boards => {
                    this.board = boards[0];
                })
        },
        data: () => {
            return {
                board: {
                    lanes: []
                }
            }
        }
    };
</script>

<style scoped>
    .draggable {
        display: block;
        width: 100px;
        height: 70px;
        background: red;
        color: white;
        margin: 1em auto;
    }

    .groupRoot {
        min-height: 10em;
        min-width: 10em;
        display: block;
    }

    .columns {
        display: grid;
        grid-auto-flow: column;
    }
</style>
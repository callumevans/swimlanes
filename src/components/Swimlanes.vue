<template>
    <div>
        <div v-for="lane in lanes">
            <draggable v-model="cards[lane.id]" :options="{group: 'cards'}" :key="lane.id">
                <transition-group>
                    <div class="draggable" v-for="element in cards" :key="element.id">
                        {{element.name}}
                    </div>
                </transition-group>
            </draggable>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    export default {
        name: "Swimlanes",
        data: () => {
            return {
                lanes: [
                    {
                        id: 1,
                        name: "Lane One"
                    },
                    {
                        id: 2,
                        name: "Lane Two"
                    }
                ],
                cards: [
                    {
                        id: 1,
                        name: "test card"
                    }
                ]
            }
        },
        components: {
            draggable
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
</style>
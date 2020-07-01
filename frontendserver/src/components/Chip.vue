<template>
    <div
        :id="id"
        class = "card"
        :draggable="draggable"
        @dragstart="dragStart"
        @dragover.stop
        >
        100
        <slot/>
    </div>
</template>

<script>
export default {
    props:['id','draggable'],
    methods: {
        dragStart: e => {
            const target = e.target;
            e.dataTransfer.setData('card_id',target.id)
            setTimeout(() => {
                target.style.display="non"
            },0)
        }
    }
}
</script>
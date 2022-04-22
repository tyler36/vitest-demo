<template>
    <div>
        Count: <span v-text="count"></span>
        <div>
            <button @click="decrement" id="decrement">- Decrement</button>
            <button @click="increment" id="increment">+ Increment</button>
        </div>
        <div>
            <span :text="count"></span>
        </div>
    </div>
</template>


<script setup>
    import { onMounted, ref } from 'vue';

    const count = ref(0);

    function decrement(){
        count.value--
    }
    function increment(){
        count.value++
    }
</script>


<script setup>
    defineProps({
        product: {
            type: Object
        }
    })
</script>

<template>
    <div
        class="rounded bg-white shadow relative"
    >
        <img 
            :src="product.image"  
        />
    </div>
</template>
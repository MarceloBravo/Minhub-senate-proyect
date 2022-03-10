<template>
    <div class="spinner-background"></div>

    <div class="spinner-content">
        <div class="spinner-border" role="status"></div>
        <div>
            <span class="sr-only">Cargando...</span>
        </div>
    </div>
</template>

<style>
    @import './style.css';
</style>

<script>

    export default({
        name: 'SpinnerComponent',
    })
</script>



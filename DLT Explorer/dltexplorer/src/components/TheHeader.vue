<template>
    <header>
        <h1>DLT Explorer</h1>
        <p>by Quanterall</p>
        </header>
</template>

<script>
export default {
    name: 'TheHeader',
    props: {
        title: {
            type: String,
            default: 'Hello',
        }
    }
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: black 2px solid;
        background-color: #f5f5f5;
        padding: 0.5rem 20rem;
    }
</style>
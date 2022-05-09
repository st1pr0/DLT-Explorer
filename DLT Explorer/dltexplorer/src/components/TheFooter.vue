<template>
    <footer>
        <p>Copyright by Quanterall. All Rights recieved</p>
        <p>Year {{year}}</p>
    </footer>
</template>

<script>
export default {
    name: 'TheFooter',
    props: {
        year: {
            type: String,
            default: '1970',
        }
    }
}
</script>

<style scoped>
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: black 2px solid;
        background-color: #f5f5f5;
        padding: 0.5rem 30rem;
    }
</style>
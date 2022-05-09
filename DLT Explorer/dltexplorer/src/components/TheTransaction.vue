<template>
    <div class="container">
        <h2>Status: <span class="status">{{status}}</span></h2>
        <h2>Block number: <a href="#">{{blockNumber}}</a></h2>
        <h2>From: <a href="#">{{from}}</a></h2>
        <h2>To: <a href="#">{{to}}</a></h2>
        <h2>Value: {{value}}</h2>
    </div>
</template>

<script>
export default {
    name: 'TheTransaction',
    props: {
        status: {
            type: String,
            default: '404',
        },
        blockNumber: {
            type: String,
            default: '404',
        },
        from: {
            type: String,
            default: '404',
        },
        to: {
            type: String,
            default: '404',
        },
        value: {
            type: String,
            default: '404',
        }
    }
}
</script>

<style scoped>
    .container {
        align-items: center;
        background-color: #f5f5f5;
        margin: 14rem 20rem;
        border: 2px black solid;
    }

    h2 {
        padding: 20px 1rem;
    }

    .status{
        color: green;
    }
</style>
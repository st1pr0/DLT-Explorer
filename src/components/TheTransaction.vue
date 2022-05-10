
<script>
import axios from "axios";


export default {
    name: 'TheTransaction',
    // props: {
    //     transactionHash: {
    //         type: String,
    //         default: '404',
    //     },
    //     status: {
    //         type: String,
    //         default: '404',
    //     },
    //     blockNumber: {
    //         type: String,
    //         default: '404',
    //     },
    //     from: {
    //         type: String,
    //         default: '404',
    //     },
    //     to: {
    //         type: String,
    //         default: '404',
    //     },
    //     value: {
    //         type: String,
    //         default: '404',
    //     }
    // },
     data() {
    return {
        transactionHash: "",
        status: "",
        blockNumber: "",
        from: "",
        to: "",
        value: "",
    };
  }, 
    methods: {
        async getTransactionInfo(event) {
            this.transactionHash = event.target.transactionHash.value;
            const conversionURL = `https://api.snowtrace.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${this.transactionHash}&apikey=9MJFGVBYYTCB5JF4UZY7HF1XB9BEZYFYSX`;

          await axios
            .post(conversionURL)
            .then((response) => {
                this.status = "OK",
            this.blockNumber = response.data.result.blockNumber,
            this.from = response.data.result.from,
            this.to = response.data.result.to,
            this.value = response.data.result.value
        })
            // .then(this.blockNumber = response.data.result.blockNumber)
            // .then(console.log(response.data.result.blockNumber))
            .catch((error) => console.log(error));
            // console.log(this.status);
      //  console.log(event.target.cardNumber.value);
        }
    }
}
</script>


<template>
<form @submit.prevent="getTransactionInfo($event)">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="transactionHash" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by transaction hash" required>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
            </button>
    </div>
</form>
<form  @submit.prevent="getTransactionInfo($event)">
    <div class="mb-6">
        <h2>Status: <span class="status">{{status}}</span></h2>
        <h2>Block number: <a href="#">{{blockNumber}}</a></h2>
        <h2>From: <a href="#">{{from}}</a></h2>
        <h2>To: <a href="#">{{to}}</a></h2>
        <h2>Value: {{value}}</h2>
    </div>
   </form>
</template>



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

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
        searchingVariable: "",
        keys: "",
        values: "",
    };
  }, 
    methods: {
      
        async getTransactionInfo(event) {

            const apiKey = `9MJFGVBYYTCB5JF4UZY7HF1XB9BEZYFYSX`;
            const transactionDataURL = `https://api.snowtrace.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${this.searchingVariable}&apikey=${apiKey}`;
            const blockRewardDataURL = `https://api.snowtrace.io/api?module=block&action=getblockreward&blockno=${this.searchingVariable}&apikey=${apiKey}`;
            const accountBalanceData = `https://api.snowtrace.io/api?module=account&action=balance&address=${this.searchingVariable}&tag=latest&apikey=${apiKey}`;
            
            this.searchingVariable = event.target.searchingVariable.value;
            let trueURL = "";
            if(this.searchingVariable.length == 66) {
              trueURL = transactionDataURL;
            }
            if(this.searchingVariable.length == 42){
              trueURL = accountBalanceData;
            }
            if(this.searchingVariable.length == 8){
              trueURL = blockRewardDataURL;
            }
            console.log(trueURL);
          await axios
            .get(trueURL)
            .then((response) => {
            this.keys = Object.keys(response.data.result),
            this.values = Object.values(response.data.result)
        })

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
        <input type="search" id="searchingVariable" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by transaction hash" required>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
            </button>
    </div>
</form>
 <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="(key, i) in keys" :key="i" :value="key" class="divide-x divide-gray-200">
                  <td  class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">{{ key }}</td>
                  <td  class="whitespace-nowrap p-4 text-sm text-gray-500">{{ values[i] }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
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
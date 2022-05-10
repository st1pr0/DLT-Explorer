
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
<form  @submit.prevent="getTransactionInfo($event)">
      <div>
          <input  type="text" id="transactionHash" v-model= "transactionHash" >
        </div>
    <div class="container">
        <h2>Status: <span class="status">{{status}}</span></h2>
        <h2>Block number: <a href="#">{{blockNumber}}</a></h2>
        <h2>From: <a href="#">{{from}}</a></h2>
        <h2>To: <a href="#">{{to}}</a></h2>
        <h2>Value: {{value}}</h2>
          <button type="submit" >
          Submit
        </button>
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
<template>
  <div class="container">
    <TheHeader/>
    <TheTransaction 
      status="Success" 
      blockNumber="0xa4305e"
      from="0x668d8d6f4e5d036f105d8fc8741ead76aff7c44e"
      to="0x590b00c364999d5e2a85f37d989c100a0f302be6"
      value="0x494654067e10000"
      />
    <TheFooter year="2022"/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';
import TheTransaction from './components/TheTransaction';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    TheTransaction,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
</style>
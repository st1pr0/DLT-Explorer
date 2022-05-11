<template>
<header>
  <!-- Background image -->
  <div class="relative overflow-hidden bg-no-repeat bg-cover" style="
    background-position: 50%;
    background-image: url('https://static.quanterall.com/images/open-graph-image.png');
    height: 350px;
  ">
    <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
      style="background-color: rgba(0, 0, 0, 0.75)">
      <div class="flex justify-center items-center h-full">
        <div class="text-center text-white px-6 md:px-12">
          <h1 class="text-5xl font-bold mt-0 mb-6"><a href="http://localhost:8080/">Quanterall</a></h1>
          <h3 class="text-3xl font-bold mb-8">The Avalanche C-chain block explorer!</h3>
        </div>
      </div>
    </div>
  </div>
  <!-- Background image -->
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
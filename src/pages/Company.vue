<template>
  <div>
    This is just for testing purpose.
  </div>
</template>

<script setup>

const radius = [3,4,5,6]

const area = (radius) => {
  return Math.PI * radius * radius
}

const calculate = (radius,logic)=>{
  let output =[]
  for(let i = 0; i < radius.length; i++){
    output.push(logic(i))
  }
  return output
}

console.log(calculate(radius,area));


</script>

<style lang="scss" scoped>

</style>
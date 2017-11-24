<template>
  <div class="test">
      <input type="text" v-model="title"><br/>
      <h1>{{title}}</h1>
      <p>{{user.first_name}}</p>
      <p>{{user.last_name}}</p>
      <ul>
          <li v-for="item in items">
              {{item.item}}</li>
      </ul>
      <button v-on:click="greet">Click</button>
      <input type="text" v-on:keyup='onKeyPress' id="">
      <br>
      <h2>{{msg}}</h2>

  </div>
</template>

<script>
    export default{
        name: 'test',
        props:{
            msg:{
                type: String,
                default:'FooBar'
            }

        },
        data(){
            return {
                title: 'Hello World',
                user: {
                    first_name : 'John',
                    last_name: 'Doe'
                },
                items:[
                    {item: 'item one'},
                    {item: 'item two'}, 
                    {item: 'item three'},
                    {item: 'item four'}
                ]
            }
        },
        methods:{
            greet: function(){
                alert("Hello");
            },
            onKeyPress: function(e){
                console.log(e.target.value);
            }
        }
    }
</script>

<style scoped>

</style>


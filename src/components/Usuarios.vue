<template>
    <h1>{{ msg }}</h1>
</template>
<script>
import axios from 'axios';

export default {
    name: 'Usuarios',
    data() {
        return {
            msg: ''
        }
    },
    methods: {
        getdata(){
            axios.get("http://localhost:3333/")
                .then((res) => {
                    this.msg = res.data.message
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    created() {
        this.getdata();
    },
    
};
</script>
<template>
    <div>
        <div>
            {{data}}
            {{$route.params.id}}
        </div>
    </div>
</template>



<script>

    export default{
        data(){
            return{
                data:'page2'
            }
        }
    }

    </script>
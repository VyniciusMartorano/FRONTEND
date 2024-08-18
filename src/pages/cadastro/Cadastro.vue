<template>
    <div class="flex justify-center p-2">
        <Card class="w-9/12">
            <template #title>Login</template>
                <template #content>
                    <div class="">
                    <label>CPF</label>
                    <InputText  class="mt-1"  v-model="login" />
                    
                </div>
                <div class="mt-2">
                    <label>Senha</label>
                    <InputText class="mt-1"  v-model="login" />
                </div>
                <Button class="mt-5" label="Login com google" icon="pi pi-google" />
                </template>
        </Card>
    </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';

export default {
    name: 'Cadastro', 
    components: {
        InputText,
        Card
    },
    data() {
        return {
            login: ''
        };
    },
    methods: {
        
    }
}
</script>

<style scoped>


</style>

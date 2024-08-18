<template>
    <div class="flex align-center justify-center p-2 ">
        <Card class="w-9/12 mt-9">
            <template #title>Login</template>
            <template #content>
                <FloatLabel class="mt-4">
                    <label for="cpf">CPF</label>
                    <InputText id="cpf" v-model="login" class="w-full" />
                </FloatLabel>
                <FloatLabel  class="mt-5">
                    <label for="senha">Senha</label>
                    <InputText type="password" id="senha" v-model="senha" class="w-full" />
                </FloatLabel>
                <Button class="mt-5 w-full" label="Login" icon="pi pi-sign-in" />
                <Button class="mt-2 w-full" label="Login com Google" icon="pi pi-google" />
               

            </template>
        </Card>
    </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Button from 'primevue/button';

export default {
    name: 'Cadastro', 
    components: {
        InputText,
        Card,
        Button
    },
    data() {
        return {
            login: '',
            senha: ''
        };
    },
    methods: {

    }
}
</script>

<style scoped>
/* Não há necessidade de estilos adicionais para o p-float-label */
</style>

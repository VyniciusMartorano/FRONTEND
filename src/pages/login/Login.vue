<template>
    <div class="flex align-center justify-center p-2 ">
        <Card v-if="formMode == formModeEnum.LOGIN" class="w-11/12 mt-9">
            <template #title>Login</template>
            <template #content>
                <FloatLabel class="mt-4">
                    <label for="cpf">CPF</label>
                    <InputMask id="cpf" v-model="login" mask="999.999.999-99" fluid />

                </FloatLabel>
                <FloatLabel  class="mt-5">
                    <label for="senha">Senha</label>
                    <InputText  type="password" id="senha" v-model="senha" class="w-full" />
                </FloatLabel>
                <div class="flex justify-end mt-1"><span id="label-cadastro">Não possui uma conta? <span id="link-cadastro" @click="formMode = formModeEnum.CADASTRO">Cadastre-se</span></span></div>
                <Button class="mt-3 w-full" label="Login" icon="pi pi-sign-in" />
                <Button class="mt-2 w-full" label="Login com Google" icon="pi pi-google" />
            </template>
        </Card>

        <Card v-if="formMode == formModeEnum.CADASTRO" class="w-11/12 mt-9">
            <template #title>Cadastro</template>
            <template #content>
                <FloatLabel class="mt-4">
                    <label for="nome">Nome</label>
                    <InputText id="nome" v-model="cadastro.nome" class="w-full" />
                </FloatLabel>
                <FloatLabel class="mt-6">
                    <label for="cpf">CPF</label>
                    <InputMask id="cpf" v-model="cadastro.cpf" mask="999.999.999-99" class="w-full" fluid />
                </FloatLabel>
                <FloatLabel class="mt-6">
                    <label for="telefone">Telefone</label>
                    <InputMask id="telefone" v-model="cadastro.telefone" class="w-full" mask="99 9 9999-9999" fluid />
                </FloatLabel>
                <FloatLabel class="mt-6">
                    <label for="email">E-mail</label>
                    <InputText id="email" v-model="cadastro.email" class="w-full" />
                </FloatLabel>
                <FloatLabel  class="mt-6">
                    <label for="senha">Senha</label>
                    <InputText  type="password" id="senha" v-model="cadastro.senha" class="w-full" />
                </FloatLabel>
                <FloatLabel  class="mt-6">
                    <label for="senha">Confirme sua Senha</label>
                    <InputText  type="password" id="confirmacao_senha" v-model="cadastro.confirmacao_senha" class="w-full" />
                </FloatLabel>
                <Button class="mt-3 w-full" label="Cadastrar" icon="pi pi-sign-in" />
            </template>
        </Card>


    </div>
</template>

<script>

import Card from 'primevue/card';

export default {
    name: 'Login', 
    components: {
        Card,
    },
    data() {
        return {
            login: '',
            senha: '',
            cadastro: {
                nome: '',
                cpf: '',
                telefone: '',
                email: '',
                senha: '',
                confirmacao_senha: ''
            },
            formMode: 1,
            formModeEnum: {
                LOGIN: 1,
                CADASTRO: 2
            }
        };
    },
    methods: {

    }
}
</script>

<style scoped>

#link-cadastro {
    color: purple;
    font-weight: 600;
    font-size: small;
}

#label-cadastro {
    text-align: right;
    font-size: smaller;
}
</style>

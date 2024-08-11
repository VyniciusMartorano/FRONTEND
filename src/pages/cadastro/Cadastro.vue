<template>
    <div class="flex justify-center p-2">
        <Card class="w-9/12">
            <CardHeader>
                <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
                <div class="">
                    <label>CPF</label>
                    <Input type="text" class="mt-1" placeholder="shadcn" v-bind="login" />
                    
                </div>
                <div class="mt-2">
                    <label>Senha</label>
                    <Input class="mt-1" type="text" placeholder="password" v-bind="login" />
                </div>
                <CustomButton class="mt-5" />

            </CardContent>
           
        </Card>
    </div>
</template>

<script>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import CustomButton from '@/components/custombutton/CustomButton.vue';

export default {
    name: 'Cadastro', 
    components: {
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
        Input,
        CustomButton
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

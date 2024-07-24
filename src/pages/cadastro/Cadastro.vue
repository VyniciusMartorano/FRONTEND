<template>
    <div class="flex justify-center p-4">
        <Card class="w-8/12">
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                Card Content
            </CardContent>
            <CardFooter>
                Card Footer
            </CardFooter>
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


export default {name: 'Cadastro', 
components: {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
},
methods: {

}
}
</script>

<style scoped>


</style>

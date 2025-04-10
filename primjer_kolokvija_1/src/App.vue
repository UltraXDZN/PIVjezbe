<script setup>
import { ref } from 'vue';
import ToDoHeader from './components/ToDoHeader.vue';
import ToDoBody from './components/ToDoBody.vue';
import ToDoFooter from './components/ToDoFooter.vue';

const currentYear = new Date().getFullYear();


</script>

<template>

    <ToDoHeader>To-Do List</ToDoHeader>
    <ToDoBody/>
    <ToDoFooter>
        Juraj Crljenko - {{ currentYear }}©
    </ToDoFooter>

</template>

<style scoped></style>

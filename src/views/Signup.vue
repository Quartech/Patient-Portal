<template>
    <div class = "container">
        <p>Hello world</p>
        <form action="http://localhost:3001/data" method="post">
            <input type="text" name="firstname"><br>
            <input type="text" name="lastname"><br>
            <input type="text" name="email"><br>
            <input type="submit" value="Submit">
        </form>
    </div>
</template>
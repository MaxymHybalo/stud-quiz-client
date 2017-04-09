<template id="head-bar-component">
    <nav class='navbar navbar-default'>
        <div class="container-fluid">
            <div class='navbar-header'>
                <router-link to="/" class="navbar-brand">StudQuiz</router-link>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <router-link to="/login">Ввійти</router-link>
                    </li>
                    <li>
                        <router-link to="/signup">Реєстрація</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

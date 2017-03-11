<template id="signup-account">
    <div class="panel panel-success">
        <div class="panel-heading">
            Заповніть дані профілю...
        </div>
        <div class="panel panel-label">
            <div class="container-fluid">
                <form>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3">
                                <div class="form-group">
                                    <label for="login">Логін</label>
                                    <input type="text" class="form-control" id="login" placeholder="Логін"/>
                                </div>
                                <div class="form-group">
                                    <label for="email">Електронна пошта</label>
                                    <input type="email" class="form-control" id="password" placeholder="Емейл"/>
                                </div>
                                <div class="form-group">
                                    <label for="password">Пароль</label>
                                    <input type="password" class="form-control" id="password" placeholder="Пароль"/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <button class="col-md-3 col-md-offset-9" type="button">Далі</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'signup-account'
    }
</script>

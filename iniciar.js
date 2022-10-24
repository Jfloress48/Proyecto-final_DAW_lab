function ir(){
    var U="GZ221985";
    var C=1234;
    var P="FB221332"
    var N=2345;
    var D="Daniel";
    var M=3456;
    if(document.form.password.value==C && document.form.login.value==U){
    alert("Bienvenido a tu bloc de notas");
    window.location="notas.html";
    }

    else if(document.form.password.value==N && document.form.login.value==P){
        alert("Bienvenido a tu bloc de notas");
        window.location="notas.html";
        }
        else if(document.form.password.value==M && document.form.login.value==D){
            alert("Bienvenido a tu bloc de notas");
            window.location="notas.html";
            }
    else{
    alert("Usuario o Contraseña Incorrecta ");
    }
}
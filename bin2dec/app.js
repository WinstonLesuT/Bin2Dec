// console.log("qlq bruja");
// const binary = 100;
// const decimal = parseInt(binary, 2);
// console.log(decimal);

window.onload = function(){
    document.getElementById("btnConvert").addEventListener("click", () =>{
                // tambien se puede usar ".oninput" para hacer el cambio al momento
        document.getElementById("bin-inp").onchange = function(e){
            let binary = e.target.value;
            const decimal = parseInt(binary, 2);
            console.log(decimal);
            document.getElementById("DecimalResult").innerHTML = decimal;
        };
    })
}
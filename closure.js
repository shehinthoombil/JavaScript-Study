function outer(){
    let a = 10
    function inner(){
        let b = 20
        console.log(a);
        console.log(b);
    }
    inner()
}
outer()
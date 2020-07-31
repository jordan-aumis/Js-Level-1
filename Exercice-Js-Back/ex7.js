function my_concat(a, b) {
    if (typeof a == "string" && typeof b == "string")
        console.log(a+" "+b);
    else
        console.log("Nope!");
}

my_concat("hello", "world");
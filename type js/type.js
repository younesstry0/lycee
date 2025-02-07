function var_type(name,type,value){
    if(typeof value === type){
        globalThis[name]=value;
    }else{
        console.error("error on type of  " + name);
        globalThis[name] = null;
    }
}
function do_string(code) {
    const func = new Function(code);
    func();
}
let please = {
    print: (message)=>{
        console.log(message);
    },
    read: (message)=>{
        return prompt(message);
    },
    ahmednoob: ()=>{
        console.log("yes ahmed is noob");
    },
    younessnoob: ()=>{
        console.error("what the fake youness is 3amek but ahmed is noob");
    }


}

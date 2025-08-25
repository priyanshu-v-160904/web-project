console.log("Hello");
let x=parseInt(prompt("enter what to do"));
let tasks=[];
console.log("1 to add");
console.log("2 to add at positon");
console.log("3 to show");
console.log("4 to delete");
console.log("5 to quit");

while(x!=5){

    if(x==2){
        let f=parseInt(prompt("enter the position to add"));
        let x=prompt("enter the item");
        tasks.splice(f-1,0,x);
        console.log("Item added");
        
        
    }
    else if(x==1){
        let x=prompt("enter the item");
        tasks.push(x);

    }
    
    else if(x==3){
        console.log("------------");
        for(let i=0;i<tasks.length;i++){
            
            console.log(i+1,tasks[i]);
            
        }
        console.log("------------");
    }
    else if(x==4){
        let y=parseInt(prompt("delete from position"));
        
        let z=tasks.splice(y,1);
        console.log("removed");  
    }
    else if(x==5){
        break;

    }
    x=prompt("what to do next");
}
console.log("This is a loop");
let total: number = 0;
let reviews: number[]=[10, 1.8,8,7,5,5.02,5.3];

for(let i = 0;i<reviews.length;i++)
{
    total+=reviews[i];
    console.log(`reviews[${i}]=${reviews[i]}`);
}
console.log(`average=${total/reviews.length}`);

let sports: string[]=["football","golf","bascket"];
for(let sport of sports)
{
    if(sport == "football")
    {
        console.log(`My favorite sport is ${sport}`);
    }
    else{
        console.log(`My favorite sport is not ${sport}`);
    }
}
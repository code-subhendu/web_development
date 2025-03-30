function facto()
{
    let result=1;
    const num = parseFloat(document.getElementById("number").value);
    if(num==0)
    {
        result=1;
    }
    else{
        for(let i=num;i>0;i--)
        {
            result=result*i;
        }
    }
    document.getElementById("result").textContent = 'Result: '+result;
}


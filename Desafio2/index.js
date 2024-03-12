
let user = Saldo(102,10)
let rank = ""

function Saldo(win, loser)
{
    let calculo = win - loser
    return calculo
}

if(user < 10)
{
    rank = "Ferro"
}

else if (user >= 11 && user < 20)
{
    rank = "Bronze"
}

else if (user >= 21 && user < 50)
{
    rank = "Prata"
}

else if (user >= 51 && user < 80)
{
    rank = "Ouro"
}

else if (user >= 81 && user < 90)
{
    rank = "Diamante"
}

else if (user >= 91 && user <= 100)
{
    rank = "Lendario"
}

else if (user >= 101)
{
    rank = "Imortal"
}

console.log(`O heroi tem o saldo de ${user} esta no nivel ${rank}!`)
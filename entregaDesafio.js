
let nickName = "Zack"
let Xp = 11000
let nivel = ""

switch(true)
{
    case (Xp < 1000) :
        nivel = "Ferro";
            break
    case (Xp >= 1000 && Xp <= 2000):
        nivel = "Bronze";
            break
    case (Xp >= 2001 && Xp <= 5000):
        nivel = "Prata";
            break
    case (Xp >= 5001 && Xp <= 7000):
        nivel = "Ouro";
            break
    case (Xp >= 7001 && Xp <= 8000):
        nivel = "Platina";
            break
    case (Xp >= 8001 && Xp <= 9000):
        nivel = "Ascendente";
            break
    case (Xp >= 9001 && Xp <= 10000):
        nivel = "Imortal";
            break
    case (Xp > 10000):
        nivel = "Radiante";
        break
    }


console.log("O Herói de nome " + nickName + " está no nível de " + nivel)
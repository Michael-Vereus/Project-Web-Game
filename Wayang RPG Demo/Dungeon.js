const Get = document.getElementById("Get")
const Action = document.getElementById("Action")
const Opsi = document.getElementById("Opsi")
const InputHere = document.getElementById("InputHere")
const dialogText = document.getElementById("dialogText")
let hp = null
let Att = null
let defense = null
let InputAcc ;
let room = 0;

Get.onclick = function(){
    InputAcc = InputHere.value
    if (InputAcc == "1"){
        if ((hp == null ) && (Att == null) && (defense == null)){
            Action.textContent = ("Congrats You've choose Werkudara.")
            hp = 15
            Att = 5
            defense = 5
            console.log(hp,Att,defense)
            Opsi.textContent = ("(A)Move into the next room (B)Check Inventory (C)Check Stats")
        }
        else{
            dialogText.textContent = "You've choosen a Wayang. Can't pick another Wayang"
        }
    }
    else if (InputAcc == "2"){
        if ((hp == null ) && (Att == null) && (defense == null)){
            Action.textContent = ("Congrats You've choose Arjuna.")
            hp = 13
            Att = 8
            defense = 3
            console.log(hp,Att,defense)
            Opsi.textContent = ("(A)Move into the next room (B)Check Inventory (C)Check Stats")
        } 
        else{
            dialogText.textContent = "You've choosen a Wayang. Can't pick another Wayang"
        }
    }
    else if (InputAcc == "3"){
        if ((hp == null ) && (Att == null) && (defense == null)){
            Action.textContent = ("Congrats You've choose Gatotkaca.")
            hp = 18
            Att = 3
            defense = 10
            console.log(hp,Att,defense)
            Opsi.textContent = ("(A)Move into the next room (B)Check Inventory (C)Check Stats")
        }
        else{
            dialogText.textContent = "You've choosen a Wayang. Can't pick another Wayang"
        }
    }
    else if (InputAcc == "4"){
        if ((hp == null ) && (Att == null) && (defense == null)){
            Action.textContent = ("Congrats You've choose Yudhistira.")
            hp = 14
            Att = 6
            defense = 4
            console.log(hp,Att,defense)
            Opsi.textContent = ("(A)Move into the next room (B)Check Inventory (C)Check Stats")   
        }
        else{
            dialogText.textContent = "You've choosen a Wayang. Can't pick another Wayang"
        }
    }
    else if (InputAcc == "/Dev1"){
        Action.textContent = ""
        hp = null
        Att = null
        defense = null
        dialogText.textContent = ""
        console.log(hp,Att,defense)
        Opsi.textContent = ""
    }
    else if (InputAcc == "/A"){
        if (hp > 0){
            RnG = Math.floor(Math.random() * 3) + 1;
            console.log (RnG)
            room = room + 1
            console.log(room)
            if (room == 10){
                Action.textContent = "Congrats You've completed the demo for Wayang Dungeon"
                hp = null; Att = null; defense = null;
                Opsi.textContent=""
                dialogText.textContent="Thanks for trying my demo ! ,please leave any suggestion via this email( mikevernt7@gmail.com )"
            }
            else if (room => 10){
                if (RnG == 1){
                    Action.textContent = ("'..Its an empty room....'")
                    Opsi.textContent = ("(A)Move into the next room (B)Check Inventory (C)Check Stats")
                } 
                else if (RnG == 2){
                    Action.textContent = ("a Wild Dasamuka appeared")
                    Opsi.textContent = ("What will you do ?            (Attack) (Defend) (Run)")
                }
                else if (RnG == 3){
                    dialogText.textContent = "Test3"
                }
            }
        }
    }
}
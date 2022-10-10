class Player {
constructor(name, totalCoins, status, hasStar,){
    this.name = name
    this.totalCoins = totalCoins
    this.status = status
    this.hasStar = false
}
setName = namePicked => {
    if(namePicked === "Mario"){
       this.name = "Mario" 
    } else if (namePicked === "Luigi") {
        this.name = "Luigi"
    }}
gotHit = () => {
    if(this.status === "Small") {
        this.status = "Dead"
        console.log("You have died, Game Over")
        clearInterval(gameRun)
    }else if (this.status === "Big"){
        this.status = "Small"
    }else if (this.status === "Powered Up"){
        this.status = "Big"
    }
}
gotPowerup = () => {
    if(this.status === "Powered Up"){
        this.win()
        
    }else if(this.status=== "Big"){
        this.status = "Powered Up"
    }
    else if (this.status === "Small"){
        this.status = "Big"
    }
}
addCoin = () => {
    this.totalCoins++
}
win = () => {
    console.log("You win because you found the power star, thanks so much fora playing my game!")
        clearInterval(gameRun)
}
}
const Mario = new Player("Mario", 0, "Small", false)
print = () => {
    console.log({
       Name: Mario.name,
       TotalCoins: Mario.totalCoins,
       Status: Mario.status
    })}


const gameRun = setInterval(() => {
    print()
    let outcome = Math.floor(Math.random()* 3)
    if(outcome === 0){
        Mario.gotHit()

    } else if (outcome === 1){
        Mario.gotPowerup()

    } else if (outcome === 2){
        Mario.addCoin()

    }
    console.log(outcome)
}, 1000)
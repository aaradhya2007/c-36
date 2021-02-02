class Form{
constructor(){}
display(){
    var title=createElement("h2")
    title.html("online game")
    title.position(120,0)

    var input=createInput("name")
    input.position(130,150)

    var button=createButton("play")
    button.position(250,200)

    var greeting=createElement("h3")

    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name=input.value()
        playerCount=playerCount+1
        player.update(name)
        player.updateCount(playerCount)

        greeting.html("hello,welcome "+ name + " ! waiting for others to join")
greeting.position(150,160)

    })    

        
}
}
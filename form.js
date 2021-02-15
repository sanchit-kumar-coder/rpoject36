	class form{
		constructor(){
		
		}
		display(){
			var title = createElement("h2")
			title.html("Car Racing")
			title.position(130.0)
			var input = createInput("name")
			var button = createButton("play")
			var greating = createElement ("h3")
			input.position(130,160)
			button.position(250,160)
			button.mousePressed(function(){
				input.hide()
				button.hide
				var name = input.value()
				playerCount += 1
				player.update(name)
				player.updateCount(playerCount)
				greeting.html("hellow")
				greeting.position(130,160)
			})
		}
}
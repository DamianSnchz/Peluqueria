$(document).ready(prep)

		function prep() {
			$("img").click(mostrar);
		}
        
		function mostrar() {
			let img = $(this);
			 //capturo clase
			let nombre = img.attr("class");
			//clase de efecto
			let efect = img.attr("alt");
			// figure
			let figure = "." + efect + " figure";
			//concateno clase
			let clase = $("." + nombre)
			//alto img
			let alto = img.height();
			if(alto < 260){
				// efecto de imagen 
				$("." + efect + " img").css({ height:"50%", width: "auto", 'z-index': '100' });
			}
			else{
				//efecto de imagen
			    $("." + efect + " img").css({ height: "80%", width: "auto", 'z-index': '100' });
			}
			//efecto de .efect
			$("." + efect).css({ background: "#000", position: "fixed", "z-index": "50", bottom: "0", right: "0", height: "100vh", width: "100%"});
			// efecto de figure 
			$(figure).css({ display: "flex", "justify-content": "center", "align-items": "center", height: "100%", width: "100%" })
		    $("." + efect).toggle(".fond")
		}
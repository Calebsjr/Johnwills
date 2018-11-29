toggleclick();
              function toggleclick() {
                  document.getElementById('sidebar').style.display = "block";


              }
              cancel();
              function cancel() {
                  document.getElementById('sidebar').style.display = "none";

              }
              
						var myImage = document.getElementById("img1");
						var imageArray = ["A.png", "B.png", "C.png"];
						var imageIndex = 0;
								imgnext();
							function imgnext(){
								myImage.setAttribute("src", imageArray[imageIndex]);
								imageIndex++;
								if (imageIndex > 2) {
									imageIndex = 0;
									
								}
							}
							function imgprev() {
								myImage.setAttribute("src", imageArray[imageIndex]);
								imageIndex--;
								if (imageIndex < 0) {
									imageIndex = 2;
								}
							}


      // Get the modal
      let modal = document.getElementById('myModal');
      let modal2 = document.getElementById('myModal2');
      let modal3 = document.getElementById('myModal3');
  
      // Get the image and insert it inside the modal - use its "alt" text as a caption
      let img = document.getElementById('myImg');
      let img2 = document.getElementById('myImg2');
      let img3 = document.getElementById('myImg3');
      let modalImg = document.getElementById("img01");
      let modalImg2 = document.getElementById("img02");
      let modalImg3 = document.getElementById("img03");
      let captionText = document.getElementById("caption");
      let captionText2 = document.getElementById("caption2");
      let captionText3 = document.getElementById("caption3");
      img.onclick = function(){
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
      }
      img2.onclick = function(){
        modal2.style.display = "block";
        modalImg2.src = this.src;
        captionText2.innerHTML = this.alt;
      }
      img3.onclick = function(){
        modal3.style.display = "block";
        modalImg3.src = this.src;
        captionText3.innerHTML = this.alt;
      }
  
      // Get the <span> element that closes the modal
      let span = document.getElementsByClassName("close")[0];
      let span2 = document.getElementsByClassName("close2")[0];
      let span3 = document.getElementsByClassName("close3")[0];
  
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      }
      span2.onclick = function() {
        modal2.style.display = "none";
      }
      span3.onclick = function() {
        modal3.style.display = "none";
      }
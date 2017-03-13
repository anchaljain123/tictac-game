/**
 * Created by anchal on 10/3/17.
 */

$(document).ready(function () {


    var turn = 1;//starts from player1
    var count_square=0;

  $("input[type=button]").on("click",function(event) {

      var id = event.target.id;

      count_square+=1;
          if (turn == 1)//player1
          {
              $("#"+id).attr('value','X');
             turn = 0;
                $('span').html(" Player2, Its your chance !! ");
              checkWin('X');

          }
          else {

              document.getElementById(id).value="O";
              turn = 1;
              $('span').html(" Player1, Its your chance !! ");
              checkWin('O');
          }

          $("#"+id).attr('disabled',true);


  });
        function checkWin(val) {

            var sqr1=document.getElementById('s1').value;
            var sqr2=document.getElementById('s2').value;
            var sqr3=document.getElementById('s3').value;
            var sqr4=document.getElementById('s4').value;
            var sqr5=document.getElementById('s5').value;
            var sqr6=document.getElementById('s6').value;
            var sqr7=document.getElementById('s7').value;
            var sqr8=document.getElementById('s8').value;
            var sqr9=document.getElementById('s9').value;

                var res=val;

                var player;
                if(res=="X")
                    player="Player1 Wins";
                else
                    player="Player2 Wins ";

            if (sqr1 == res && sqr2 == res && sqr3 == res) { //1st row

                $('span').html(player);
                $("input").attr('disabled',true);
            }

           else if (sqr4 == res && sqr5 == res && sqr6 ==res) { //2nd row
                $('span').html(player);
                $("input").attr('disabled',true);

            }
           else if (sqr7 == res && sqr8 == res && sqr9 == res) { //3rd row
                $('span').html(player);
                $("input").attr('disabled',true);

            }
           else if (sqr1 == res && sqr4 == res && sqr7 == res) { //1st col
                $('span').html(player);
                $("input").attr('disabled',true);

            }

           else if (sqr2 == res && sqr5 == res && sqr8 == res) { //2nd col
                $('span').html(player);
                $("input").attr('disabled',true);

            }
            else if (sqr3 == res && sqr6 == res && sqr9 == res) { //3rd col
                $('span').html(player);
                $("input").attr('disabled',true);

            }

           else  if (sqr1 == res && sqr5 == res && sqr9 == res) { //1st diag
                $('span').html(player);
                $("input").attr('disabled',true);

            }
            else if (sqr3 == res && sqr5 ==res && sqr7 == res) { //2nd diag
                $('span').html(player);
                $("input").attr('disabled',true);

            }

            else {
                drawGame();


            }



        }


        function drawGame() {

            var moveCount = count_square;
            console.log(count_square)
            if (moveCount == 9) {
                $('span').html("Game Draw !!");
            }

        }

        $('button').on("click",function() {


            location.reload();
        });


});

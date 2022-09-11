<script>
document.getElementById("fly").className = "finish";
</script>


    // AUDIO

        // Abby

        var one = document.getElementById('one');
        var $audio1 = $('#audio1');

        one.addEventListener('mouseover', function(){
            $audio1[0].volume = 0;
            $audio1[0].play()

            $audio1.animate({volume: 1}, {
                duration: 1000,
                queue: false,
            })

        })
        one.addEventListener('mouseout', function(){

            $audio1.animate({volume: 0}, {
                duration: 1000,
                complete: function() {
                    $audio1[0].pause();
                },
                queue: false,
            })

        })


export default function Imgslider(){
    React.useEffect(()=>{
        let cur = 0;
        let intervalid = setInterval(() => {
            changeslide(cur+1);   
        }, 5000);
        let slides = document.querySelectorAll(".slide");
        let navlink = document.querySelectorAll(".slidenavlink");

        for(let i=0;i<navlink.length;i++){
            navlink[i].addEventListener('click',(e)=>{
                clearInterval(intervalid);
                changeslide(i);
                intervalid = setInterval(() => {
                    changeslide(cur+1);   
                }, 5000);
            });
        }

        slides[cur].style.opacity = '1';
        navlink[cur].style.backgroundColor = 'white';
        
        function changeslide(moveto){
            if(moveto >= slides.length) moveto = 0;
            if(cur == moveto) return;

            navlink[cur].style.backgroundColor = 'grey';
            navlink[moveto].style.backgroundColor = 'white';
            
            slides[moveto].style.animation = '';
            document.getElementsByClassName("imgslider")[0].insertBefore(slides[moveto],slides[cur]);
            slides[moveto].style.opacity = '1';
            slides[cur].style.animation = 'changeslide 2s forwards';
            cur = moveto;
        }
    });

    return (
        <div className="slidercontainer">
            <div className="imgslider">
                <div className="slide">
                    <img src="res/images/slides/slide1.jpg"/>
                </div>
                <div className="slide">
                    <img src="res/images/slides/slide2.jpg"/>
                </div>
                <div className="slide">
                    <img src="res/images/slides/slide3.jpg"/>
                </div>


                <div className="slidenav">
                    <div className="slidenavlink"></div>
                    <div className="slidenavlink"></div>
                    <div className="slidenavlink"></div>
                </div>
                
                <div className="refslide">
                    <img src="res/images/slides/slide3.jpg"/>
                </div>
            </div>
        </div>
    );
}

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
        <div className="slidercontainer mt-16 w-full">
            <div className="imgslider relative w-full h-full overflow-hidden">
                <div className="slide absolute w-full opacity-0">
                    <img className="relative w-full" src="/res/images/slides/slide1.jpg"/>
                </div>
                <div className="slide absolute w-full opacity-0">
                    <img className="relative w-full" src="/res/images/slides/slide2.jpg"/>
                </div>
                <div className="slide absolute w-full opacity-0">
                    <img className="relative w-full" src="/res/images/slides/slide3.jpg"/>
                </div>
 

                <div className="slidenav absolute bottom-4 m-auto left-1/2 -translate-x-1/2 z-[1]">
                    <div className="slidenavlink inline-block border border-solid border-white bg-gray-500 p-1 m-1 rounded-full cursor-pointer"></div>
                    <div className="slidenavlink inline-block border border-solid border-white bg-gray-500 p-1 m-1 rounded-full cursor-pointer"></div>
                    <div className="slidenavlink inline-block border border-solid border-white bg-gray-500 p-1 m-1 rounded-full cursor-pointer"></div>
                </div>
                
                <div className="refslide w-full opacity-0 -z-10">
                    <img className="w-full h-full" src="/res/images/slides/slide3.jpg"/>
                </div>
            </div>
        </div>
    );
}
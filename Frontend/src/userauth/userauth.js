import Header from "../header/header.js";


function UserAuth(){

    async function signIn(e){
        e.preventDefault();
        let email = document.querySelector('.signin  .email').value
        let password = document.querySelector('.signin  .password').value

        let data = {email:email,password:password}
        let res = await fetch('/user/signIn',{method:"POST",
                    headers:{'Content-Type': 'application/json'},
                    body:JSON.stringify(data)})
        res = await res.json()
        if(res.success){
            localStorage.setItem('name',res.name)
            localStorage.setItem('email',res.email)
            window.location.href = '/index.html'
        }
        else{
            alert(res.msg);
        }

    }

    async function signUp(e){
        e.preventDefault();
        let name = document.querySelector('.register .firstname').value+' '+document.querySelector('.register .lastname').value
        let email = document.querySelector('.register  .email').value
        let password = document.querySelector('.register  .password').value
        let res = await fetch('/user/signUp',{method:"POST",
                                        headers:{'Content-Type': 'application/json'},
                                        body:JSON.stringify({name:name,email:email,password:password})})

        res = await res.json()
        if(res.success){
            window.location.href = '/userauth.html'
        }
        else{
            alert(res.msg);
        }
    }

    function btnRegister(e){
        document.querySelector('.register').style.display = 'flex';
        document.querySelector('.signin').style.display = 'none';
    }

    function btnSignIn(e){
        document.querySelector('.register').style.display = 'none';
        document.querySelector('.signin').style.display = 'flex';
    }

    React.useEffect(()=>{
        let divregister = document.querySelector('.register');
        divregister.style.display = 'none';
    });

    return (
    <>
        <Header/>
        <div className="content bg-white h-screen">
            
            <div className="register flex flex-col items-center justify-center w-2/3 mx-auto bg-slate-100 shadow-2xl shadow-black h-full">
                <div className="mb-7">
                    <p className="text-4xl">Sign Up</p>
                </div>
                <form className="my-7 flex flex-col text-lg w-full items-center" onSubmit={(e)=>signUp(e)}>
                    <div className="flex flex-row justify-center w-2/4">
                        <div className="mr-4 w-1/2">
                            <label className="block" name="firstname">First Name:</label>
                            <input name="firstname" className="firstname px-3 py-2 rounded-xl border-2 w-full" type="text" />
                        </div>
                        <div className=" w-1/2">
                            <label className="block" name="lastname">Last Name:</label>
                            <input name="lastname" className="lastname  px-3 py-2 rounded-xl border-2 w-full" type="text" />
                        </div>
                    </div>
                    <div className="w-5/12">
                        <label className="mt-4 block" name="email">Email:</label>
                        <input name="email" className="email px-3 py-2 rounded-xl border-2 w-full" type="text" />
                    </div>
                    <div className="w-5/12">
                        <label className="mt-4  block" name="password">Password:</label>
                        <input name="password" className="password  px-3 py-2 rounded-xl border-2 w-full" type="password" />
                    </div>
                    <div className="w-5/12">
                        <label className="mt-4  block" name="repassword">Re-Enter Password:</label>
                        <input name="repassword" className="repassword  px-3 py-2 rounded-xl border-2 w-full" type="password" />
                    </div>

                    <input className="mt-5 cursor-pointer bg-green-500 rounded-xl px-3 py-2 text-white w-5/12" id="signup" type="submit" value="Sign Up"/>
                </form>
                <div>
                    <p className="text-base">Already Registered? <button className="text-blue-500" onClick={(e)=>btnSignIn(e)} id="btnsignin">Sign In</button></p>
                </div>
            </div>

            <div className="signin flex flex-col items-center justify-center w-2/3 mx-auto bg-slate-100 shadow-2xl shadow-black h-full">
                <div className="mb-7">
                    <p className="text-4xl">Sign In</p>
                </div>
                <form className="my-7 flex flex-col text-lg w-2/3 max-w-sm" onSubmit={(e)=>signIn(e)}>
                    <label name="email">Email:</label>
                    <input name="email" className="email px-3 py-2 rounded-xl border-2" type="text" />
                    <label className="mt-4" name="password">Password:</label>
                    <input name="password" className="password px-3 py-2 rounded-xl border-2" type="password" />

                    <input className="mt-5 cursor-pointer bg-green-500 rounded-xl px-3 py-2 text-white" id="signin" type="submit" value="Sign In"/>
                </form>
                <div>
                    <p className="text-base">Not Register? <button className="text-blue-500" onClick={(e)=>btnRegister(e)} id="btnregister">Register</button></p>
                </div>
            </div>
        </div>
    </>
    );
}


const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(<UserAuth/>);
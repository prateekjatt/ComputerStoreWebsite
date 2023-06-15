import Header from "../header/header.js";
import Modal from "../modal/modal.js";
const {
  useState
} = React;

function UserAuth() {
  const [modal, setmodal] = useState({});
  const [showmodal, setshowmodal] = useState(0);

  async function signIn(e) {
    e.preventDefault();
    let modal = document.querySelector('.modal');
    let email = document.querySelector('.signin  .email').value;
    let password = document.querySelector('.signin  .password').value;
    let data = {
      email: email,
      password: password
    };
    let res = await fetch('/user/signIn', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    res = await res.json();
    setmodal({
      success: res.success,
      msg: res.msg
    });
    setshowmodal(1);

    if (res.success) {
      localStorage.setItem('name', res.name);
      localStorage.setItem('email', res.email);
      setTimeout(() => {
        window.location.href = '/index.html';
      }, 2000);
    }
  }

  async function signUp(e) {
    e.preventDefault();
    let name = document.querySelector('.register .firstname').value;
    let lastname = document.querySelector('.register .lastname').value;
    if (lastname) name = name + ' ' + lastname;
    let email = document.querySelector('.register  .email').value;
    let password = document.querySelector('.register  .password').value;
    let res = await fetch('/user/signUp', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    });
    res = await res.json();
    setmodal({
      success: res.success,
      msg: res.msg
    });
    setshowmodal(1);

    if (res.success) {
      setTimeout(() => {
        window.location.href = '/userauth.html';
      }, 2000);
    }
  }

  function btnRegister(e) {
    document.querySelector('.register').style.display = 'flex';
    document.querySelector('.signin').style.display = 'none';
  }

  function btnSignIn(e) {
    document.querySelector('.register').style.display = 'none';
    document.querySelector('.signin').style.display = 'flex';
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), showmodal ? /*#__PURE__*/React.createElement(Modal, {
    success: modal.success,
    onclick: setshowmodal,
    msg: modal.msg
  }) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement("div", {
    className: "content bg-white h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "register hidden flex-col items-center justify-center w-2/3 mx-auto bg-slate-100 shadow-2xl shadow-black h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-7"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-4xl"
  }, "Sign Up")), /*#__PURE__*/React.createElement("form", {
    className: "my-7 flex flex-col text-lg w-full items-center",
    onSubmit: e => signUp(e)
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-center w-2/4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mr-4 w-1/2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block",
    name: "firstname"
  }, "First Name:"), /*#__PURE__*/React.createElement("input", {
    name: "firstname",
    className: "firstname px-3 py-2 rounded-xl border-2 w-full",
    type: "text"
  })), /*#__PURE__*/React.createElement("div", {
    className: " w-1/2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block",
    name: "lastname"
  }, "Last Name:"), /*#__PURE__*/React.createElement("input", {
    name: "lastname",
    className: "lastname  px-3 py-2 rounded-xl border-2 w-full",
    type: "text"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "w-5/12"
  }, /*#__PURE__*/React.createElement("label", {
    className: "mt-4 block",
    name: "email"
  }, "Email:"), /*#__PURE__*/React.createElement("input", {
    name: "email",
    className: "email px-3 py-2 rounded-xl border-2 w-full",
    type: "text"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-5/12"
  }, /*#__PURE__*/React.createElement("label", {
    className: "mt-4  block",
    name: "password"
  }, "Password:"), /*#__PURE__*/React.createElement("input", {
    name: "password",
    className: "password  px-3 py-2 rounded-xl border-2 w-full",
    type: "password"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-5/12"
  }, /*#__PURE__*/React.createElement("label", {
    className: "mt-4  block",
    name: "repassword"
  }, "Re-Enter Password:"), /*#__PURE__*/React.createElement("input", {
    name: "repassword",
    className: "repassword  px-3 py-2 rounded-xl border-2 w-full",
    type: "password"
  })), /*#__PURE__*/React.createElement("input", {
    className: "mt-5 cursor-pointer bg-green-500 rounded-xl px-3 py-2 text-white w-5/12",
    id: "signup",
    type: "submit",
    value: "Sign Up"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-base"
  }, "Already Registered? ", /*#__PURE__*/React.createElement("button", {
    className: "text-blue-500",
    onClick: e => btnSignIn(e),
    id: "btnsignin"
  }, "Sign In")))), /*#__PURE__*/React.createElement("div", {
    className: "signin flex flex-col items-center justify-center w-2/3 mx-auto bg-slate-100 shadow-2xl shadow-black h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-7"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-4xl"
  }, "Sign In")), /*#__PURE__*/React.createElement("form", {
    className: "my-7 flex flex-col text-lg w-2/3 max-w-sm",
    onSubmit: e => signIn(e)
  }, /*#__PURE__*/React.createElement("label", {
    name: "email"
  }, "Email:"), /*#__PURE__*/React.createElement("input", {
    name: "email",
    className: "email px-3 py-2 rounded-xl border-2",
    type: "text"
  }), /*#__PURE__*/React.createElement("label", {
    className: "mt-4",
    name: "password"
  }, "Password:"), /*#__PURE__*/React.createElement("input", {
    name: "password",
    className: "password px-3 py-2 rounded-xl border-2",
    type: "password"
  }), /*#__PURE__*/React.createElement("input", {
    className: "mt-5 cursor-pointer bg-green-500 rounded-xl px-3 py-2 text-white",
    id: "signin",
    type: "submit",
    value: "Sign In"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-base"
  }, "Not Register? ", /*#__PURE__*/React.createElement("button", {
    className: "text-blue-500",
    onClick: e => btnRegister(e),
    id: "btnregister"
  }, "Register"))))));
}

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render( /*#__PURE__*/React.createElement(UserAuth, null));
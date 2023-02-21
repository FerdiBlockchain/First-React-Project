// what, where
// ReactDOM.render(<h1>Hello React!</h1>,document.getElementById("root"));

// ReactDOM.render(<p>Hello React!</p>,document.querySelector("div"));

// ReactDOM.render(
//   <ul>
//     Hello React!
//     <li>React1</li>
//     <li>React2</li>
//   </ul>,
//   document.getElementById("root")
// );

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

// Başka bir çalışma:
function MainContent() {
  return <h1>React öğreniyorum!</h1>;
}

ReactDOM.render(
  <div>
    <Navbar />
    <MainContent />
  </div>,

  document.getElementById("root")
);

ReactDOM.render(<h1 className="header">Hello React!</h1>, document.getElementById("root"))

// Yukarıdaki kod satırını normal JavaScript'te oluşturarak yeniden yaz ve div root'umuza bir h1 ekle (innerHTML kullanmadan yap). Yeni bir h1 ögesi oluştur, Başlığa innerText ver, class ismi olarak "header" sınıf adını ver ve son olarak div root'un alt ögesi (child) olarak ekle. 


const h1 = document.createElement("h1")
h1.innerText = "Hello React! (Normal JS)"
h1.className = "header"
document.getElementById("root").append(h1)

console.log(h1)

//ChatGPT'nin cevabı
const root = document.getElementById("root");

const header = document.createElement("h1");
header.innerText = "Hello React! (Normal JS)";
header.classList.add("header");

root.appendChild(header); 

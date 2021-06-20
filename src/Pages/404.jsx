import '../styles/errorPage.css'

const ErrorPage = () => {
    return(
        <div className="error-page"> 
        <div id="error404">

  <h1 id="h1"> <span>4</span> 
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    
      <circle cx="50" cy="50" fill="none" strokeLinecap="round" r="40" strokeWidth="8" stroke="#1B1B1B" strokeDasharray="60 60" />
        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.5s" begin="0s" repeatCount="indefinite"/>
      <circle cx="50" cy="50" fill="none" strokeLinecap="round" r="30" strokeWidth="8" stroke="#222222" strokeDasharray="50 50" strokeDashoffset="50" />
        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;-360 50 50" keyTimes="0;1" dur="1.5s" begin="0s" repeatCount="indefinite" />
    </svg>
     <span>8</span> </h1>
     <br />
     <br />
     <br />
    
    <p className="subtitle"> Page not Found </p>
    <br />
    <br />
    <br />
   <p> <a href="/register" className="error-link subtitle"> Old User? Register</a></p>
   <br />
    <p><a href="/login" className="error-link subtitle"> New User? Login</a></p>

        </div>
        </div>
    )
}

export default ErrorPage
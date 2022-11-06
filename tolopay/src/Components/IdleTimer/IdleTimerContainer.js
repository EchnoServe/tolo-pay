import react,{ useState, useRef} from 'react'
import { useIdleTimer } from 'react-idle-timer';
import Modal from 'react-modal'
import LoginPage from "../../Pages/login_page/LoginPage";
import { Link,  useNavigate  } from "react-router-dom";
import "./IdleTimerContainer.css";
Modal.setAppElement('#root')

export default function IdleTimerContainer() {
 const [modalIsOpen, setModalIsOpen] = useState(false)
 const idleTimerRef = useRef(null)
 const sessionTimeoutRef = useRef(null)
 const navigate = useNavigate();


const StayActive = () =>{
	setModalIsOpen(false)
	console.log('user is active');
	clearTimeout(sessionTimeoutRef.current)
}
const logOut = () =>{
	setModalIsOpen(false)
	console.log('user has logged out');
	
	clearTimeout(sessionTimeoutRef.current);
	  // CLEAR DATA FROM STORAGE
        localStorage.clear();
        sessionStorage.clear();

        navigate("/login");
	
}
const idleTimeRef = useRef(null);
const onIdle = () => {
console.log('user is idle');
 setModalIsOpen(true)
 sessionTimeoutRef.current = setTimeout(logOut, 10000);
};
const idleTimer = useIdleTimer({
crossTab: true,
ref: idleTimeRef,
timeout:  60 * 1000,
onIdle: onIdle}) 

return (
	<div idleTimer={idleTimer} className="idleModal">
	
	<Modal isOpen={modalIsOpen} className="modal">
	   <div className="modalItem">
	   <div className="modalCon">
     <h2> You've been idle for a while </h2>
     <p> You will be logged out soon</p>
     <div>
       <button onClick={logOut}><Link to="/login" className="logoutbtn">Log me out</Link></button>
       <button onClick={StayActive}className="keepin">Keep me signed in</button>
     </div>
     </div>
     </div>

	</Modal>
	</div>

	);
}
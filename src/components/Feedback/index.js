import Projects from '../Projects'
import './index.css'

const Feedback = () => (
  <div className="main-cont">
    <div className="bg-img">
      <div className="frst-cont">
        <h1 className="head">Hello, I am</h1>
        <h1 className="name">Sarika Pachunoori</h1>
      </div>
      <div className="profile-pic">
        <img
          src="https://m.media-amazon.com/images/I/81CUNNh6n7L._AC_UF1000,1000_QL80_.jpg"
          alt="one"
          className="img"
        />
      </div>
    </div>
    <div className="proj-cont">
      <h1 className="proj-heading">Projects</h1>
      <Projects />
    </div>

    <div className="certifiction-main-cont">
      <h1>Certification</h1>
    </div>
  </div>
)
export default Feedback

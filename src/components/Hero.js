import { useNavigate } from "react-router-dom";



const Hero = () => {
  const history = useNavigate();

    return  <section className="hero">
    <div>
      <h1>Find your favourite movie</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button type="button" onClick={() => history('/search')}>Search</button>
    </div>
  </section>
}

export default Hero
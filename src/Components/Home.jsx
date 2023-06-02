import '../Styles/Home.css';
import TofuDish from '../Images/tofu2.jpg'
const Home = () => {
    return (
      <div className="home">
        <div className="content">
          <h1>
            ENJOY YOUR HEALTHY <br /> DELICIOUS FOOD
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit,
            harum hic deleniti sapiente voluptatem iste.
          </p>
          <section>
            <button>
              <a href="">Book a Table</a>
            </button>
            <span>
              <i class="fa-regular fa-circle-play fa-2xl"></i>&nbsp;Watch Video
            </span>
          </section>
        </div>
        <div className="image">
          <img src={TofuDish} />
        </div>
      </div>
    );
}
 
export default Home;
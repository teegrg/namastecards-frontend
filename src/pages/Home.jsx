import img from "../pages/image/card.webp";
import Reviews from "../components/Reviews";

function Home() {
  return (
    <>
      <div className="home">
        <div className="background-img"></div>

        <hr className="home-hr" />
        <div className="home-text">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;Get your customized business Cards.
          </span>
          <br />
          <hr />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;When it comes to marketing, a business card
          can go a long way. This handy item can be used in so many ways – from
          direct mail campaigns to invites, giveaways and more. Whether you’re
          hosting a special event or advertising your online store, give
          customers and prospects all your information on one convenient,
          portable card.
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;Business cards are a popular way to add
          a personalized, professional touch. We offer a variety of customizable
          options. Choose your own paper stock, thickness that will make
          your card a delight for recipients to receive. We offer services if
          you’re looking for a quick and affordable way to make business cards.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Are you ready for your own business card? Use
          our design option or choose your own background image to make it yours
          by adding all your key information and hitting print, that is
          ready to get to work.
          <br />
        </div>
        <hr className="home-hr" />
        <div>
          <img className="home-image" src={img} alt="pic" />
        </div>
      </div>
      <Reviews />
    </>
  );
}

export default Home;

import "./ViewerPost.scss";
import { useDispatch, useSelector } from "react-redux";
import { BsFillHandThumbsUpFill, BsEyeFill } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";
import { setToggleViewerMenu } from "../../actions/viewer";

function ViewerPost() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.viewer.visible);

  return (
    <>
      <main className="viewer-body">
        <div className="viewer-header">
          <BiFoodMenu
            className="toggle-menu"
            onClick={() => dispatch(setToggleViewerMenu())}
          />
          <h1 className="viewer-title">Title</h1>
          <h2>Auteur</h2>
          <span><BsFillHandThumbsUpFill style={{ marginRight: "0.5em" }} />52</span>
          <span><BsEyeFill style={{ marginRight: "0.5em" }} />85</span>
        </div>
        <aside className={!isVisible ? "sidebar" : "sidebar sidebar-toggled"}>
          <h3>Contents</h3>
          <nav>
            <ul>
              <li>Page 1</li>
              <li className="active">Page 2</li>
              <li>Page 3</li>
              <li>Page 3</li>
              <li>Page 3</li>
              <li>Page 3</li>
              <li>Page 3</li>
              <li>Page 3</li>
              <li>Page 3</li>
            </ul>
          </nav>
        </aside>

        <section className={!isVisible ? "main" : "main main-toggled"}>
          <h2>Chapter 2</h2>
          <p>
            Ennui Williamsburg Echo Park pork belly, hella flannel single-origin
            coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.
            Shoreditch flannel tote bag pug jean shorts post-ironic semiotics
            cornhole forage. Skateboard aesthetic synth leggings Banksy. Shabby
            chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx
            sustainable before they sold out McSweeney's. Hoodie Banksy freegan
            bicycle rights, aesthetic try-hard fap ethnic deep v fixie. Before
            they sold out +1 ugh, Bushwick Wes Anderson cred Marfa synth butcher
            jean shorts Terry Richardson.
          </p>

          <p>
            3 wolf moon blue bottle Truffaut ennui Bushwick, VHS organic
            skateboard authentic pickled tattooed brunch kogi freegan McSweeney's.
            Lomo skateboard american apparel, gastropub Schlitz food truck blue
            bottle. Salvia shoreditch ennui asymmetrical Williamsburg. Cliche
            umami mumblecore asymmetrical disrupt craft beer, selvage whatever
            sustainable american apparel YOLO Portland organic. Fashion axe
            mixtape salvia, Wes Anderson cred food truck DIY. Yr Pinterest
            Portland Truffaut four loko, semiotics Vice. Authentic lomo bitters,
            mlkshk raw denim beard narwhal jean shorts cliche tousled PBR.
          </p>

          <p>
            Wolf irony Schlitz, ethical gastropub disrupt cray. Skateboard High
            Life viral, try-hard pitchfork pour-over fap next level. High Life
            butcher meh, Vice single-origin coffee Marfa intelligentsia
            farm-to-table gentrify occupy cardigan helvetica salvia vegan. Bicycle
            rights chillwave keytar before they sold out, narwhal Brooklyn
            mustache. Plaid literally Schlitz Carles, stumptown swag chillwave
            Echo Park vinyl jean shorts McSweeney's roof party bespoke. Small
            batch banjo salvia Terry Richardson 3 wolf moon wolf twee hella.
            Occupy farm-to-table tattooed tousled twee pug.
          </p>

          <p>
            Disrupt umami kogi selvage hoodie. YOLO brunch chambray beard, Schlitz
            intelligentsia Austin. Fanny pack iPhone semiotics Tonx flexitarian,
            disrupt tote bag hoodie dreamcatcher Portland ugh. Truffaut plaid
            cardigan, ethnic mustache actually master cleanse Pinterest deep v
            brunch. Shoreditch kale chips Odd Future typewriter Echo Park, artisan
            pug pour-over disrupt american apparel wayfarers. DIY semiotics
            chillwave cardigan gluten-free freegan. Tumblr keffiyeh art party,
            jean shorts viral put a bird on it irony hella gluten-free whatever
            cornhole deep v.
          </p>
        </section>
      </main>
      <section className="reviews">
        <h2>Commentaires</h2>
        <div className="review">
          <div className="review_infos">
            <h3>Pseudo</h3>
            <span>Date</span>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dolor recusandae velit autem repellendus pariatur architecto
            culpa ad amet doloribus perferendis, nostrum praesentium in a
            spernatur iste quos perspiciatis, vero expedita dignissimos?
          </p>
        </div>
        <div className="review">
          <div className="review_infos">
            <h3>Pseudo</h3>
            <span>Date</span>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dolor recusandae velit autem repellendus pariatur architecto
            culpa ad amet doloribus perferendis, nostrum praesentium in a
            spernatur iste quos perspiciatis, vero expedita dignissimos?
          </p>
        </div>
      </section>
      <form action="" method="post" className="new-review">
        <fieldset>
          <legend>Pseudo</legend>
          <textarea name="review-text" id="review-text" maxLength="500" />
        </fieldset>
      </form>
    </>
  );
}

export default ViewerPost;

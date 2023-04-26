import "./ViewerPost.scss";
import { useDispatch, useSelector } from "react-redux";
import { BsFillHandThumbsUpFill, BsEyeFill } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";
import { setToggleViewerMenu } from "../../actions/viewer";

import React, { useState } from "react";

function ViewerPost() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.viewer.visible);
  const [currentPage, setCurrentPage] = useState(1);
  const [content, setContent] = useState(
    "Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage. Skateboard aesthetic synth leggings Banksy.Shabby chic PBR plaid helvetica dreamcatcher tousled, irony ethnic Tonx sustainable before they sold out McSweeney's. Hoodie Banksy freegan bicycle rights, aesthetic try-hard fap ethnic deep v fixie.Ennui Williamsburg Echo Park pork belly, hella flannel single-origin coffee. Bicycle rights artisan beard Neutra cardigan Echo Park.Shoreditch flannel tote bag pug jean shorts post-ironic semiotics cornhole forage."
  );
  
  const words = content.split(" ");
  const wordsPerPage = 400;
  const pageCount = Math.ceil(words.length / wordsPerPage);

  const handleClickPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderedContent = () => {
    const startIndex = (currentPage - 1) * wordsPerPage;
    const endIndex = startIndex + wordsPerPage;
    const pageWords = words.slice(startIndex, endIndex);
    // Vérifier si le dernier mot de la page actuelle est coupé
    const lastWord = pageWords[pageWords.length - 1];
    const isLastWordCut = !lastWord.endsWith(".") && !lastWord.endsWith(",");
    if (isLastWordCut) {
      // S'il est coupé, trouver le début du mot suivant
      const nextWordIndex = content.indexOf(lastWord, startIndex + wordsPerPage);
      if (nextWordIndex !== -1) {
        const nextWord = content.slice(nextWordIndex, content.indexOf(" ", nextWordIndex));
        pageWords[pageWords.length - 1] += nextWord;
      }
    }
    return pageWords.join(" ");
  };

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
          <span>
            <BsFillHandThumbsUpFill style={{ marginRight: "0.5em" }} />
            52
          </span>
          <span>
            <BsEyeFill style={{ marginRight: "0.5em" }} />
            85
          </span>
        </div>
        <aside className={!isVisible ? "sidebar" : "sidebar sidebar-toggled"}>
          <h3>Contents</h3>
          <nav>
            <ul>
              {Array.from({ length: pageCount }, (_, i) => (
                <li
                  key={i}
                  className={i + 1 === currentPage ? "active" : ""}
                  onClick={() => handleClickPage(i + 1)}
                >
                  Page {i + 1}
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <section className={!isVisible ? "main" : "main main-toggled"}>
          {/* <h2>Chapter 2</h2> */}
          <p>{renderedContent()}</p>
        </section>
      </main>
      <section className="reviews">
        <h2>Commentaires</h2>
        <div className="review">
          <div className="review_infos">
            <h3>Pseudo</h3>
            <span>Date</span>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            recusandae velit autem repellendus pariatur architecto culpa ad amet
            doloribus perferendis, nostrum praesentium in a spernatur iste quos
            perspiciatis, vero expedita dignissimos?
          </p>
        </div>
        <div className="review">
          <div className="review_infos">
            <h3>Pseudo</h3>
            <span>Date</span>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            recusandae velit autem repellendus pariatur architecto culpa ad amet
            doloribus perferendis, nostrum praesentium in a spernatur iste quos
            perspiciatis, vero expedita dignissimos?
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

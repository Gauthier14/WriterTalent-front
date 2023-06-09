import { showMessages, generateMessages } from 'src/selectors/message.js';

describe('showMessages function', () => {
  let messages;
  
  beforeEach(() => {
    // Créer un élément 'div' avec la classe 'messages' et l'ajouter au DOM
    messages = document.createElement('div');
    messages.classList.add('messages');
    document.body.appendChild(messages);
  });
  
  afterEach(() => {
    // Supprimer l'élément 'div' avec la classe 'messages' du DOM
    messages.parentNode.removeChild(messages);
  });
  
  it('displays messages and hides them after a delay', () => {
    messages.style.display = 'none';
    showMessages(1000);
    expect(messages.style.display).toBe('block');
  
    setTimeout(() => {
      expect(messages.style.display).toBe('none');
    }, 1000);
  });
});

describe('generateMessages function', () => {
  it('returns a message object based on input dataType', () => {
    const successMessage = generateMessages('login-success');
    expect(successMessage).toEqual({
      text: "Vous êtes à présent connecté !",
      class: "success"
    });
    
    const emptyInputMessage = generateMessages('login-input-empty');
    expect(emptyInputMessage).toEqual({
      text: "Vérifiez que tous les champs soient remplis",
      class: "warning"
    });

    const allAuthorsMessage = generateMessages('all-authors');
    expect(allAuthorsMessage).toEqual({
      text: "La liste des auteurs n'a pas pu être récupérée, Problème de connexion avec L'API !",
      class: "warning"
    });

    const savedPostMessage = generateMessages('post-saved');
    expect(savedPostMessage).toEqual({
      text: "Votre écrit a été sauvegardé.",
      class: "success"
    });
  });
});

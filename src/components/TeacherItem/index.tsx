import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://pbs.twimg.com/profile_images/1214578106729684992/wzfQ83H6_400x400.jpg" alt="Loiane"/>
        <div>
          <strong>Loiane Groner</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Entusiasta dos conteúdos mais modernos sobre física espacial.
        <br /><br />
        Apaixonada pelo espaço e um dia pretende ajudar a povoar Marte.
      </p>

      <footer>
        <p>
          Preço/hora 
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
      </article>
  );
}

export default TeacherItem;
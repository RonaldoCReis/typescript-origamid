// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button

const button = document.querySelector('button');

const toggleNav = () => {
  const nav = document.querySelector('nav');

  if (nav && button) {
    nav?.classList.toggle('active');

    const ariaLabel = nav?.classList.contains('active')
      ? 'Fechar Menu'
      : 'Abrir Menu';

    button?.setAttribute(
      'aria-expanded',
      nav?.classList.contains('active').toString()
    );

    button?.setAttribute('aria-label', ariaLabel);
  }
};

button?.addEventListener('click', toggleNav);

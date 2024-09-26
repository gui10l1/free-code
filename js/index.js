const menuLinks = document.getElementsByClassName('menuLink');
const contactForm = document.getElementById('contactForm');

function setActiveLink(linkElement) {
  const isAlreadyActive = linkElement.classList.contains('active');

  if (isAlreadyActive) return;

  linkElement.classList.add('active');
}

function unsetCurrentActiveLinks() {
  const menuLinks = document.getElementsByClassName('menuLink');

  for (const link of menuLinks) {
    link.classList.remove('active');
  }
}

function handleMenuLinkClick(event) {
  const link = event.target;

  unsetCurrentActiveLinks();
  setActiveLink(link);
}

function extractInfoFromFormData(formData) {
  const entries = formData.entries();
  const data = Array
    .from(entries)
    .reduce((acc, [name, value]) => {
      acc[name] = value;

      return acc;
    }, {});

  return data;
}

function handleContactFormSubmit(event) {
  event.preventDefault();

  const target = event.target;
  const formData = new FormData(target);

  const data = extractInfoFromFormData(formData);

  console.log(data);

  Swal.fire({
    title: 'Informações enviadas!',
    text: 'Enquanto não temos um servidor para processar sua solicitação, veja seus dados escritos no console! =D',
    icon: 'success',
  });

  target.reset();
}

Array.from(menuLinks).forEach(
  link => link.addEventListener('click', handleMenuLinkClick)
);

contactForm.addEventListener('submit', handleContactFormSubmit);

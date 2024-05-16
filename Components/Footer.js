// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="/"
        target="_blank"
        title="Anuj pal's Linkedin Profile"
      >
      Anuj Pal
      </a>
      <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Food<span>Fire</span>
        </strong>
    </div>
  );
};

export default Footer;

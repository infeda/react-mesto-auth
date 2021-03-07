function Footer(props) {
  if(props.loggedIn === true) {
    return (
      <footer className="footer">
        <p className="footer__copyright">
          &copy; 2021 Mesto Russia
        </p>
      </footer>
    )
  } else return ('');
}

export default Footer;
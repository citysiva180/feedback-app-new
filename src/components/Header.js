function Header({ text }) {
  return (
    <Header>
      <div className="container">
        <h1>Feedback UI</h1>
        <h2>{text}</h2>
      </div>
    </Header>
  );
}

Header.defaultProps = {
  text: "Default Props",
};

export default Header;

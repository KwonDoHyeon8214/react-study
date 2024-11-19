export default function Header() {
  return (
    <header id="header">
      <div className="center">
        <h1 className="logo">
          <a href="/">LOGO</a>
        </h1>
        <ul className="gnb">
          <li>
            <a href="/">SHOP</a>
          </li>
          <li>
            <a href="/">REVIEW</a>
          </li>
          <li>
            <a href="/">COMMUNITY</a>
          </li>
          <li>
            <a href="/">ABOUT</a>
          </li>
        </ul>
        <div className="role">
          <a href="/">MYPAGE</a>
          <a href="/">CART</a>
        </div>
      </div>
    </header>
  );
}

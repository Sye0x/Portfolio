import "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-credit">
          Designed and Developed by{" "}
          <span className="designer-name">Hamza Shah</span>
        </p>
        <p className="footer-year">
          &copy; {currentYear} Syed's Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

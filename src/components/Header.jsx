import image from "../assets/logo.webp";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={image} alt="All Sounds Hearing Logo" />
        <h3>All Sounds Hearing </h3>
      </div>
      <h1>CRM System</h1>
    </header>
  );
}

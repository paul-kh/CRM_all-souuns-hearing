import image from "../assets/logo.webp";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={image} alt="All Sounds Hearing Logo" />
      </div>
      <h1>All Sounds Hearing CRM System</h1>
    </header>
  );
}

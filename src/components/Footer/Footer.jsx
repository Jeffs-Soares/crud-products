import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
        <div class="p-4 text-center text-neutral-700 dark:text-neutral-200">
          © 2023 Copyright:&nbsp;
          <Link to="#" className="text-neutral-800 dark:text-neutral-400">
             Jeff
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;

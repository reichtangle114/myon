import { Navbar } from "flowbite-react";

 function Header() {
     return( 
        <Navbar fluid rounded>
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">めにゅーだみょん</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/otama">おたま♪</Navbar.Link>
          <Navbar.Link href="/main">おたち</Navbar.Link>
          <Navbar.Link href="/ichiran">いっぱい</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
     )
   }

   export default Header;
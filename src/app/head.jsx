'use client'
import { Navbar } from "flowbite-react";
import { Dropdown } from "flowbite-react";

function Header() {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">めにゅーだみょん</span>
            </Navbar.Brand>
            <Dropdown label="めにゅー" dismissOnClick={false}>
            <Dropdown.Item href="/otama">おたま♪</Dropdown.Item>
            <Dropdown.Item href="/main"> おたち</Dropdown.Item>
            <Dropdown.Item href="/ichiran">いっぱい</Dropdown.Item>
            </Dropdown>
            {/* <Navbar.Collapse>
                <Navbar.Link href="/otama">おたま♪</Navbar.Link>
                <Navbar.Link href="/main">おたち</Navbar.Link>
                <Navbar.Link href="/ichiran">いっぱい</Navbar.Link>
            </Navbar.Collapse> */}
        </Navbar>
    )
}

export default Header;
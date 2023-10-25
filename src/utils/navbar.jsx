import useID from "../hooks/useId";

const navbar = [
    {
        id: useID,
        title: "Home",
        path: "/home",
        element: <h1>Home Page</h1>,
        hidden: false,
        private: false,
    },
    {
        id: useID,
        title: "About",
        path: "/about",
        element: <h1>About Page</h1>,
        hidden: false,
        private: false,
    },
    {
        id: useID,
        title: "Contacts",
        path: "/contacts",
        element: <h1>Contacts Page</h1>,
        hidden: false,
        private: false,
    },
    {
        id: useID,
        title: "Technology",
        path: "/technology",
        element: <h1>Technology Page</h1>,
        hidden: false,
        private: false,
    },
    {
        id: useID,
        title: "Sign In",
        path: "/sign-in",
        element: <h1>Sign In Page</h1>,
        hidden: true,
        private: false,
    },
    {
        id: useID,
        title: "Sign Up",
        path: "/sign-up",
        element: <h1>Sign Up Page</h1>,
        hidden: true,
        private: false,
    },
    {
        id: useID,
        title: "Shodiyor",
        path: "/shodiyor",
        element: <h1>Shodiyor Page</h1>,
        hidden: false,
        private: false,
    },
];

export default navbar;

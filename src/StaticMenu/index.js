import "./StaticMenu.css";
const StaticMenu = () => {
    return (
        <div className="static-holder">
            <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/david7mejia/"
                target="_blank"
            >
                <div className="side-linkedin"></div>
            </a>
            <a
                rel="noreferrer"
                href="https://github.com/David7Mejia"
                target="_blank"
            >
                <div className="side-github"></div>
            </a>
            <a
                rel="noreferrer"
                href="mailto:davidmejiasoftware@gmail.com"
                target="_blank"
            >
                <div className="side-email"></div>
            </a>
        </div>
    );
};
export default StaticMenu;

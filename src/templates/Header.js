function Header() {
    const view = /*html*/ `
        <div class="header-main">
            <div class="header-logo">
                <h1>
                    <a href="#/">
                        Home
                    </a>
                </h1>
            </div>
            <div class="header-nav">
                <a href="#/about/">  
                    About
                </a>
            </div>
        </div>
    `;

    return view;
}

export default Header;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from '../../utils/ActiveLink';
import SearchModal from '../Modals/SearchModal';
import ShoppingCartModal from '../Modals/ShoppingCartModal';
import SidebarModal from '../Modals/SidebarModal';

class NavbarTwo extends Component {
    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    // Search Modal
    toggleModalSearch = () => {
        this.setState({
            SearchModal: !this.state.SearchModal
        });
    }
    
    // Shopping Cart Modal
    toggleModalCart = () => {
        this.setState({
            ShoppingCartModal: !this.state.ShoppingCartModal
        });
    }

    // Sidebar Modal
    toggleModalSidebar = () => {
        this.setState({
            SidebarModal: !this.state.SidebarModal
        });
    }
 
    render() {

        const { products } = this.props;
        const { collapsed } = this.state;
        const classNameOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classNameTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <React.Fragment>
                <div id="navbar" className="navbar-area">
                    <div className="main-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img src={require("../../images/logo.png")} alt="logo" />
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classNameTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classNameOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link href="/electronics">
                                                <a className="nav-link">
                                                    Home
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about">
                                                <a className="nav-link">
                                                    About Us
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/blog-2">
                                                <a className="nav-link">
                                                    Blog
                                                </a>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item megamenu">
                                            <Link href="#">
                                                <a className="nav-link">
                                                    Women's <i className='bx bx-chevron-down'></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col">
                                                                <h6 className="submenu-title">Shop Styles</h6>

                                                                <ul className="megamenu-submenu">
                                                                    <li>
                                                                        <Link href="/products-left-sidebar" activeClassName="active">
                                                                            <a>Left Sidebar</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/products-left-sidebar-with-categories" activeClassName="active">
                                                                            <a>
                                                                                Left Sidebar With Categories
                                                                            </a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/categories-1" activeClassName="active">
                                                                            <a>Categories (2 in Row)</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/categories-4" activeClassName="active">
                                                                            <a>Categories Full Width (3 in Row)</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="col">
                                                                <h6 className="submenu-title">Shop Styles 2</h6>

                                                                <ul className="megamenu-submenu">
                                                                    <li>
                                                                        <Link href="/products-right-sidebar" activeClassName="active">
                                                                            <a>Right Sidebar</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/products-right-sidebar-with-categories" activeClassName="active">
                                                                            <a>Right Sidebar With Categories</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/categories-2" activeClassName="active">
                                                                            <a>Categories Fullwidth</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/lookbook-1" activeClassName="active">
                                                                            <a>Grid (3 in Row)</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="col">
                                                                <h6 className="submenu-title">Shop Styles 3</h6>

                                                                <ul className="megamenu-submenu">
                                                                    <li>
                                                                        <Link href="/products-without-sidebar" activeClassName="active">
                                                                            <a>Without Sidebar</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/products-sidebar-fullwidth" activeClassName="active">
                                                                            <a>With Sidebar Full Width</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/categories-3" activeClassName="active">
                                                                            <a>Categories (1 in Row)</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/lookbook-2" activeClassName="active">
                                                                            <a>Grid Full Width (4 in Row)</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="col">
                                                                <ul className="megamenu-submenu">
                                                                    <li>
                                                                        <div className="aside-trending-products">
                                                                            <img src={require("../../images/categories/categories3.jpg")} alt="image" />

                                                                            <div className="category">
                                                                                <h4>Popular Products</h4>
                                                                            </div>

                                                                            <Link href="#">
                                                                                <a className="link-btn"></a>
                                                                            </Link>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
 
                                        <li className="nav-item megamenu">
                                            <Link href="#">
                                                <a className="nav-link">
                                                    Men's <i className='bx bx-chevron-down'></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col">
                                                                <h6 className="submenu-title">Shop Styles</h6>

                                                                <ul className="megamenu-submenu">
                                                                    <li>
                                                                        <Link href="/products-left-sidebar" activeClassName="active">
                                                                            <a>Left Sidebar</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/products-left-sidebar-with-categories" activeClassName="active">
                                                                            <a>
                                                                                Left Sidebar With Categories
                                                                            </a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/categories-1" activeClassName="active">
                                                                            <a>Categories (2 in Row)</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/categories-4" activeClassName="active">
                                                                            <a>Categories Full Width (3 in Row)</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="col">
                                                                <h6 className="submenu-title">Shop Styles 2</h6>

                                                                <ul className="megamenu-submenu">
                                                                    <li>
                                                                        <Link href="/products-right-sidebar" activeClassName="active">
                                                                            <a>Right Sidebar</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/products-right-sidebar-with-categories" activeClassName="active">
                                                                            <a>Right Sidebar With Categories</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/categories-2" activeClassName="active">
                                                                            <a>Categories Fullwidth</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/lookbook-1" activeClassName="active">
                                                                            <a>Grid (3 in Row)</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="col">
                                                                <h6 className="submenu-title">Shop Styles 3</h6>

                                                                <ul className="megamenu-submenu">
                                                                    <li>
                                                                        <Link href="/products-without-sidebar" activeClassName="active">
                                                                            <a>Without Sidebar</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/products-sidebar-fullwidth" activeClassName="active">
                                                                            <a>With Sidebar Full Width</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/categories-3" activeClassName="active">
                                                                            <a>Categories (1 in Row)</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/lookbook-2" activeClassName="active">
                                                                            <a>Grid Full Width (4 in Row)</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="col">
                                                                <ul className="megamenu-submenu">
                                                                    <li>
                                                                        <div className="aside-trending-products">
                                                                            <img src={require("../../images/categories/categories4.jpg")} alt="image" />

                                                                            <div className="category">
                                                                                <h4>Popular Products</h4>
                                                                            </div>

                                                                            <Link href="#">
                                                                                <a className="link-btn"></a>
                                                                            </Link>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
 
                                        <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link">
                                                    Blog <i className='bx bx-chevron-down'></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/blog-1" activeClassName="active">
                                                        <a className="nav-link">Grid (2 in Row)</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog-2" activeClassName="active">
                                                        <a className="nav-link">Grid (3 in Row)</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog-3" activeClassName="active">
                                                        <a className="nav-link">Grid (4 in Row)</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog-4" activeClassName="active">
                                                        <a className="nav-link">Grid (Full Width)</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog-5" activeClassName="active">
                                                        <a className="nav-link">Right Sidebar</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="#">
                                                        <a className="nav-link">
                                                            Single Post <i className='bx bx-chevron-right'></i>
                                                        </a>
                                                    </Link>

                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <Link href="/single-blog-1" activeClassName="active">
                                                                <a className="nav-link">Default</a>
                                                            </Link>
                                                        </li>
                
                                                        <li className="nav-item">
                                                            <Link href="/single-blog-2" activeClassName="active">
                                                                <a className="nav-link">With Video</a>
                                                            </Link>
                                                        </li>
                
                                                        <li className="nav-item">
                                                            <Link href="/single-blog-3" activeClassName="active">
                                                                <a className="nav-link">With Image Slider</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <div className="others-option">
                                        <div className="option-item">
                                            <div className="search-btn-box" onClick={this.toggleModalSearch}>
                                                <i className="search-btn bx bx-search-alt"></i>
                                            </div>
                                        </div>

                                        <div className="option-item">
                                            <div className="cart-btn">
                                                <Link href="#toggleModalCart">
                                                    <a onClick={ e => {
                                                        e.preventDefault();
                                                        this.toggleModalCart();
                                                    }}>
                                                        <i className='bx bx-shopping-bag'></i>
                                                        <span>{products.length}</span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="option-item">
                                            <div className="burger-menu" onClick={this.toggleModalSidebar}>
                                                <span className="top-bar"></span>
                                                <span className="middle-bar"></span>
                                                <span className="bottom-bar"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                
                {/* Search Modal */}
                <SearchModal 
                    onClick={this.toggleModalSearch} 
                    active={this.state.SearchModal ? 'active' : ''} 
                />

                {/* Shopping Cart Modal */}
                <ShoppingCartModal 
                    onClick={this.toggleModalCart} 
                    active={this.state.ShoppingCartModal ? 'active' : ''} 
                />

                {/* Sidebar Modal */}
                <SidebarModal 
                    onClick={this.toggleModalSidebar} 
                    active={this.state.SidebarModal ? 'active' : ''} 
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems
    }
}

export default connect(mapStateToProps)(NavbarTwo);

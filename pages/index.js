import React, { Component } from "react";

class Index extends Component {
    static async getInitialProps() {
        return {};
    }

    render() {
        return (
            <div className="mainarea">
                <header>
                    <div className="smallmenu">
                        <div className="container">
                            <div className="logo">
                                <a href="/">
                                    <img
                                        src="https://www.banksathi.com/public/site/image/logo.svg?t=4"
                                        alt="logo"
                                    />
                                </a>
                            </div>

                            <div className="navbar">
                                <div className="icon-bar">
                                    <i />
                                    <i />
                                    <i />
                                </div>

                                <ul id="nav-lists" className="">
                                    <li className="close">
                                        <span>×</span>
                                    </li>
                                    <li>
                                        <a href="https://www.banksathi.com">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.banksathi.com/about_us.html">
                                            About us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.banksathi.com/partner">
                                            Partners
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.banksathi.com/contact_us.html">
                                            Contact us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://bit.ly/3ochFFt"
                                            target="_blank"
                                        >
                                            Get The App
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bigmenu ">
                        <div className="container">
                            <div className="col-md-2 col-sm-xx col-xs-12">
                                <div className="logoarea">
                                    <a href="https://www.banksathi.com/">
                                        <img
                                            src="https://www.banksathi.com/public/site/image/logo.svg?t=3"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-xx col-xs-12 navli">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a
                                            className="nav-link"
                                            href="https://www.banksathi.com"
                                        >
                                            Home{" "}
                                            <span className="sr-only">
                                                (current)
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="https://www.banksathi.com/about_us.html"
                                        >
                                            About us
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="https://www.banksathi.com/partner"
                                        >
                                            Partners
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-4 col-sm-9 col-xs-12">
                                <div className="menuarea">
                                    <ul>
                                        <li>
                                            <a
                                                href="https://bit.ly/3ochFFt"
                                                target="_blank"
                                            >
                                                Get The App
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.banksathi.com/contact_us.html">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="banner mt-5" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-5 col-xs-12">
                                <div className="banimg align-left wow fadeInDown">
                                    <img
                                        src="https://www.banksathi.com/public/site/image/phone_n.png"
                                        alt="Image"
                                    />

                                    <div className="circle">
                                        <a
                                            id="play-video"
                                            className="video-play-button"
                                            href="#"
                                        >
                                            <span />
                                        </a>

                                        <div
                                            id="video-overlay"
                                            className="video-overlay"
                                        >
                                            <a className="video-overlay-close">
                                                &times;
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-7 col-sm-7 col-xs-12">
                                <div className="bantext wow bounceInUp">
                                    <h1>
                                        Become a financial advisor and start
                                        selling online
                                        <br />
                                        {/* <div className="typed"></div> */}
                                    </h1>
                                    <p>
                                        Start Your Business with{" "}
                                        <b> Zero Investment </b> and Earn over{" "}
                                        <b> ₹1,00,000 Every Month</b>. Provide
                                        financial advice and products to the
                                        customers and get a fast payout every
                                        month.
                                    </p>
                                    <a
                                        href="https://bit.ly/3ochFFt"
                                        target="_blank"
                                    >
                                        <button
                                            type="button"
                                            className="downbtn"
                                        >
                                            Download App Now{" "}
                                            <i
                                                className="fa fa-arrow-down"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="advisor" id="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="adtext wow fadeInUp">
                                    <div className="numspeack">
                                        <ul>
                                            <li>
                                                <i
                                                    className="fa fa-user"
                                                    aria-hidden="true"
                                                />
                                                <div id="shiva">
                                                    <span className="count">
                                                        1000000
                                                    </span>
                                                    +<h3>Advisors Community</h3>
                                                </div>
                                            </li>
                                            <li>
                                                <i
                                                    className="fa fa-map-marker"
                                                    aria-hidden="true"
                                                />
                                                <div id="shiva">
                                                    <span className="count">
                                                        18000
                                                    </span>
                                                    +<h3>Pincode Covered</h3>
                                                </div>
                                            </li>
                                            <li>
                                                <i
                                                    className="fa fa-globe"
                                                    aria-hidden="true"
                                                />
                                                <div id="shiva">
                                                    <span className="count">
                                                        750
                                                    </span>
                                                    +<h3>Cities Covered</h3>
                                                </div>
                                            </li>
                                            <li>
                                                <i
                                                    className="fa fa-inr"
                                                    aria-hidden="true"
                                                />
                                                <div id="shiva">
                                                    <span className="count">
                                                        50
                                                    </span>
                                                    Crore+
                                                    <h3>Advisors Income</h3>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="appwork" id="Featured">
                    <div className="container">
                        <h2>Featured In</h2>

                        <div className="row">
                            <div className="featurelogo">
                                <a>
                                    <img
                                        src="https://www.banksathi.com/public/site/image/fe_one.png"
                                        alt="Image"
                                    />
                                </a>
                            </div>

                            <div className="featurelogo">
                                <a>
                                    <img
                                        src="https://www.banksathi.com/public/site/image/fe_two.png"
                                        alt="Image"
                                    />
                                </a>
                            </div>

                            <div className="featurelogo">
                                <a>
                                    <img
                                        src="https://www.banksathi.com/public/site/image/fe_three.png"
                                        alt="Image"
                                    />
                                </a>
                            </div>

                            <div className="featurelogo">
                                <a>
                                    <img
                                        src="https://www.banksathi.com/public/site/image/fe_four.png"
                                        alt="Image"
                                    />
                                </a>
                            </div>

                            <div className="featurelogo">
                                <a>
                                    <img
                                        src="https://www.banksathi.com/public/site/image/fe_five.png"
                                        alt="Image"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="container">
                    <div className="products">
                        <h2>Products Offered to Your Customers</h2>
                    </div>
                    <section className="customer slider">
                        <div className="slide">
                            <div>
                                <img
                                    src="https://www.banksathi.com/public/site/image/loan.svg"
                                    alt="credit"
                                />
                                <h2>Loans</h2>
                                <p>
                                    Provide personal loans, home loans and more
                                    to your customers at interesting deals from
                                    the best lenders.
                                </p>
                            </div>
                        </div>
                        <div className="slide">
                            <div>
                                <img
                                    src="https://www.banksathi.com/public/site/image/creditcard.svg"
                                    alt="credit"
                                />
                                <h2>Credit Card</h2>
                                <p>
                                    Make your customers pamper their lifestyle
                                    choices with the suitable credit cards.
                                    Offer a variety of credit cards from the top
                                    banks.
                                </p>
                            </div>
                        </div>
                        <div className="slide">
                            <div>
                                <img
                                    src="https://www.banksathi.com/public/site/image/bank.svg"
                                    alt="credit"
                                />
                                <h2>Saving Account</h2>
                                <p>
                                    Provide zero balance savings accounts to
                                    your customers and help them earn more on
                                    their savings.
                                </p>
                            </div>
                        </div>
                        <div className="slide">
                            <div>
                                <img
                                    src="https://www.banksathi.com/public/site/image/demat.svg"
                                    alt="credit"
                                />
                                <h2>Demat Account</h2>
                                <p>
                                    You have an option to open a free Demat &
                                    Trading account online in less than 15
                                    minutes.
                                </p>
                            </div>
                        </div>
                        <div className="slide">
                            <div>
                                <img
                                    src="https://www.banksathi.com/public/site/image/emicard.svg"
                                    alt="credit"
                                />
                                <h2>EMI Cards</h2>
                                <p>
                                    Offer a variety of EMI cards from top banks,
                                    help your customer convert all their
                                    purchases into easy EMIs.
                                </p>
                            </div>
                        </div>
                    </section>
                </div> */}

                <div className="benifit adviarea" id="benifits">
                    <div className="container">
                        <h2>Who Can Become a BankSathi Advisor</h2>
                        <div className="row featgridbox">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="feabox wow bounceInUp adbox">
                                    <img
                                        src="https://www.banksathi.com/public/site/image/ad_one.png"
                                        alt="Image"
                                    />
                                    <h3>Loan Agents</h3>
                                    <p>
                                        Well informed about all types of loans,
                                        use your knowledge and advise people on
                                        the best options.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="feabox wow bounceInUp adbox">
                                    <img
                                        src="https://www.banksathi.com/public/site/image/ad_two.png"
                                        alt="Image"
                                    />
                                    <h3>Insurance Advisors</h3>
                                    <p>
                                        Use your strong network of professionals
                                        and personal people and start sourcing
                                        for all financial products.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="feabox wow bounceInUp adbox">
                                    <img
                                        src="https://www.banksathi.com/public/site/image/ad_three.png"
                                        alt="Image"
                                    />
                                    <h3>Ex Bankers</h3>
                                    <p>
                                        You are someone who is up-to-date with
                                        the banking market trends, help people
                                        to finance their dreams
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="feabox wow bounceInUp adbox">
                                    <img
                                        src="https://www.banksathi.com/public/site/image/ad_four.png"
                                        alt="Image"
                                    />
                                    <h3>Wealth Advisors</h3>
                                    <p>
                                        You are a qualified professional who
                                        deals with the investment needs of
                                        affluent clients. Help people meet their
                                        financial goals.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="feabox wow bounceInUp adbox">
                                    <img
                                        src="https://www.banksathi.com/public/site/image/ad_five.png"
                                        alt="Image"
                                    />
                                    <h3>BFSI Professionals</h3>
                                    <p>
                                        Working as a finance professional, use
                                        your skills and provide a range of such
                                        financial products or services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="appwork" id="works">
                    <div className="container">
                        <br />
                        <br />

                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="workimg wow fadeInLeft">
                                    <img
                                        src="https://www.banksathi.com/public/site/image/workpic.png?t=1"
                                        alt="Image"
                                    />
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="worktext wow fadeInRight">
                                    <ul>
                                        <li>
                                            <h3>Become a BankSathi Advisor</h3>
                                            <p>
                                                Register yourself and become a
                                                certified BankSathi advisor. Get
                                                training to understand financial
                                                products and services better.
                                            </p>
                                        </li>

                                        <li>
                                            <h3>
                                                Share Leads and start Earning
                                            </h3>
                                            <p>
                                                Upload your lead’s details in
                                                the app and sell financial
                                                products to them at most
                                                suitable rates.
                                            </p>
                                        </li>

                                        <li>
                                            <h3>Invite More Customers</h3>
                                            <p>
                                                Share social cards and other
                                                marketing content to create more
                                                leads.
                                            </p>
                                        </li>

                                        <li>
                                            <h3>Refer and Earn More Income</h3>
                                            <p>
                                                Refer the BankSathi app to your
                                                friends, create a team and earn
                                                upto 10% of their income.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <a
                                className="earnnowbtn"
                                href="https://bit.ly/3ochFFt"
                                target="_blank"
                                // style="text-decoration: none !important"
                            >
                                Start Earning Now
                            </a>
                        </div>
                    </div>
                </div>

                <div className="benifit" id="benefits">
                    <div className="container">
                        <h2>Benefits of Joining BankSathi </h2>
                        <p> </p>
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="feabox wow bounceInUp">
                                    <img
                                        src="https://www.banksathi.com/public/site/image/one.png"
                                        alt="Image"
                                    />

                                    <h3>Zero Investment</h3>
                                    <p>
                                        Invest nothing, start your own business
                                        on your finger tips.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="feabox wow bounceInUp">
                                    <img
                                        src="https://www.banksathi.com/public/site/image/three.png"
                                        alt="Image"
                                    />

                                    <h3>Timely Payout</h3>
                                    <p>
                                        Get your payout credited in your account
                                        under minimum time.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="feabox wow bounceInUp">
                                    <img
                                        src="https://www.banksathi.com/public/site/image/two.png"
                                        alt="Image"
                                    />

                                    <h3>Earn Unlimited Money</h3>
                                    <p>
                                        Earn an attractive amount of money on
                                        each financial product you sell.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="feabox wow bounceInUp">
                                    <img
                                        src="https://www.banksathi.com/public/site/image/four.png"
                                        alt="Image"
                                    />

                                    <h3>Earnings for lifetime</h3>
                                    <p>
                                        There’s no retirement. Create customers
                                        once and earn on their transactions for
                                        a long run.{" "}
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="feabox wow bounceInUp">
                                    <img
                                        src="https://www.banksathi.com/public/site/image/five.png"
                                        alt="Image"
                                    />

                                    <h3>Wide Range of Products</h3>
                                    <p>
                                        Understand and sell an array of
                                        financial products to your customers.{" "}
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="feabox wow bounceInUp">
                                    <img
                                        src="https://www.banksathi.com/public/site/image/six.png"
                                        alt="Image"
                                    />

                                    <h3>Training and Guidance</h3>
                                    <p>
                                        Our dedicated training and sales team
                                        will provide assistance at every step to
                                        achieve your goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="recoarea">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="recotext">
                                    <h2>Recognition in</h2>
                                    <div className="recopic">
                                        <ul>
                                            <li>
                                                <img
                                                    src="https://www.banksathi.com/public/site/image/startup-india.jpg"
                                                    alt="Logo"
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    src="https://www.banksathi.com/public/site/image/inc42.jpg"
                                                    alt="Logo"
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    src="https://www.banksathi.com/public/site/image/aubank.jpg"
                                                    alt="Logo"
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    src="https://www.banksathi.com/public/site/image/Nasscom.jpg"
                                                    alt="Logo"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="testimonial">
                    <h5>PEOPLE LOVE US</h5>
                    <h2>You happy. We happy!</h2>

                    <section className="testimonials">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div
                                        id="customers-testimonials"
                                        className="owl-carousel"
                                    >
                                        <div className="item">
                                            <div className="shadow-effect">
                                                <img
                                                    className="img-circle"
                                                    src="https://www.banksathi.com/public/site/image/sanjay.jpg"
                                                    alt=""
                                                />
                                                <p>
                                                    I am already into sales of
                                                    Financial Products, What
                                                    made working as a BankSathi
                                                    advisor simple and
                                                    convenient is the variety of
                                                    financial products and
                                                    services they offer to the
                                                    customers. Because of this,
                                                    it got easy for me to create
                                                    leads and earn every time a
                                                    product’s sold.
                                                </p>
                                            </div>
                                            <h1>Sanjay Bhingi</h1>
                                            <h4>(DSA, PL & BL)</h4>
                                        </div>

                                        <div className="item">
                                            <div className="shadow-effect">
                                                <img
                                                    className="img-circle"
                                                    src="https://www.banksathi.com/public/site/image/sumant.jpg"
                                                    alt=""
                                                />
                                                <p>
                                                    I always wanted to start a
                                                    side hustle but struggled
                                                    because of the lack of time.
                                                    After becoming BankSathi
                                                    Advisor, I started earning
                                                    extra income without any
                                                    time restrictions or mental
                                                    pressure. I made Rs 1 Lacs
                                                    extra this month.
                                                </p>
                                            </div>
                                            <h1>Sumant Tapria</h1>
                                            <h4>(Chartered Accountant)</h4>
                                        </div>

                                        <div className="item">
                                            <div className="shadow-effect">
                                                <img
                                                    className="img-circle"
                                                    src="https://www.banksathi.com/public/site/image/devkinandan.jpg"
                                                    alt=""
                                                />
                                                <p>
                                                    I am happy to work as a
                                                    BankSathi Advisor. I can
                                                    work conveniently and it
                                                    doesn’t affect my other
                                                    work. The best thing is
                                                    there is no pressure of work
                                                    and I got to increase my
                                                    income comfortably.
                                                </p>
                                            </div>
                                            <h1>Devakinandan</h1>
                                            <h4>(E-Mitra Shop owner)</h4>
                                        </div>

                                        <div className="item">
                                            <div className="shadow-effect">
                                                <img
                                                    className="img-circle"
                                                    src="https://www.banksathi.com/public/site/image/ashish.jpg"
                                                    alt=""
                                                />
                                                <p>
                                                    Since I had zero knowledge
                                                    about financial products, I
                                                    was confused about starting
                                                    this business. But thanks to
                                                    the BankSathi team that they
                                                    trained me on each and every
                                                    product and guided me every
                                                    time it was required.
                                                </p>
                                            </div>
                                            <h1>Ashish</h1>
                                            <h4>(Self Employed)</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div> */}

                <div className="logoslide">
                    <div className="container">
                        <img
                            className=""
                            src="https://www.banksathi.com/public/site/image/logos1.png?id=121"
                        />
                    </div>
                </div>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="footlogo">
                                    <img
                                        src="https://www.banksathi.com/public/site/image/footer_logo.svg"
                                        alt="Image"
                                    />
                                    <p>
                                        Start Your Business with Zero Investment
                                        and Earn over ₹1,00,000 Every Month.
                                        Provide financial advice and products to
                                        the customers and get a fast payout
                                        every month.
                                    </p>
                                    <div className="social">
                                        <ul>
                                            <li>
                                                <a
                                                    href="https://www.facebook.com/banksathi/"
                                                    target="_blank"
                                                >
                                                    <i
                                                        className="fa fa-facebook"
                                                        aria-hidden="true"
                                                        title="facebook"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.instagram.com/banksathi/"
                                                    target="_blank"
                                                >
                                                    <i
                                                        className="fa fa-instagram"
                                                        aria-hidden="true"
                                                        title="Instagram"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.youtube.com/channel/UC1N838BJLYpmmG6iXTq9AOA"
                                                    target="_blank"
                                                >
                                                    <i
                                                        className="fa fa-youtube-play"
                                                        aria-hidden="true"
                                                        title="Youtube"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://in.linkedin.com/company/banksathi"
                                                    target="_blank"
                                                >
                                                    <i
                                                        className="fa fa-linkedin"
                                                        aria-hidden="true"
                                                        title="Linkedin"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://twitter.com/banksathi1"
                                                    target="_blank"
                                                >
                                                    <i
                                                        className="fa fa-twitter"
                                                        aria-hidden="true"
                                                        title="Twitter"
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-3 col-xs-12">
                                <div className="link">
                                    <h2>Important Links :</h2>
                                    <ul>
                                        <li>
                                            <a href="about_us.html">About us</a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://docs.google.com/forms/d/e/1FAIpQLSeDxyTWLELqrXEmz72cLW0u87MWAesdLy36fJxRApJBny8i2A/viewform?vc=0&c=0&w=1&flr=0"
                                                target="_blank"
                                            >
                                                Contact us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.banksathi.com/partner">
                                                Partners
                                            </a>
                                        </li>
                                        <li>
                                            <a href="privacy.html">
                                                Privacy policy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="terms.html">
                                                Terms of service
                                            </a>
                                        </li>
                                        <li>
                                            <a href="privacy.html?p=#refund">
                                                Refund & cancellation policy
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-5 col-sm-5 col-xs-12">
                                <div className="social">
                                    <h2>
                                        <b>BS FINTECH PRIVATE LIMITED :</b>
                                        <br />
                                        <span>
                                            {" "}
                                            (CIN: U72900KA2021PTC151652)
                                        </span>
                                    </h2>
                                    <p className="padd">
                                        First Floor, Plot No 3/1, Attic Smart
                                        Square Complex, Above 3M Care Care &
                                        LBB, 100 Feet Rd, Binnamangala, Stage 1,
                                        Indiranagar, Bengaluru, Karnataka -
                                        560038, India
                                    </p>
                                    <p className="pmai">
                                        {" "}
                                        <a href="mail:support@banksathi.com">
                                            <span
                                                className="__cf_email__"
                                                data-cfemail="ef9c9a9f9f809d9baf8d8e81849c8e9b8786c18c8082"
                                            >
                                                [email&#160;protected]
                                            </span>
                                        </a>
                                    </p>
                                    <p className="pcol">
                                        {" "}
                                        <a href="tel:+917412933933">
                                            {" "}
                                            +91 7412 933 933{" "}
                                        </a>{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

Index.propTypes = {};
Index.defaultProps = {};

export default Index;

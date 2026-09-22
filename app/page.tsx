export default function Home() {
  return (
    <>

		<div className="main-page-wrapper">

			{/* ===================================================
				Loading Transition
			==================================================== */}
			<section>
				<div id="preloader">
					<div id="ctn-preloader" className="ctn-preloader">
						<div className="animation-preloader">
							<div className="spinner"></div>
						</div>	
					</div>
				</div>
			</section>

			{/* ===================================================
				HEADER
			==================================================== */}
			<header className="theme-main-header">
				<div className="container">
					<div className="inner-wrapper">
						<div className="d-flex align-items-center">
							{/* LOGO */}
							<div className="logo mr-auto"><a href="/"><img src="/images/logo/logo.png" alt="" /></a></div>
							{/* Navigation Menu */}
							<nav className="navbar navbar-expand-lg">
								<div className="position-relative">
									<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
										<i className="fa fa-bars iconbar"></i>
									</button>
									<div className="collapse navbar-collapse" id="navbarSupportedContent">
										<ul className="navbar-nav mr-auto" id="theme-menu-list">
											<li className="nav-item">
												<a href="#home" className="nav-link">Home</a>
											</li>
											<li className="nav-item">
												<a href="#feature" className="nav-link">Featured</a>
											</li>
											<li className="nav-item">
												<a href="#product" className="nav-link">Product</a>
											</li>
											<li className="nav-item">
												<a href="#service" className="nav-link">Services</a>
											</li>
											<li className="nav-item">
												<a href="#team" className="nav-link">team</a>
											</li>
											<li className="nav-item">
												<a href="#client" className="nav-link">client</a>
											</li>
											<li className="nav-item dropdown-holder">
												<a href="#blog" className="nav-link">Blog</a>
												<ul className="sub-menu">
													<li><a href="/blog" className="nav-link">Blog Archive</a></li>
													<li><a href="/blog-details" className="nav-link">Blog details</a></li>
												</ul>
											</li>
											<li className="nav-item">
												<a href="#contact" className="nav-link">Contact</a>
											</li>
										</ul>
									</div>
								</div>{/* container */}
							</nav>{/* navigation */}
							<a href="#" className="theme-btn theme-btn-solid hvr-bounce-to-right">order Now</a>
						</div> {/* /.d-flex */}
					</div> {/* /.inner-wrapper */}
				</div> {/* /.container */}
			</header> {/* /.theme-main-header */}


			{/* ===================================================
				HERO SECTION
			==================================================== */}
			<div className="theme-hero-section" id="home">
				<img src="/images/home/shape.png" alt="" className="shape-one wow zoomIn animated" data-wow-delay="0.1s" />
				<div className="inner-wrapper">
					<div className="container">
						<h1 className="main-title wow fadeInUp animated" data-wow-delay="0.4s">build your <br />perfect body</h1>
						<p className="sub-title wow fadeInUp animated" data-wow-delay="0.9s">Best Supplement dolor sit amet, id nec mod amet tanta setu ocurreret stet <br /> laboramus cuusurequi te ipsum voluptat</p>
						<ul className="button-group">
							<li><a href="#contact" className="theme-btn theme-btn-solid hvr-bounce-to-right wow fadeInLeft animated" data-wow-delay="1.5s">contact us</a></li>

							<li><a href="#" className="theme-btn theme-btn-line hvr-bounce-to-right wow fadeInRight animated" data-wow-delay="1.5s">read more</a></li>
						</ul>
					</div> {/* /.container */}
				</div> {/* /.inner-wrapper */}
				<img src="/images/home/image1.png" alt="" className="shape-two wow zoomIn animated" data-wow-delay="0.1s" />
			</div> {/* /.theme-hero-section */}

				
			

			{/* ===================================================
				OUR FEATURE
			==================================================== */}
			<div className="our-feature section-spacing" id="feature">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<div className="row">
								<div className="col-lg-12 col-sm-6">
									<div className="single-feature-box mb-65">
										<div className="icon-box"><i className="flaticon-arm"></i></div>
										<h6 className="title">Calorie Build Up</h6>
										<p>Praesent vel rutrum purus. Nam vel dui eu risus duis dignissim dignissim. Suspen disse at eros tempus.</p>
									</div> {/* /.single-feature-box */}
								</div>
								<div className="col-lg-12 col-sm-6">
									<div className="single-feature-box">
										<div className="icon-box"><i className="flaticon-gym"></i></div>
										<h6 className="title">Fit The Body</h6>
										<p>Praesent vel rutrum purus. Nam vel dui eu risus duis dignissim dignissim. Suspen disse at eros tempus.</p>
									</div> {/* /.single-feature-box */}
								</div>
							</div>
						</div> {/* /.col */}
						<div className="col-lg-6">
							<div className="img-box" data-aos="zoom-in">
								<img src="/images/home/circle.svg" alt="" />
								<img src="/images/home/image2.png" alt="" className="product" />
							</div>
						</div>
						<div className="col-lg-3">
							<div className="row">
								<div className="col-lg-12 col-sm-6">
									<div className="single-feature-box mb-65">
										<div className="icon-box"><i className="flaticon-power"></i></div>
										<h6 className="title">Energy Grow Up</h6>
										<p>Praesent vel rutrum purus. Nam vel dui eu risus duis dignissim dignissim. Suspen disse at eros tempus.</p>
									</div> {/* /.single-feature-box */}
								</div>
								<div className="col-lg-12 col-sm-6">
									<div className="single-feature-box">
										<div className="icon-box"><i className="flaticon-clock"></i></div>
										<h6 className="title">Regular Routine</h6>
										<p>Praesent vel rutrum purus. Nam vel dui eu risus duis dignissim dignissim. Suspen disse at eros tempus.</p>
									</div> {/* /.single-feature-box */}
								</div>
							</div>
						</div> {/* /.col */}
					</div> {/* /.row */}
				</div> {/* /.container */}
			</div> {/* /.our-feature */}


			{/* ===================================================
				OFFER BANNER
			==================================================== */}
			<div className="section-spacing">
				<div className="offer-banner">
					<div className="image-shape"></div>
					<div className="container">
						<div className="row">
							<div className="col-xl-7 ml-auto">
								<div className="text">
									<h2 className="offer-title" data-aos="fade-up"><span>56%</span><sub>off</sub> <br />onetime offer</h2>
									<p data-aos="fade-up" data-aos-delay="200">Best Supplement dolor sit amet, id nec mod amet tanta setu ocurreret stet laboramus cuusurequi te ipsum</p>
									<div data-aos="fade-up" data-aos-delay="300"><a href="#" className="theme-btn theme-btn-line hvr-bounce-to-right">Buy now</a></div>
								</div> {/* /.text */}
							</div> {/* /.col- */}
						</div> {/* /.row */}
					</div> {/* /.container */}
					<div className="text-center">
						<div className="product-img" data-aos="fade-left" data-aos-delay="200">
							<img src="/images/home/image4.png" alt="" />
							<div className="price"><sup>$</sup>89</div>
						</div>
					</div>
				</div> {/* /.offer-banner */}
			</div>



			{/* ===================================================
				OUR PRODUCT
			==================================================== */}
			<div className="section-spacing our-product" id="product">
				<div className="container">
					<div className="theme-title text-center"><h2>Our product</h2></div>

					<div className="row">
						<div className="col-lg-4 col-sm-6">
							<div className="single-product">
								<div className="product-info">
									<div className="product-img">
										<img src="/images/product/pro-img1.png" alt="" />
										<div className="badge-tag">New</div>
									</div>
									<h6 className="name">vaxin Protein <span>(15% off)</span></h6>
								</div> {/* /.product-info */}
								<ul className="button-group clearfix">
									<li><a href="#" className="price-button">$19.99 <del>$29.99</del></a></li>
									<li><a href="#" className="order-button">Order now</a></li>
								</ul>
							</div> {/* /.single-product */}
						</div> {/* /.col- */}
						<div className="col-lg-4 col-sm-6">
							<div className="single-product">
								<div className="product-info">
									<div className="product-img">
										<img src="/images/product/pro-img2.png" alt="" />
									</div>
									<h6 className="name">keto meal fill</h6>
								</div> {/* /.product-info */}
								<ul className="button-group clearfix">
									<li><a href="#" className="price-button">$15.99</a></li>
									<li><a href="#" className="order-button">Order now</a></li>
								</ul>
							</div> {/* /.single-product */}
						</div> {/* /.col- */}
						<div className="col-lg-4 col-sm-6">
							<div className="single-product">
								<div className="product-info">
									<div className="product-img">
										<img src="/images/product/pro-img3.png" alt="" />
									</div>
									<h6 className="name">vaxin Protein <span>(15% off)</span></h6>
								</div> {/* /.product-info */}
								<ul className="button-group clearfix">
									<li><a href="#" className="price-button">$19.99 <del>$29.99</del></a></li>
									<li><a href="#" className="order-button">Order now</a></li>
								</ul>
							</div> {/* /.single-product */}
						</div> {/* /.col- */}
						<div className="col-lg-4 col-sm-6">
							<div className="single-product">
								<div className="product-info">
									<div className="product-img">
										<img src="/images/product/pro-img4.png" alt="" />
									</div>
									<h6 className="name">Oxertd Protein <span>(30% off)</span></h6>
								</div> {/* /.product-info */}
								<ul className="button-group clearfix">
									<li><a href="#" className="price-button">$17.99 <del>$33.99</del></a></li>
									<li><a href="#" className="order-button">Order now</a></li>
								</ul>
							</div> {/* /.single-product */}
						</div> {/* /.col- */}
						<div className="col-lg-4 col-sm-6">
							<div className="single-product">
								<div className="product-info">
									<div className="product-img">
										<img src="/images/product/pro-img5.png" alt="" />
										<div className="badge-tag">New</div>
									</div>
									<h6 className="name">protein power</h6>
								</div> {/* /.product-info */}
								<ul className="button-group clearfix">
									<li><a href="#" className="price-button">$22.99</a></li>
									<li><a href="#" className="order-button">Order now</a></li>
								</ul>
							</div> {/* /.single-product */}
						</div> {/* /.col- */}
						<div className="col-lg-4 col-sm-6">
							<div className="single-product">
								<div className="product-info">
									<div className="product-img">
										<img src="/images/product/pro-img6.png" alt="" />
										<div className="badge-tag">New</div>
									</div>
									<h6 className="name">whey blend  <span>(15% off)</span></h6>
								</div> {/* /.product-info */}
								<ul className="button-group clearfix">
									<li><a href="#" className="price-button">$19.99 <del>$29.99</del></a></li>
									<li><a href="#" className="order-button">Order now</a></li>
								</ul>
							</div> {/* /.single-product */}
						</div> {/* /.col- */}
					</div> {/* /.row */}
				</div> {/* /.container */}
			</div> {/* /.our-product */}



			{/* ===================================================
				OUR SERVICE
			==================================================== */}
			<div className="section-spacing" id="service">
				<div className="our-service">
					<div className="container">
						<div className="theme-title text-center"><h2>Our services</h2></div>

						<div className="row">
							<div className="col-lg-4 col-sm-6">
								<div className="single-service">
									<div className="count">01</div>
									<h6>100% TRANSLATABLE</h6>
									<p>Metus lectus nonummy maecendolor phasellus torquent eget nunc </p>
								</div> {/* /.single-service */}
							</div> {/* /.col- */}
							<div className="col-lg-4 col-sm-6">
								<div className="single-service">
									<div className="count">02</div>
									<h6>Calorie Build Up</h6>
									<p>Metus lectus nonummy maecendolor phasellus torquent eget nunc </p>
								</div> {/* /.single-service */}
							</div> {/* /.col- */}
							<div className="col-lg-4 col-sm-6">
								<div className="single-service">
									<div className="count">03</div>
									<h6>Fit The Body</h6>
									<p>Metus lectus nonummy maecendolor phasellus torquent eget nunc </p>
								</div> {/* /.single-service */}
							</div> {/* /.col- */}
							<div className="col-lg-4 col-sm-6">
								<div className="single-service">
									<div className="count">04</div>
									<h6>Energy Grow Up</h6>
									<p>Metus lectus nonummy maecendolor phasellus torquent eget nunc </p>
								</div> {/* /.single-service */}
							</div> {/* /.col- */}
							<div className="col-lg-4 col-sm-6">
								<div className="single-service">
									<div className="count">05</div>
									<h6>Regular Routine</h6>
									<p>Metus lectus nonummy maecendolor phasellus torquent eget nunc </p>
								</div> {/* /.single-service */}
							</div> {/* /.col- */}
							<div className="col-lg-4 col-sm-6">
								<div className="single-service">
									<div className="count">06</div>
									<h6>100% TRANSLATABLE</h6>
									<p>Metus lectus nonummy maecendolor phasellus torquent eget nunc </p>
								</div> {/* /.single-service */}
							</div> {/* /.col- */}
						</div> {/* /.row */}
					</div> {/* /.container */}
				</div> {/* /.our-service */}
			</div>



			{/* ===================================================
				Supplement Packages
			==================================================== */}
			<div className="section-spacing Supplement-Packages">
				<div className="container">
					<div className="theme-title text-center"><h2>Supplement Packages</h2></div>

					<div className="packeg-slider">
						<div className="item">
							<div className="single-pack" data-aos="fade-up">
								<img src="/images/home/image6.png" alt="" className="pack-img" />
								<h4 className="pack-name">Basic</h4>
								<h6 className="price-tag">$19.99</h6>
								<ul>
									<li>1 Person User</li>
									<li>30 MG Per Capsule</li>
									<li>60 Capsules Per Bottle</li>
								</ul>
								<a href="#" className="theme-btn theme-btn-line hvr-bounce-to-right">Order Now</a>
							</div> {/* /.single-pack */}
						</div> {/* /.col- */}
						<div className="item">
							<div className="single-pack" data-aos="fade-up">
								<img src="/images/home/image7.png" alt="" className="pack-img" />
								<h4 className="pack-name">Standard</h4>
								<h6 className="price-tag">$48.99</h6>
								<ul>
									<li>3 Person User</li>
									<li>150 MG Per Capsule</li>
									<li>80 Capsules Per Bottle</li>
								</ul>
								<a href="#" className="theme-btn theme-btn-line hvr-bounce-to-right">Order Now</a>
							</div> {/* /.single-pack */}
						</div> {/* /.col- */}
						<div className="item">
							<div className="single-pack" data-aos="fade-up">
								<img src="/images/home/image8.png" alt="" className="pack-img" />
								<h4 className="pack-name">Premium</h4>
								<h6 className="price-tag">$99.99</h6>
								<ul>
									<li>14 Person User</li>
									<li>230 MG Per Capsule</li>
									<li>160 Capsules Per Bottle</li>
								</ul>
								<a href="#" className="theme-btn theme-btn-line hvr-bounce-to-right">Order Now</a>
							</div> {/* /.single-pack */}
						</div> {/* /.col- */}
					</div> {/* /.row */}
				</div> {/* /.container */}
			</div> {/* /.Supplement-Packages */}


			{/* ===================================================
				TEAM MEMBER
			==================================================== */}
			<div className="section-spacing our-team" id="team">
				<div className="container">
					<div className="theme-title text-center"><h2>our team member</h2></div>

					<div className="main-wrapper">
			            {/* MasterSlider Main */}
			            <div id="team-slider" className="master-slider ms-skin-default" >
			                <div className="ms-slide" data-delay="3" data-fill-mode="fill" >
			                    <img src="/images/blank.gif" alt="" title="" data-src="/images/home/image9.jpg" />
			                    <div className="ms-info">
			                        <h3>Jhone Michale</h3>
			                        <p>FITNESS AND DEFENSE EXPERT</p>
			                    </div>
			                </div>
			                <div className="ms-slide" data-delay="3" data-fill-mode="fill" >
			                    <img src="/images/blank.gif" alt="" title="" data-src="/images/home/image10.jpg" />
			                    <div className="ms-info">
			                        <h3>Jhone Michale</h3>
			                        <p>FITNESS AND DEFENSE EXPERT</p>
			                    </div>
			                </div>
			                <div className="ms-slide" data-delay="3" data-fill-mode="fill" >
			                    <img src="/images/blank.gif" alt="" title="" data-src="/images/home/image11.jpg" />
			                    <div className="ms-info">
			                        <h3>Jhone Michale</h3>
			                        <p>FITNESS AND DEFENSE EXPERT</p>
			                    </div>
			                </div>
			            </div>{/* END team-slider Main */}
			        </div>
				</div>
			</div> {/* /.our-team */}


			{/* ===================================================
				TESTIMONIAL
			==================================================== */}
			<div className="section-spacing" id="client">
				<div className="testimonial-section">
					<div className="container">
						<div className="theme-title text-center"><h2>Client voice</h2></div>

						<div className="client-slider">
							<div className="item">
								<div className="single-block">
									<img src="/images/home/image12.jpg" alt="" />
									<h6>Donar max</h6>
									<span>CEO at Google</span>
									<p>Metus lectus nonummy mae haosellus torquent eget nunc </p>
									<ul>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
									</ul>
								</div> {/* /.single-block */}
							</div> {/* /.item */}
							<div className="item">
								<div className="single-block">
									<img src="/images/home/image13.jpg" alt="" />
									<h6>Donar max</h6>
									<span>CEO at Picaso</span>
									<p>Metus lectus nonummy mae haosellus torquent eget nunc </p>
									<ul>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
									</ul>
								</div> {/* /.single-block */}
							</div> {/* /.item */}
							<div className="item">
								<div className="single-block">
									<img src="/images/home/image14.jpg" alt="" />
									<h6>Donar max</h6>
									<span>CEO at Google</span>
									<p>Metus lectus nonummy mae haosellus torquent eget nunc </p>
									<ul>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
									</ul>
								</div> {/* /.single-block */}
							</div> {/* /.item */}
							<div className="item">
								<div className="single-block">
									<img src="/images/home/image12.jpg" alt="" />
									<h6>Donar max</h6>
									<span>CEO at Google</span>
									<p>Metus lectus nonummy mae haosellus torquent eget nunc </p>
									<ul>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
									</ul>
								</div> {/* /.single-block */}
							</div> {/* /.item */}
							<div className="item">
								<div className="single-block">
									<img src="/images/home/image13.jpg" alt="" />
									<h6>Donar max</h6>
									<span>CEO at Picaso</span>
									<p>Metus lectus nonummy mae haosellus torquent eget nunc </p>
									<ul>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
									</ul>
								</div> {/* /.single-block */}
							</div> {/* /.item */}
							<div className="item">
								<div className="single-block">
									<img src="/images/home/image14.jpg" alt="" />
									<h6>Donar max</h6>
									<span>CEO at Google</span>
									<p>Metus lectus nonummy mae haosellus torquent eget nunc </p>
									<ul>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
									</ul>
								</div> {/* /.single-block */}
							</div> {/* /.item */}
							<div className="item">
								<div className="single-block">
									<img src="/images/home/image14.jpg" alt="" />
									<h6>Donar max</h6>
									<span>CEO at Google</span>
									<p>Metus lectus nonummy mae haosellus torquent eget nunc </p>
									<ul>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
									</ul>
								</div> {/* /.single-block */}
							</div> {/* /.item */}
						</div>
					</div> {/* /.container */}
				</div> {/* /.testimonial-section */}
			</div>


			{/* ===================================================
				BLOG
			==================================================== */}
			<div className="section-spacing our-blog" id="blog">
				<div className="container">
					<div className="theme-title text-center"><h2>blog & tips</h2></div>

					<div className="blog-slider">
						<div className="item">
							<div className="single-blog-post">
								<div className="img-box">
									<img src="/images/blog/image1.jpg" alt="" />
									<div className="icon"><i className="flaticon-cinema"></i></div>
								</div> {/* /.img-box */}
								<div className="post">
									<h6 className="title"><a href="/blog-details">pharetra dui urna odio a nibh cras bibendum nonrat vitae </a></h6>
									<div className="date">02 november, 2018</div>
								</div> {/* /.post */}
							</div> {/* /.single-blog-post */}
						</div> {/* /.col- */}
						<div className="item">
							<div className="single-blog-post">
								<div className="img-box">
									<img src="/images/blog/image2.jpg" alt="" />
									<div className="icon"><i className="flaticon-radio"></i></div>
								</div> {/* /.img-box */}
								<div className="post">
									<h6 className="title"><a href="/blog-details">pharetra dui urna odio a nibh cras bibendum nonrat vitae </a></h6>
									<div className="date">01 november, 2018</div>
								</div> {/* /.post */}
							</div> {/* /.single-blog-post */}
						</div> {/* /.col- */}
						<div className="item">
							<div className="single-blog-post">
								<div className="img-box">
									<img src="/images/blog/image3.jpg" alt="" />
									<div className="icon"><i className="flaticon-art"></i></div>
								</div> {/* /.img-box */}
								<div className="post">
									<h6 className="title"><a href="/blog-details">pharetra dui urna odio a nibh cras bibendum nonrat vitae </a></h6>
									<div className="date">28 October, 2018</div>
								</div> {/* /.post */}
							</div> {/* /.single-blog-post */}
						</div> {/* /.col- */}
					</div> {/* /.blog-slider */}
				</div> {/* /.container */}
			</div> {/* /.our-blog */}



			{/* ===================================================
				CONTACT
			==================================================== */}
			<div className="section-spacing contact-us" id="contact">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="contact-form-wrapper">
								<div className="theme-title"><h2>get in touch</h2></div>

								<form className="form mt-50" id="contact-form" action="inc/contact.php" data-toggle="validator">
				                	<div className="messages"></div>
				                	<div className="controls">
				                		<div className="row">
					                    	<div className="col-12">
					                    		<div className="form-group">
							                        <input id="form_sub" type="text" name="name" placeholder="Your Name" required data-error="Name is required." />
							                        <div className="help-block with-errors"></div>
							                    </div>
					                    	</div>
					                    	<div className="col-12">
					                    		<div className="form-group">
							                        <input id="form_email" type="email" name="email" placeholder="Your Email" required="required" data-error="Valid email is required." />
							                        <div className="help-block with-errors"></div>
							                    </div>
					                    	</div>
					                    </div>
				                		<div className="form-group">
					                    	<textarea id="form_message" name="message" className="form_message" placeholder="Type Your Message" required="required" data-error="Please,leave us a message."></textarea>
					                    	<div className="help-block with-errors"></div>
					                    </div>
					                    <button className="theme-btn theme-btn-solid hvr-bounce-to-right">Send Message</button>
				                	</div> {/* /.controls */}
				              	</form>
							</div> {/* /.contact-form-wrapper */}
						</div>
					</div>
				</div> {/* /.container */}
			</div> {/* /.contact-us */}


			{/* 
			=============================================
				SUBSCRIBE BANNER
			============================================== 
			*/}
			<div className="subscribe-banner">
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<h2>Subscribe for latest update</h2>
							<form action="#">
								<input type="email" placeholder="Enter Email Address" />
								<button><i className="flaticon-origami"></i></button>
							</form>
						</div>
					</div>
				</div> {/* /.container */}
			</div> {/* /.subscribe-banner */}


			{/* 
			=============================================
				FOOTER
			============================================== 
			*/}
			<footer className="theme-footer">
				<div className="container">
					<div className="top-footer">
						<div className="row">
							<div className="col-lg-3 col-sm-6 footer-about-widget">
								<div className="logo"><a href="/"><img src="/images/logo/logof.png" alt="" /></a></div>
								<p>Cursus sed, hic ac pellentesque aenean, eget pellentesquesent, erat rutrum sed quisque nulla </p>
								<ul className="social-icon">
						       		<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
						       		<li><a href="#"><i className="fa fa-google" aria-hidden="true"></i></a></li>
						       		<li><a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
						       		<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
						       	</ul>
							</div> {/* /.footer-about-widget */}

							<div className="col-lg-2 col-sm-6 footer-list">
								<h5 className="footer-title">QUICK LINKS</h5>
								<ul>
									<li><a href="#">Products</a></li>
									<li><a href="#">Faq</a></li>
									<li><a href="#">Team</a></li>
									<li><a href="#">Client</a></li>
									<li><a href="#">Contact Us</a></li>
								</ul>
							</div> {/* /.footer-list */}

							<div className="col-lg-3 col-sm-6 footer-recent-post">
								<h5 className="footer-title">Recent Post</h5>
								<ul>
									<li>
										<a href="#">Till wanted by theam govern they survive as soldiers.</a>
										<div className="date">25 June 2019</div>
									</li>
									<li>
										<a href="#">If you need a crown or lorem an implant you will pay it gap</a>
										<div className="date">22 June 2019</div>
									</li>
								</ul>
							</div> {/* /.footer-recent-post */}
							<div className="col-xl-3 col-lg-4 col-sm-6 footer-contact ml-auto">
								<h5 className="footer-title">Contact</h5>
								<ul>
									<li>
										<span>Address</span>
										123, New Lenox, Chicago, IL 60606 
									</li>
									<li>
										<span>Open Hours</span>
										8.00-18.00 Mon-Sat  
									</li>
									<li>
										<span>Phone</span>
										569 - 489 - 8965, 487 - 896 - 7589
									</li>
								</ul>
							</div> {/* /.footer-contact */}
						</div> {/* /.row */}
					</div> {/* /.top-footer */}
				</div> {/* /.container */}
				<div className="bottom-footer">
					&copy; Copyright 2019. All Rights are Reserved.
				</div>
			</footer> {/* /.theme-footer */}



			
			
			{/* Scroll Top Button */}
			<button className="scroll-top">
				<i className="fa fa-angle-up" aria-hidden="true"></i>
			</button>


		
		</div> {/* /.main-page-wrapper */}
	
    </>
  );
}

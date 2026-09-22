export default function BlogPage() {
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
												<a href="/index.html#home" className="nav-link">Home</a>
											</li>
											<li className="nav-item">
												<a href="/index.html#feature" className="nav-link">Featured</a>
											</li>
											<li className="nav-item">
												<a href="/index.html#product" className="nav-link">Product</a>
											</li>
											<li className="nav-item">
												<a href="/index.html#service" className="nav-link">Services</a>
											</li>
											<li className="nav-item">
												<a href="/index.html#team" className="nav-link">team</a>
											</li>
											<li className="nav-item">
												<a href="/index.html#client" className="nav-link">client</a>
											</li>
											<li className="nav-item dropdown-holder">
												<a href="/index.html#blog" className="nav-link active">Blog</a>
												<ul className="sub-menu">
													<li><a href="/blog" className="nav-link">Blog Archive</a></li>
													<li><a href="/blog-details" className="nav-link">Blog details</a></li>
												</ul>
											</li>
											<li className="nav-item">
												<a href="/index.html#contact" className="nav-link">Contact</a>
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
				INNER BANNER
			==================================================== */}
			<div className="inner-banner">
				<div className="container">
					<h2>Blog Achives</h2>
					<ul>
						<li><a href="#">Home</a></li>
						<li>-</li>
						<li>Blog</li>
					</ul>
				</div>
			</div>

				
			

			{/* ===================================================
				OUR BLOG
			==================================================== */}
			<div className="our-blog blog-list section-spacing">
				<div className="container">
					<div className="row">
						<div className="col-xl-9 col-lg-8 col-12">
							<div className="single-blog-post">
								<div className="img-box">
									<img src="/images/blog/image4.jpg" alt="" />
									<div className="icon"><i className="flaticon-cinema"></i></div>
								</div> {/* /.img-box */}
								<div className="post">
									<div className="date">02 november, 2018</div>
									<h6 className="title"><a href="/blog-details">pharetra dui urna odio a nibh cras bibendum nonrat vitae </a></h6>
									<p>Lorem ipsum dolor sit amet, vel saperet pericula similique ut, movet audire ea nam. Congue detracto adversarium no per, ea voluptaria voluptatum sit, ea nec illud vivendum lucilius. Ei nullam legimus mea, qui molestiae contentiones ad, unum electram definitiones ex vis.</p>
									<a href="/blog-details" className="theme-btn theme-btn-line hvr-bounce-to-right">read more</a>
								</div> {/* /.post */}
							</div> {/* /.single-blog-post */}

							<div className="single-blog-post">
								<div className="img-box">
									<img src="/images/blog/image5.jpg" alt="" />
									<div className="icon"><i className="flaticon-radio"></i></div>
								</div> {/* /.img-box */}
								<div className="post">
									<div className="date">01 november, 2018</div>
									<h6 className="title"><a href="/blog-details">pharetra dui urna odio a nibh cras bibendum nonrat vitae </a></h6>
									<p>Lorem ipsum dolor sit amet, vel saperet pericula similique ut, movet audire ea nam. Congue detracto adversarium no per, ea voluptaria voluptatum sit, ea nec illud vivendum lucilius. Ei nullam legimus mea, qui molestiae contentiones ad, unum electram definitiones ex vis.</p>
									<a href="/blog-details" className="theme-btn theme-btn-line hvr-bounce-to-right">read more</a>
								</div> {/* /.post */}
							</div> {/* /.single-blog-post */}

							<div className="single-blog-post">
								<div className="img-box">
									<img src="/images/blog/image6.jpg" alt="" />
									<div className="icon"><i className="flaticon-art"></i></div>
								</div> {/* /.img-box */}
								<div className="post">
									<div className="date">28 October, 2018</div>
									<h6 className="title"><a href="/blog-details">pharetra dui urna odio a nibh cras bibendum nonrat vitae </a></h6>
									<p>Lorem ipsum dolor sit amet, vel saperet pericula similique ut, movet audire ea nam. Congue detracto adversarium no per, ea voluptaria voluptatum sit, ea nec illud vivendum lucilius. Ei nullam legimus mea, qui molestiae contentiones ad, unum electram definitiones ex vis.</p>
									<a href="/blog-details" className="theme-btn theme-btn-line hvr-bounce-to-right">read more</a>
								</div> {/* /.post */}
							</div> {/* /.single-blog-post */}


							<div className="theme-pagination">
								<ul>
									<li className="active"><a href="#">01</a></li>
									<li><a href="#">02</a></li>
									<li><a href="#">03</a></li>
									<li><a href="#">Next</a></li>
								</ul>
							</div> {/* /.theme-pagination */}
						</div> {/* /.col- */}
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-12 blog-sidebar">
							<div className="sidebar-box sidebar-search">
								<form action="#">
									<input type="text" placeholder="Search.." />
									<button><i className="fa fa-search" aria-hidden="true"></i></button>
								</form>
							</div> {/* /.sidebar-search */}
							<div className="sidebar-box blog-categories">
								<h3>Categories</h3>
								<ul>
									<li><a href="#">Calorie Build <span>(14)</span></a></li>
									<li><a href="#">Fit The Body <span>(04)</span></a></li>
									<li><a href="#">Energy Grow Up <span>(12)</span></a></li>
									<li><a href="#">Regular Routine <span>(09)</span></a></li>
									<li><a href="#">Others <span>(05)</span></a></li>
								</ul>
							</div> {/* /.blog-categories */}
							<div className="sidebar-box sidebar-recent-post">
								<h3>Recent News</h3>
								<ul>
									<li>
										<a href="/blog-details">Till wanted by theam govern they survive as soldiers.</a>
										<span>12 March, 2019</span>
									</li>
									<li>
										<a href="/blog-details">If you need a crown or lorem an implant you will pay it gap.</a>
										<span>11 March, 2019</span>
									</li>
									<li>
										<a href="/blog-details">Praesent vel rutrum purus. Nam vel dui eu risus.</a>
										<span>10 March, 2019</span>
									</li>
								</ul>
							</div> {/* /.sidebar-recent-post */}
							<div className="sidebar-box blog-categories">
								<h3>Archives</h3>
								<ul>
									<li><a href="#">January 2018</a></li>
									<li><a href="#">February 2018</a></li>
									<li><a href="#">March 2018</a></li>
									<li><a href="#">April 2018</a></li>
									<li><a href="#">May 2018</a></li>
								</ul>
							</div> {/* /.blog-categories */}

							<div className="sidebar-keyword">
								<h3>Keyword</h3>
								<ul className="clearfix">
									<li><a href="#">Calorie</a></li>
									<li><a href="#">Energy</a></li>
									<li><a href="#">Routine</a></li>
									<li><a href="#">Body</a></li>
									<li><a href="#">protein</a></li>
								</ul>
							</div> {/* /.sidebar-keyword */}
						</div> {/* /.blog-sidebar */}
					</div> {/* /.row */}
				</div> {/* /.container */}
			</div> {/* /.our-blog */}




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

export default function BlogDetailsPage() {
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
					<h2>Blog Details Post</h2>
					<ul>
						<li><a href="#">Home</a></li>
						<li>-</li>
						<li>Blog Details</li>
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
							<div className="blog-details-main-content">
								<div className="single-blog-list-item single-blog-post">
										<div className="img-holder"><img src="/images/blog/image5.jpg" alt="" /></div>
										<div className="post-data post">
											<div className="date">02 november, 2018</div>
											<h3 className="title">pharetra dui urna odio a nibh cras bibendum nonrat vitae</h3>
											<p>Lorem ipsum dolor sit amet, cum ull invidunt. Nonumy santus ea mel. Verear scriptorem scribentur per in the no into iu malis utamu sit dei dolor tation. De eros fegi viris nonumy oporteat.</p>
											<p>Lorem ipsum dolor sit amet, vel saperet pericula similique ut, movet audire ea nam. Congue detracto adversarium no per, ea voluptaria voluptatum sit, ea nec illud vivendum lucilius. Ei nullam legimus mea, qui molestiae contentiones ad, unum electram definitiones ex vis. Pri ea elitr affert. Duo fugit option docendi cu, quaeque disputationi has ea, id atqui iuvaret vis.</p>
											<blockquote>
												<p>Lorem ipsum dolor sit amet, vel saperet pericul similiq ut, movet audire ea nam. Congue detracto adversarium no per voluptaria volptatum sit ea voluptaria nullam vls.</p>
											</blockquote>
											<p>Sit modo deserunt sapientem at, ut wisi ludus periculis quo. Inermis legendos aliquando ei quo, eos adhuc ignota fierent ut. Te sed decore detracto platonem, ea quis vocent vel. Nam eu aliquam denique philosophia, conceptam democritum an his. At aliquid vocibus definiebas sit quality checker.</p>
											<div className="tag-section d-flex justify-content-between">
												<ul className="tag">
													<li>TAG :</li>
													<li><a href="#">Health,</a></li>
													<li><a href="#">Body</a></li>
												</ul>
												<ul className="social-icon">
													<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
													<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
													<li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
													<li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
												</ul>
											</div>
										</div> {/* /.post-data */}
									</div> {/* /.single-blog-list-item */}
									

									<div className="comment-option">
										<h2>2 Comments</h2>
										<div className="comment-box">
											<div className="single-comment d-flex justify-content-between">
												<img src="/images/blog/usimg1.jpg" alt="" />
												<div className="comment">
													<h6>Susan Bender</h6>
													<span>March 20, 2019 at 8:31 pm</span>
													<p>It has survived not only five centurie, but also leap into typestting check remaining sei essentially simply amet text. </p>
													<a href="#" className="reply tran3s">REPLY</a>
												</div> {/* /.comment */}
											</div> {/* /.single-comment */}
											<div className="single-comment reply-comment d-flex justify-content-between">
												<img src="/images/blog/usimg2.jpg" alt="" />
												<div className="comment">
													<h6>John Greve</h6>
													<span>March 25, 2019 at 8:31 pm</span>
													<p>It has survived not only five centurie, but also leap into typesetting remaining sei essentially text. </p>
												</div> {/* /.comment */}
											</div> {/* /.single-comment */}
											<div className="single-comment d-flex justify-content-between">
												<img src="/images/blog/usimg3.jpg" alt="" />
												<div className="comment">
													<h6>Deidra Moore</h6>
													<span>April 03, 2019 at 8:31 pm</span>
													<p>It has survived not only five centurie, but also leap into typestting check remaining sei essentially simply amet text. </p>
													<a href="#" className="reply tran3s">REPLY</a>
												</div> {/* /.comment */}
											</div> {/* /.single-comment */}
										</div> {/* /.comment-box */}
									</div> {/* /.comment-option */}

									<div className="leave-reply">
										<h2>Leave A Reply</h2>
										<p>Sing in to post your comment or singup if you dont have any account.</p>
										<div className="reply-form">
											<form action="#" className="form-styl-one">
												<div className="row">
													<div className="col-sm-6">
														<input type="text" placeholder="Your Name" />
													</div>
													<div className="col-sm-6">
														<input type="email" placeholder="Your Email" />
													</div>
												</div>
												<textarea placeholder="Your Message"></textarea>
												<button className="theme-btn theme-btn-solid hvr-bounce-to-right">Post Comment</button>
											</form>
										</div> {/* /.reply-form */}
									</div> {/* /.leave-reply */}
							</div>
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
										<a href="#">Till wanted by theam govern they survive as soldiers.</a>
										<span>12 March, 2019</span>
									</li>
									<li>
										<a href="#">If you need a crown or lorem an implant you will pay it gap.</a>
										<span>11 March, 2019</span>
									</li>
									<li>
										<a href="#">Praesent vel rutrum purus. Nam vel dui eu risus.</a>
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

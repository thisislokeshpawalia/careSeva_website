import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as ArrowRight, a as ShieldCheck, c as Phone, d as FileHeart, f as Eye, g as Baby, h as Bone, i as Smile, l as MapPin, m as Brain, n as Stethoscope, o as Search, p as CalendarCheck, r as Star, s as Play, t as Timer, u as Heart, v as Apple, y as Activity } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-IrEdf_CD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver((entries) => {
			if (entries.some((e) => e.isIntersecting)) {
				setShown(true);
				obs.disconnect();
			}
		}, {
			threshold: .15,
			rootMargin: "0px 0px -60px 0px"
		});
		obs.observe(el);
		return () => obs.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: `reveal ${shown ? "reveal-in" : ""} ${className}`,
		children
	});
}
var hero_hospital_default = "/assets/hero-hospital-DvgsPoZS.jpg";
var app_mockup_default = "/assets/app-mockup-DfdwSrtq.jpg";
var card_appointments_default = "/assets/card-appointments-TGJ_APCb.jpg";
var card_queue_default = "/assets/card-queue-Ct011o7d.jpg";
var card_records_default = "/assets/card-records-DyW1CGS6.jpg";
var offerings = [
	{
		title: "Book Appointments",
		copy: "Find hospitals and book instantly",
		image: card_appointments_default,
		icon: CalendarCheck
	},
	{
		title: "Live Queue Tracking",
		copy: "Never wait in line blindly",
		image: card_queue_default,
		icon: Timer
	},
	{
		title: "Digital Records",
		copy: "Your health history in your pocket",
		image: card_records_default,
		icon: FileHeart
	}
];
var specialties = [
	{
		name: "General Physician",
		icon: Stethoscope
	},
	{
		name: "Cardiology",
		icon: Heart
	},
	{
		name: "Neurology",
		icon: Brain
	},
	{
		name: "Pediatrics",
		icon: Baby
	},
	{
		name: "Orthopedics",
		icon: Bone
	},
	{
		name: "Ophthalmology",
		icon: Eye
	},
	{
		name: "Dentistry",
		icon: Smile
	},
	{
		name: "Diagnostics",
		icon: Activity
	}
];
var stats = [
	{
		value: "2M+",
		label: "Patients served"
	},
	{
		value: "6,400+",
		label: "Verified hospitals"
	},
	{
		value: "40+",
		label: "Cities live"
	},
	{
		value: "18 min",
		label: "Avg. wait saved"
	}
];
var steps = [
	{
		step: "01",
		title: "Search near you",
		copy: "Pick your locality and search hospitals, clinics or a specialty."
	},
	{
		step: "02",
		title: "Compare & book",
		copy: "See real ratings, fees and live queue length before you confirm."
	},
	{
		step: "03",
		title: "Walk in on time",
		copy: "Track your token live and reach exactly when your turn is near."
	}
];
var hospitals = [
	{
		name: "City Care Multispeciality",
		area: "Saket, Delhi",
		rating: "4.8",
		wait: "12 min wait",
		image: card_appointments_default,
		tags: ["Cardiology", "24x7 ER"]
	},
	{
		name: "Sunrise Family Clinic",
		area: "Andheri West, Mumbai",
		rating: "4.6",
		wait: "5 min wait",
		image: card_queue_default,
		tags: ["General", "Pediatrics"]
	},
	{
		name: "Lotus Health Institute",
		area: "Indiranagar, Bengaluru",
		rating: "4.9",
		wait: "20 min wait",
		image: card_records_default,
		tags: ["Ortho", "Diagnostics"]
	}
];
var localities = [
	{
		city: "Delhi NCR",
		count: "1,240 hospitals"
	},
	{
		city: "Mumbai",
		count: "980 hospitals"
	},
	{
		city: "Bengaluru",
		count: "870 hospitals"
	},
	{
		city: "Hyderabad",
		count: "640 hospitals"
	},
	{
		city: "Chennai",
		count: "590 hospitals"
	},
	{
		city: "Pune",
		count: "510 hospitals"
	},
	{
		city: "Kolkata",
		count: "480 hospitals"
	},
	{
		city: "Ahmedabad",
		count: "410 hospitals"
	},
	{
		city: "Jaipur",
		count: "330 hospitals"
	},
	{
		city: "Lucknow",
		count: "290 hospitals"
	},
	{
		city: "Kochi",
		count: "220 hospitals"
	},
	{
		city: "Indore",
		count: "180 hospitals"
	}
];
var testimonials = [
	{
		quote: "I booked my mother's cardiology appointment in under a minute and we skipped the whole waiting room queue.",
		name: "Ananya R.",
		city: "Delhi"
	},
	{
		quote: "The live token tracker is genuinely magic. We left home only when our number was 3 away.",
		name: "Vikram S.",
		city: "Pune"
	},
	{
		quote: "All my reports from three different hospitals now sit in one place. No more paper files.",
		name: "Meera K.",
		city: "Kochi"
	}
];
var footerLinks = [
	{
		title: "CareSeva",
		links: [
			"About us",
			"Careers",
			"Newsroom",
			"Contact"
		]
	},
	{
		title: "For patients",
		links: [
			"Book appointment",
			"Live queues",
			"Health records",
			"Help centre"
		]
	},
	{
		title: "For hospitals",
		links: [
			"Add your hospital",
			"Partner dashboard",
			"Queue hardware",
			"Pricing"
		]
	},
	{
		title: "Legal",
		links: [
			"Privacy policy",
			"Terms of use",
			"Data & security",
			"Grievance officer"
		]
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate min-h-[92vh] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_hospital_default,
					alt: "Hospital entrance lit up at dusk",
					width: 1920,
					height: 1088,
					className: "absolute inset-0 -z-20 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-overlay absolute inset-0 -z-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "animate-fade-in font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight text-on-dark",
						children: ["Care", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "Seva"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "animate-fade-in flex items-center gap-3 sm:gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#partners",
							className: "hidden text-sm font-medium text-on-dark-muted transition-colors hover:text-on-dark sm:block",
							children: "Add Hospital"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#get-app",
							className: "rounded-full border border-on-dark/40 px-5 py-2 text-sm font-medium text-on-dark backdrop-blur-sm transition-colors hover:bg-on-dark/10",
							children: "Login / Signup"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-14 pb-24 text-center sm:pt-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "animate-fade-in font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-on-dark sm:text-5xl",
							style: { animationDelay: "80ms" },
							children: ["Care", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Seva"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "animate-fade-in mt-8 text-4xl leading-[1.05] font-extrabold text-balance text-on-dark sm:text-6xl",
							style: { animationDelay: "180ms" },
							children: "Discover the best hospitals and doctors around you."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-scale-in mt-10 w-full rounded-2xl bg-card p-2 shadow-float sm:flex sm:items-center",
							style: { animationDelay: "340ms" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 border-border px-4 py-3 sm:w-[38%] sm:border-r",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "size-5 shrink-0 text-primary",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										"aria-label": "Location",
										placeholder: "Location",
										defaultValue: "Delhi NCR",
										className: "w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 items-center gap-3 px-4 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
										className: "size-5 shrink-0 text-muted-foreground",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										"aria-label": "Search for hospitals, clinics, or specialties",
										placeholder: "Search for hospitals, clinics, or specialties",
										className: "w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "gradient-cta animate-pulse-ring mt-2 w-full rounded-xl px-8 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 sm:mt-0 sm:w-auto",
									children: "Search"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-fade-in mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-on-dark-muted",
							style: { animationDelay: "480ms" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										className: "size-4 text-primary",
										"aria-hidden": true
									}), " Verified hospitals only"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, {
										className: "size-4 text-primary",
										"aria-hidden": true
									}), " Live queue updates"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										className: "size-4 text-primary",
										"aria-hidden": true
									}), " 2M+ patients trust us"]
								})
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border bg-card py-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-marquee flex w-max gap-4",
					children: [...specialties, ...specialties].map(({ name, icon: Icon }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium whitespace-nowrap text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-4 text-primary",
							"aria-hidden": true
						}), name]
					}, `${name}-${i}`))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-20 sm:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold sm:text-4xl",
					children: "Everything care needs, in one app"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: "From finding the right hospital to walking out with your reports — CareSeva covers the whole visit."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: offerings.map(({ title, copy, image, icon: Icon }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: image,
								alt: title,
								width: 800,
								height: 600,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 rounded-xl bg-accent p-2 text-accent-foreground transition-transform duration-300 group-hover:-rotate-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5",
									"aria-hidden": true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold",
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: copy
							})] })]
						})]
					})
				}, title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4",
				children: stats.map(({ value, label }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * 100,
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-[family-name:var(--font-display)] text-4xl font-extrabold text-primary sm:text-5xl",
						children: value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-sm text-muted-foreground",
						children: label
					})]
				}, label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-20 sm:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "max-w-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold sm:text-4xl",
					children: "Three steps to a shorter wait"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-3",
				children: steps.map(({ step, title, copy }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-[family-name:var(--font-display)] text-5xl font-extrabold text-accent",
								children: step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-xl font-bold",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: copy
							})
						]
					})
				}, step))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold sm:text-4xl",
						children: "Top rated near you"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Hand-picked hospitals in Delhi NCR"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#get-app",
						className: "inline-flex items-center gap-2 text-sm font-bold text-primary",
						children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							"aria-hidden": true
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: hospitals.map(({ name, area, rating, wait, image, tags }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group h-full overflow-hidden rounded-2xl bg-card shadow-card transition-transform duration-300 hover:-translate-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[16/10] overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: image,
									alt: name,
									width: 800,
									height: 600,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-3 left-3 rounded-full bg-card/90 px-3 py-1 text-xs font-bold text-card-foreground backdrop-blur",
									children: wait
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold",
										children: name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: area
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex shrink-0 items-center gap-1 rounded-md bg-primary px-2 py-1 text-xs font-bold text-primary-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
											className: "size-3 fill-current",
											"aria-hidden": true
										}), rating]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-2",
									children: tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground",
										children: t
									}, t))
								})]
							})]
						})
					}, name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-20 sm:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-bold sm:text-4xl",
				children: "Popular localities"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted-foreground",
				children: "Explore verified hospitals, clinics and specialists in the places CareSeva serves."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
				children: localities.map(({ city, count }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 50,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#get-app",
						className: "block rounded-xl border border-border bg-card px-5 py-4 transition-all hover:-translate-y-1 hover:border-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-medium text-surface-foreground",
							children: city
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-xs text-muted-foreground",
							children: count
						})]
					})
				}, city))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold sm:text-4xl",
					children: "Loved by patients"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 lg:grid-cols-3",
					children: testimonials.map(({ quote, name, city }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "h-full rounded-2xl border border-border bg-card p-8 shadow-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-1 text-primary",
									children: Array.from({ length: 5 }).map((_, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										className: "size-4 fill-current",
										"aria-hidden": true
									}, s))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
									className: "mt-4 text-sm leading-relaxed text-card-foreground",
									children: [
										"“",
										quote,
										"”"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "mt-6 text-sm font-bold",
									children: [name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 font-normal text-muted-foreground",
										children: city
									})]
								})
							]
						})
					}, name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "partners",
			className: "mx-auto max-w-7xl px-6 py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-8 rounded-3xl border border-border bg-card p-10 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold sm:text-3xl",
						children: "Run a hospital or clinic?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "List on CareSeva, manage your live queue and fill empty slots — free for the first three months."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#partners",
						className: "gradient-cta rounded-xl px-7 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90",
						children: "Add your hospital"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#partners",
						className: "inline-flex items-center gap-2 rounded-xl border border-border px-7 py-3 text-sm font-bold transition-colors hover:bg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "size-4",
							"aria-hidden": true
						}), " Talk to sales"]
					})]
				})]
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "get-app",
			className: "mx-auto max-w-7xl px-6 pb-20 sm:pb-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gradient-cta grid items-center gap-10 overflow-hidden rounded-3xl px-8 py-12 sm:px-14 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-2 lg:order-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-extrabold text-primary-foreground sm:text-4xl",
							children: "Get the CareSeva app"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-primary-foreground/85",
							children: "Book appointments, watch your queue move in real time and carry every report with you."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#get-app",
								className: "hover-scale inline-flex items-center gap-2 rounded-xl bg-card px-6 py-3 text-sm font-bold text-card-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apple, {
									className: "size-5",
									"aria-hidden": true
								}), " App Store"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#get-app",
								className: "hover-scale inline-flex items-center gap-2 rounded-xl bg-card px-6 py-3 text-sm font-bold text-card-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
									className: "size-5",
									"aria-hidden": true
								}), " Google Play"]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "order-1 lg:order-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: app_mockup_default,
						alt: "CareSeva mobile app screens",
						width: 1024,
						height: 1024,
						loading: "lazy",
						className: "animate-float-soft mx-auto w-full max-w-sm rounded-2xl shadow-float"
					})
				})]
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
			className: "border-t border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-2 lg:grid-cols-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight",
								children: ["Care", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "Seva"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xs text-sm text-muted-foreground",
								children: "Care, closer to you. Find hospitals, skip the queue and keep your records safe."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#get-app",
									className: "hover-scale inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-xs font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apple, {
										className: "size-4",
										"aria-hidden": true
									}), " iOS"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#get-app",
									className: "hover-scale inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-xs font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
										className: "size-4",
										"aria-hidden": true
									}), " Android"]
								})]
							})
						]
					}), footerLinks.map(({ title, links }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#get-app",
							className: "text-sm text-muted-foreground transition-colors hover:text-primary",
							children: l
						}) }, l))
					})] }, title))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" CareSeva Health Technologies Pvt. Ltd."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
							className: "size-4 text-primary",
							"aria-hidden": true
						}), " Health data encrypted & ABDM-ready"]
					})]
				})]
			})
		})
	] });
}
//#endregion
export { Index as component };

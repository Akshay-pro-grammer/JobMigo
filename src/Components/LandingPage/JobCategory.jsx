import React from "react";
import Slider from "react-slick"; // Import the carousel
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css";

const JobCategory = () => {
    // Carousel settings
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Infinite loop
        speed: 500, // Transition speed
        slidesToShow: 3, // Number of slides visible
        slidesToScroll: 1, // Number of slides to scroll
        responsive: [
            {
                breakpoint: 1024, // For medium screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // For small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // Job Categories Data
    const categories = [
        {
            img: "/Category/Arts & Design.png",
            title: "Arts & Design",
            description: "Express your creativity in arts and design roles.",
            jobs: "500+ new jobs posted",
        },
        {
            img: "/Category/Content Writing.png",
            title: "Content Writing",
            description: "Join exciting opportunities in content writing.",
            jobs: "300+ new jobs posted",
        },
        {
            img: "/Category/Customer Support.png",
            title: "Customer Support",
            description: "Support customers with care and expertise.",
            jobs: "800+ new jobs posted",
        },
        {
            img: "/Category/Data Entry.png",
            title: "Data Entry",
            description: "Data entry positions available across industries.",
            jobs: "700+ new jobs posted",
        },
        {
            img: "/Category/Digital Marketing.png",
            title: "Digital Marketing",
            description: "Explore digital marketing opportunities.",
            jobs: "1k+ new jobs posted",
        },
        {
            img: "/Category/Finance.png",
            title: "Finance",
            description: "Take on roles in financial management and analysis.",
            jobs: "1.2k+ new jobs posted",
        },
        {
            img: "/Category/Human Resource.png",
            title: "Human Resource",
            description: "Shape organizations with HR expertise.",
            jobs: "600+ new jobs posted",
        },
        {
            img: "/Category/Sales.png",
            title: "Sales",
            description: "Drive business growth with sales expertise.",
            jobs: "900+ new jobs posted",
        },
        {
            img: "/Category/UI-UX Designer.png",
            title: "UI/UX Designer",
            description: "Design seamless user interfaces and experiences.",
            jobs: "400+ new jobs posted",
        },
        {
            img: "/Category/Web Developer.png",
            title: "Web Developer",
            description: "Build dynamic websites and web apps.",
            jobs: "1.5k+ new jobs posted",
        },
    ];

    return (
        <div className="mt-20 pb-5">
            {/* Header */}
            <div className="text-center text-4xl font-semibold mb-3 text-nile-blue-100">
                Browse <span className="text-quarter-spanish-white-400">Job</span> Category
            </div>
            <div className="text-lg text-nile-blue-300 text-center w-3/4 md:w-1/2 mx-auto">
                Explore diverse job opportunities tailored to your skills. Start your career journey with us.
            </div>

            {/* Carousel */}
            <div className="mt-10 mx-10 ">
                <Slider {...settings}>
                    {categories.map((category, index) => (
                        <div key={index} className="">
                            <div className="flex m-2 flex-col items-center border border-quarter-spanish-white-200 shadow-md rounded-lg py-5 hover:shadow-[0_0_5px_2px_black] !shadow-quarter-spanish-white-300 hover:cursor-pointer transition duration-300 ease-in-out">
                                {/* Category Icon */}
                                <div className="p-4 bg-quarter-spanish-white-300 rounded-full">
                                    <img
                                        className="h-10 w-10 object-contain"
                                        src={category.img}
                                        alt={category.title}
                                    />
                                </div>
                                {/* Category Info */}
                                <div className="text-nile-blue-100 text-xl font-semibold mt-3">
                                    {category.title}
                                </div>
                                <div className="text-center text-sm text-nile-blue-300 mt-2">
                                    {category.description}
                                </div>
                                <div className="text-lg text-quarter-spanish-white-300 mt-2">
                                    {category.jobs}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default JobCategory;

import React from 'react'
import "../css/scroll.css"

// reference:https://codepen.io/samwong/pen/xxJMaMP
export default function ScrollVideo(props) {
    window.addEventListener("load", () => {
        const COMPONENT_SELECTOR = ".carousel__wrapper";
        const CONTROLS_SELECTOR = ".carousel__controls";
        const CONTENT_SELECTOR = ".carousel__content";

        const components = document.querySelectorAll(COMPONENT_SELECTOR);

        for (let i = 0; i < components.length; i++) {
            const component = components[i];
            const content = component.querySelector(CONTENT_SELECTOR);
            let x = 0;
            let mx = 0;
            const maxScrollWidth =
                content.scrollWidth - content.clientWidth / 2 - content.clientWidth / 2;
            const nextButton = component.querySelector(".arrow-next");
            const prevButton = component.querySelector(".arrow-prev");

            if (maxScrollWidth !== 0) {
                component.classList.add("has-arrows");
            }

            if (nextButton) {
                nextButton.addEventListener("click", function (event) {
                    event.preventDefault();
                    x = content.clientWidth / 2 + content.scrollLeft + 0;
                    content.scroll({
                        left: x,
                        behavior: "smooth"
                    });
                });
            }

            if (prevButton) {
                prevButton.addEventListener("click", function (event) {
                    event.preventDefault();
                    x = content.clientWidth / 2 - content.scrollLeft + 0;
                    content.scroll({
                        left: -x,
                        behavior: "smooth"
                    });
                });
            }

            /**
             * Mouse move handler.
             *
             * @param {object} e event object.
             */
            const mousemoveHandler = (e) => {
                const mx2 = e.pageX - content.offsetLeft;
                if (mx) {
                    content.scrollLeft = content.sx + mx - mx2;
                }
            };

            /**
             * Mouse down handler.
             *
             * @param {object} e event object.
             */
            const mousedownHandler = (e) => {
                content.sx = content.scrollLeft;
                mx = e.pageX - content.offsetLeft;
                content.classList.add("dragging");
            };

            /**
             * Scroll handler.
             */
            const scrollHandler = () => {
                toggleArrows();
            };

            /**
             * Toggle arrow handler.
             */
            const toggleArrows = () => {
                if (content.scrollLeft > maxScrollWidth - 10) {
                    nextButton.classList.add("disabled");
                } else if (content.scrollLeft < 10) {
                    prevButton.classList.add("disabled");
                } else {
                    nextButton.classList.remove("disabled");
                    prevButton.classList.remove("disabled");
                }
            };

            /**
             * Mouse up handler.
             */
            const mouseupHandler = () => {
                mx = 0;
                content.classList.remove("dragging");
            };

            content.addEventListener("mousemove", mousemoveHandler);
            content.addEventListener("mousedown", mousedownHandler);
            if (component.querySelector(CONTROLS_SELECTOR) !== undefined) {
                content.addEventListener("scroll", scrollHandler);
            }
            content.addEventListener("mouseup", mouseupHandler);
            content.addEventListener("mouseleave", mouseupHandler);
        }
    });
    return (
        <>
            <div className="containerScroll">
                <div className="carousel">
                    <div className="carousel__wrapper">
                        <div className="carousel__header">
                            <h2 className="carousel__headline">Our Lasted Uploads
                            </h2>
                            <div className="carousel__controls">
                                <button className="carousel__arrow disabled arrow-prev"></button>
                                <button className="carousel__arrow arrow-next"></button>
                            </div>
                        </div>
                        <ul className="carousel__content">
                            <li className="carousel__item">
                                <iframe height={250} width={350} src="https://www.youtube.com/embed?listType=playlist&list=UUzpGkJGCGGA106WJvxzc3lQ&index=1"
                                    title="YouTube video player"
                                    allowFullScreen loading='lazy'></iframe>
                            </li>
                            <li className="carousel__item">
                                <iframe height={250} width={350} src="https://www.youtube.com/embed?listType=playlist&list=UUzpGkJGCGGA106WJvxzc3lQ&index=2"
                                    title="YouTube video player"
                                    allowFullScreen loading='lazy'></iframe>
                            </li>
                            <li className="carousel__item">
                                <iframe height={250} width={350} src="https://www.youtube.com/embed?listType=playlist&list=UUzpGkJGCGGA106WJvxzc3lQ&index=3"
                                    title="YouTube video player"
                                    allowFullScreen loading='lazy'>
                                </iframe>
                            </li>
                            <li className="carousel__item">
                                <iframe height={250} width={350} src="https://www.youtube.com/embed?listType=playlist&list=UUzpGkJGCGGA106WJvxzc3lQ&index=4"
                                    title="YouTube video player"
                                    allowFullScreen loading='lazy'>
                                </iframe>
                            </li>
                            <li className="carousel__item">
                                <iframe height={250} width={350} src="https://www.youtube.com/embed?listType=playlist&list=UUzpGkJGCGGA106WJvxzc3lQ&index=5"
                                    title="YouTube video player"
                                    allowFullScreen loading='lazy'>
                                </iframe>
                            </li>
                            <li className="carousel__item">
                                <iframe height={250} width={350} src="https://www.youtube.com/embed?listType=playlist&list=UUzpGkJGCGGA106WJvxzc3lQ&index=6"
                                    title="YouTube video player"
                                    allowFullScreen loading='lazy'>
                                </iframe>
                            </li>
                            <li className="carousel__item">
                                <iframe height={250} width={350} src="https://www.youtube.com/embed?listType=playlist&list=UUzpGkJGCGGA106WJvxzc3lQ&index=7"
                                    title="YouTube video player"
                                    allowFullScreen loading='lazy'>
                                </iframe>
                            </li>
                            <li className="carousel__item">
                                <iframe height={250} width={350} src="https://www.youtube.com/embed?listType=playlist&list=UUzpGkJGCGGA106WJvxzc3lQ&index=7"
                                    title="YouTube video player"
                                    allowFullScreen loading='lazy'>
                                </iframe>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

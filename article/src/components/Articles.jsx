import React, { useContext } from "react";
import { ComponentContext } from "./context/ComponentContext";
import moment from "moment";
import { Link } from "react-router-dom";
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";

export const Articles = () => {
  let count = 0;
  const { article, carousel, currentIndex, setCurrentIndex } =
    useContext(ComponentContext);
  console.log("article =>", article);
  return (
    <>
      <header class="bg-transparent navbar-fixed top-0 bg-slate-700 left-0 w-full flex items-center z-10 fixed">
        <div class="container">
          <div class="flex items-center justify-between relative">
            <div class="px-4">
              <Link to="/" class="font-bold text-lg text-white block py-6">
                Articles
              </Link>
            </div>
            <div class="flex items-center px-4 text-primary">
              <nav
                id="nav-menu"
                class="absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              ></nav>
            </div>
          </div>
        </div>
      </header>
      <section id="card" className="pt-36 pb-32">
        <div className="container flex flex-wrap space-x-4 space-x-reverse space-y-4 space-y-reverse">
          <section className="h-screen w-screen  from-pink-50 to-indigo-100 p-8">
            <h1 className="text-center font-bold text-2xl text-indigo-500">
              All Article
            </h1>
            <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
              {article.length ? (
                article.map((items, index) => (
                  <div
                    className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden"
                    key={index}
                  >
                    <img
                      className="h-56 lg:h-60 w-full object-cover"
                      src={items.urlToImage}
                      alt=""
                    />
                    <div className="p-3">
                      <span className="text-sm text-primary">
                        {moment(items.publishedAt).format("dddd, MMMM Do YYYY")}
                      </span>
                      <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                        {items.title}
                      </h3>
                      <p className="paragraph-normal text-gray-600">
                        {items.description}
                      </p>
                      <a
                        className="mt-3 block"
                        href={items.url}
                        target="_blank"
                      >
                        Show Detail &gt;&gt;
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <div className="card">Sorry No Article Here!</div>
              )}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

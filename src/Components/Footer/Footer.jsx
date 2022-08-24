import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <section className="bg-[#292828] footer">
        <div className="container md:w-5/6 px-2 md:px-0 mx-auto py-9">
          <div className="grid md:grid-cols-4 grid-cols-1 justify-center gap-10 pt-8">
            <div className="flex flex-col">
              <img
                src="https://img.freepik.com/free-vector/elegant-furniture-logo_23-2148453545.jpg?w=826&t=st=1661336484~exp=1661337084~hmac=ad9c1ee5af8fb310422c3e781a1802b6aafdb3e4b1496d03bc7ab2f9b5f20cf0"
                alt="logo"
                className="w-1/2"
              />
              <p className="text-md text-gray-300 md:mt-8 md:mb-20 my-4">
                625 E Franklin Ave, Minneapolis, <br /> MN 55404, USA
              </p>
              <p className="text-md text-gray-300">
                @ 2021{" "}
                <a
                  className="underline"
                  href="https://mahadidev7-portfolio.web.app/"
                >
                  Mahadidev7
                </a>
                . All rights reserved.
              </p>
            </div>
            <div>
              <div>
                <h4 className="text-2xl text-white font-bold mb-6">About us</h4>
                <ul className="flex flex-col md:gap-5 gap-2">
                  <li>
                    <a className="text-md text-gray-300 capitalize" href="./">
                      Our story
                    </a>
                  </li>
                  <li>
                    <a className="text-md text-gray-300 capitalize" href="./">
                      designer
                    </a>
                  </li>
                  <li>
                    <a className="text-md text-gray-300 capitalize" href="./">
                      craftsmanship
                    </a>
                  </li>
                  <li>
                    <a className="text-md text-gray-300 capitalize" href="./">
                      sustainability
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h4 className="text-2xl text-white font-bold mb-6">Support</h4>
                <ul className="flex flex-col md:gap-5 gap-2">
                  <li>
                    <a className="text-md text-gray-300 capitalize" href="./">
                      FAQ's
                    </a>
                  </li>
                  <li>
                    <a className="text-md text-gray-300 capitalize" href="./">
                      shipping & returns
                    </a>
                  </li>
                  <li>
                    <a className="text-md text-gray-300 capitalize" href="./">
                      care guide
                    </a>
                  </li>
                  <li>
                    <a className="text-md text-gray-300 capitalize" href="./">
                      warranty
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h4 className="text-2xl text-white font-bold mb-6">
                  Contact us
                </h4>
                <ul className="flex flex-col md:gap-5 gap-2">
                  <li className="flex gap-5 text-md text-gray-300 items-center">
                    <span>
                      <a href="tel:+2 666327232147">
                        {" "}
                        <IoCallOutline className="text-2xl" />{" "}
                      </a>
                    </span>
                    <span>
                      <a href="tel:+2 666327232147">+2 666327232147</a>
                    </span>
                  </li>
                  <li className="flex gap-5 text-md text-gray-300 items-center">
                    <span>
                      <a href="mailto:mahadidev7@gmail.com">
                        {" "}
                        <HiOutlineMail className="text-2xl" />
                      </a>
                    </span>
                    <span>
                      <a href="mailto:mahadidev7@gmail.com">
                        mdrafiprogrammer@gmailcom
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-5 text-md text-gray-300 items-center my-6 ml-3">
                    <span>
                      <a href="mailto:mahadidev7@gmail.com">
                        {" "}
                        <FaFacebookF className="text-2xl" />
                      </a>
                    </span>
                    <span>
                      <a href="mailto:mahadidev7@gmail.com">
                        <BsInstagram className="text-2xl" />{" "}
                      </a>
                    </span>
                    <span>
                      <a href="mailto:mahadidev7@gmail.com">
                        <AiOutlineTwitter className="text-2xl" />
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" pt-14">
            <p className="capitalize flex items-center justify-center gap-4">
              <span>
                <a href="./">Privacy policy</a>
              </span>{" "}
              |
              <span>
                <a href="./">term of usw</a>
              </span>{" "}
              |
              <span>
                <a href="./">california code</a>
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
